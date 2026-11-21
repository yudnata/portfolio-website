'use client';

import { useEffect, useRef, useSyncExternalStore } from 'react';
import { getPortfolioAudio } from '@/lib/portfolio-audio';
import styles from './page-navigation.module.css';

const getServerSnapshot = () => 'pending' as const;

export default function MusicVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audio = getPortfolioAudio();
  const status = useSyncExternalStore(audio.subscribe, audio.getSnapshot, getServerSnapshot);

  useEffect(() => {
    const context = canvasRef.current?.getContext('2d');
    if (!context) return;
    const levels = new Float32Array(8);
    const peaks = new Float32Array(8);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let lastDrawAt = -Infinity;

    function draw(time: number) {
      if (!context) return;
      const playing = status === 'playing';
      if (time - lastDrawAt >= 1000 / 30) {
        lastDrawAt = time;
        audio.readMusicLevels(levels);
        context.clearRect(0, 0, 40, 28);
        context.fillStyle = playing ? '#f5f7fa' : '#7b8290';
        for (let band = 0; band < levels.length; band++) {
          peaks[band] = playing ? Math.max(levels[band], peaks[band] * .82) : 0;
          const segments = Math.max(1, Math.round(peaks[band] * 9));
          for (let segment = 0; segment < segments; segment++) {
            context.fillRect(band * 5, 26 - segment * 3, 4, 2);
          }
        }
      }
      if (playing && !reducedMotion.matches && !document.hidden) frame = requestAnimationFrame(draw);
    }

    function start() {
      cancelAnimationFrame(frame);
      lastDrawAt = -Infinity;
      draw(performance.now());
    }

    start();
    reducedMotion.addEventListener('change', start);
    return () => {
      cancelAnimationFrame(frame);
      reducedMotion.removeEventListener('change', start);
    };
  }, [audio, status]);

  return <canvas ref={canvasRef} className={styles.visualizer} width={40} height={28} aria-hidden="true" />;
}
