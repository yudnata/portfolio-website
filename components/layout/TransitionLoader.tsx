'use client';

import { useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

const GRID_COLS = 12;
const GRID_ROWS = 10;

export default function TransitionLoader() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const pixelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const isFirstMount = useRef(true);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const runAnimation = useCallback(() => {
    const container = containerRef.current;
    const pixels = pixelsRef.current.filter(Boolean) as HTMLDivElement[];

    if (!container || pixels.length === 0) return;

    // Kill any existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // Shuffle pixels for random effect
    const shuffledPixels = [...pixels].sort(() => Math.random() - 0.5);

    // Show container and set all pixels to visible (black screen)
    gsap.set(container, { display: 'block' });
    gsap.set(pixels, { opacity: 1 });

    // Create new timeline
    timelineRef.current = gsap.timeline({
      onComplete: () => {
        gsap.set(container, { display: 'none' });
      },
    });

    // Hold black screen briefly
    timelineRef.current.to({}, { duration: 0.3 });

    // Exit animation - random pixels disappear to reveal page
    timelineRef.current.to(shuffledPixels, {
      opacity: 0,
      duration: 0.3,
      stagger: {
        each: 0.004,
        from: 'random',
      },
      ease: 'none',
    });
  }, []);

  useEffect(() => {
    // Skip animation on first mount
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    runAnimation();

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [pathname, runAnimation]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 pointer-events-none"
      style={{ display: 'none' }}
    >
      <div
        className="w-full h-full grid"
        style={{
          gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
          gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
        }}
      >
        {Array.from({ length: GRID_COLS * GRID_ROWS }).map((_, index) => (
          <div
            key={index}
            ref={(el) => {
              pixelsRef.current[index] = el;
            }}
            className="bg-pixel-bg-dark"
            style={{ opacity: 0 }}
          />
        ))}
      </div>
    </div>
  );
}
