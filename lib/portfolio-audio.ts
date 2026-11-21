const STEP_SECONDS = 60 / 96 / 2;
const MELODY = [76, 0, 79, 0, 83, 81, 79, 0, 74, 0, 78, 0, 81, 79, 78, 0,
  72, 0, 76, 0, 79, 78, 76, 0, 74, 0, 78, 0, 81, 0, 78, 0];
const ROOTS = [52, 50, 48, 50];

class PortfolioAudio {
  private context: AudioContext | null = null;
  private master: GainNode | null = null;
  private musicGain: GainNode | null = null;
  private effectsGain: GainNode | null = null;
  private timer: ReturnType<typeof setInterval> | null = null;
  private musicVoices = new Set<OscillatorNode>();
  private effectVoices = new Set<OscillatorNode>();
  private enabled = true;
  private unavailable = false;
  private listeners = new Set<() => void>();
  private pendingEffect: { kind: 'page' | 'project'; requestedAt: number } | null = null;
  private step = 0;
  private nextNoteAt = 0;
  private lastProjectAt = -Infinity;

  subscribe = (listener: () => void) => {
    this.listeners.add(listener);
    return () => { this.listeners.delete(listener); };
  };

  getSnapshot = (): 'playing' | 'pending' | 'muted' | 'unavailable' => {
    if (!this.enabled) return 'muted';
    if (this.unavailable) return 'unavailable';
    return this.context?.state === 'running' ? 'playing' : 'pending';
  };

  private notify() {
    this.listeners.forEach((listener) => listener());
  }

  async enable() {
    this.enabled = true;
    this.unavailable = false;
    try {
      if (!this.context) {
        this.context = new AudioContext();
        this.master = this.context.createGain();
        this.master.gain.value = 1;
        this.master.connect(this.context.destination);
        this.musicGain = this.context.createGain();
        this.musicGain.gain.value = .5;
        this.musicGain.connect(this.master);
        this.effectsGain = this.context.createGain();
        this.effectsGain.gain.value = .7;
        this.effectsGain.connect(this.master);
        this.context.onstatechange = () => {
          if (this.enabled && this.context?.state === 'running') {
            this.startMusic();
            this.flushPendingEffect();
          } else this.stopMusic();
          this.notify();
        };
      }
      this.notify();
      await this.context.resume();
      if (!this.enabled) return false;
      this.startMusic();
      this.flushPendingEffect();
      this.notify();
      return this.context.state === 'running';
    } catch (error) {
      this.unavailable = !(error instanceof DOMException && error.name === 'NotAllowedError');
      this.notify();
      return false;
    }
  }

  disable() {
    this.enabled = false;
    this.pendingEffect = null;
    this.stopMusic();
    this.stopVoices(this.effectVoices);
    void this.context?.suspend().catch(() => {});
    this.notify();
  }

  unlock() {
    if (this.enabled && this.context?.state !== 'running') void this.enable();
  }

  setVisible(visible: boolean) {
    if (!visible) {
      this.pendingEffect = null;
      this.stopMusic();
      this.stopVoices(this.effectVoices);
      void this.context?.suspend().catch(() => {});
    } else if (this.enabled) {
      this.unlock();
    }
  }

  playPage() {
    this.requestEffect('page');
  }

  playProject() {
    this.requestEffect('project');
  }

  private requestEffect(kind: 'page' | 'project') {
    if (!this.enabled) return;
    this.pendingEffect = { kind, requestedAt: Date.now() };
    if (this.context?.state === 'running') this.flushPendingEffect();
    else this.unlock();
  }

  private flushPendingEffect() {
    const effect = this.pendingEffect;
    if (!effect || !this.enabled || this.context?.state !== 'running') return;
    this.pendingEffect = null;
    if (Date.now() - effect.requestedAt > 1000) return;
    if (effect.kind === 'page') this.pageEffect();
    else this.projectEffect();
  }

  private pageEffect() {
    this.stopVoices(this.effectVoices);
    const now = this.context!.currentTime;
    [72, 79, 84].forEach((note, index) => {
      this.tone(note, now + index * .06, .14, .14, 'square', false);
    });
  }

  private projectEffect() {
    const now = this.context!.currentTime;
    if (now - this.lastProjectAt < .1) return;
    this.lastProjectAt = now;
    this.stopVoices(this.effectVoices);
    this.tone(79, now, .065, .08, 'square', false);
    this.tone(83, now + .035, .08, .06, 'triangle', false);
  }

  private tone(note: number, when: number, duration: number, volume: number, type: OscillatorType, music: boolean) {
    const context = this.context;
    const output = music ? this.musicGain : this.effectsGain;
    if (!context || !output) return;
    const oscillator = context.createOscillator();
    const envelope = context.createGain();
    const voices = music ? this.musicVoices : this.effectVoices;
    oscillator.type = type;
    oscillator.frequency.value = 440 * 2 ** ((note - 69) / 12);
    envelope.gain.setValueAtTime(0, when);
    envelope.gain.linearRampToValueAtTime(volume, when + .008);
    envelope.gain.exponentialRampToValueAtTime(.0001, when + duration);
    oscillator.connect(envelope);
    envelope.connect(output);
    voices.add(oscillator);
    oscillator.onended = () => {
      voices.delete(oscillator);
      oscillator.disconnect();
      envelope.disconnect();
    };
    oscillator.start(when);
    oscillator.stop(when + duration + .01);
  }

  private startMusic() {
    if (this.timer || !this.context || this.context.state !== 'running') return;
    this.nextNoteAt = this.context.currentTime + .05;
    this.scheduleMusic();
    this.timer = setInterval(() => this.scheduleMusic(), 100);
  }

  private scheduleMusic() {
    const context = this.context;
    if (!context || context.state !== 'running') return;
    // Skip missed beats after a stalled tab instead of playing them all at once.
    if (this.nextNoteAt < context.currentTime) this.nextNoteAt = context.currentTime + .02;
    while (this.nextNoteAt < context.currentTime + .25) {
      const melody = MELODY[this.step % MELODY.length];
      const root = ROOTS[Math.floor(this.step / 8) % ROOTS.length];
      if (melody) this.tone(melody, this.nextNoteAt, .4, .085, 'triangle', true);
      if (this.step % 2 === 0) this.tone(root, this.nextNoteAt, .5, .1, 'sine', true);
      if (this.step % 8 === 0) {
        [root + 12, root + 19].forEach((note) => this.tone(note, this.nextNoteAt, 2.2, .025, 'sine', true));
      }
      this.step = (this.step + 1) % MELODY.length;
      this.nextNoteAt += STEP_SECONDS;
    }
  }

  private stopMusic() {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
    this.stopVoices(this.musicVoices);
  }

  private stopVoices(voices: Set<OscillatorNode>) {
    voices.forEach((voice) => voice.stop());
    voices.clear();
  }
}

let audio: PortfolioAudio | undefined;

export function getPortfolioAudio() {
  return audio ??= new PortfolioAudio();
}
