'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { getPortfolioAudio } from '@/lib/portfolio-audio';

const getServerSnapshot = () => 'pending' as const;

export default function AudioControls({ className }: { className: string }) {
  const audio = getPortfolioAudio();
  const status = useSyncExternalStore(audio.subscribe, audio.getSnapshot, getServerSnapshot);
  const enabled = status === 'playing' || status === 'pending';

  useEffect(() => {
    const onInteraction = () => audio.unlock();
    const onVisibilityChange = () => audio.setVisible(!document.hidden);
    // Retry inside a real user gesture when the browser blocks initial autoplay.
    document.addEventListener('pointerdown', onInteraction, true);
    document.addEventListener('click', onInteraction, true);
    document.addEventListener('touchend', onInteraction, { capture: true, passive: true });
    document.addEventListener('keydown', onInteraction, true);
    document.addEventListener('visibilitychange', onVisibilityChange);
    if (!document.hidden) audio.unlock();
    return () => {
      document.removeEventListener('pointerdown', onInteraction, true);
      document.removeEventListener('click', onInteraction, true);
      document.removeEventListener('touchend', onInteraction, true);
      document.removeEventListener('keydown', onInteraction, true);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      audio.setVisible(false);
    };
  }, [audio]);

  const label = enabled ? 'Mute audio' : 'Enable audio';

  return (
    <button type="button" className={className} data-active={enabled}
      aria-label={label} aria-pressed={enabled} title={label}
      onClick={() => { if (enabled) audio.disable(); else void audio.enable(); }}>
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 16 16" fill="currentColor" shapeRendering="crispEdges">
        <path d="M6 2h7v8h-2V5H8v7H6v2H2v-2H1v-2h1V9h4V2Zm5 8h3v1h1v2h-1v1h-3v-1h-1v-2h1v-1Z" />
        {!enabled && <path d="M1 1h2v2H1zm2 2h2v2H3zm2 2h2v2H5zm2 2h2v2H7zm2 2h2v2H9zm2 2h2v2h-2zm2 2h2v2h-2Z" />}
      </svg>
      <span className="sr-only" role="status">
        {status === 'pending' ? 'Audio ready, waiting for browser playback permission' : status === 'unavailable' ? 'Audio unavailable, press to retry' : enabled ? 'Audio on' : 'Audio off'}
      </span>
    </button>
  );
}
