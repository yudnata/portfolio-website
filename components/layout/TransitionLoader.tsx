'use client';

import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef, type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import type { ComponentProps } from 'react';
import { waitForPageBackground } from '@/lib/page-transition';
import PageLoadingIndicator from '@/components/ui/PageLoadingIndicator';
import loadingStyles from '@/components/ui/page-loading.module.css';
import { getPortfolioAudio } from '@/lib/portfolio-audio';

const TransitionContext = createContext<((href: string) => void) | null>(null);
const GRID_COLUMNS = 12;
const GRID_ROWS = 10;

export function TransitionLink({ href, ...props }: Omit<ComponentProps<typeof Link>, 'href' | 'onNavigate'> & { href: string }) {
  const navigate = useContext(TransitionContext);

  return (
    <Link {...props} href={href} onNavigate={(event) => {
      const target = new URL(href, window.location.href);
      if (!navigate || target.origin !== window.location.origin || target.pathname === window.location.pathname) return;
      event.preventDefault();
      navigate(href);
    }} />
  );
}

export default function TransitionLoader({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const previousPath = useRef(pathname);
  const overlayRef = useRef<HTMLDivElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation | null>(null);
  const pixelAnimationsRef = useRef<Animation[]>([]);
  const pendingRef = useRef(false);
  const watchdogRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const feedbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleFeedback = useCallback(() => {
    if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
    feedbackTimerRef.current = setTimeout(() => {
      feedbackTimerRef.current = null;
      if (feedbackRef.current) feedbackRef.current.dataset.visible = 'true';
    }, 250);
  }, []);

  const reveal = useCallback(() => {
    if (watchdogRef.current) clearTimeout(watchdogRef.current);
    if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
    feedbackTimerRef.current = null;
    if (feedbackRef.current) feedbackRef.current.dataset.visible = 'false';
    const overlay = overlayRef.current;
    if (!overlay) return;
    animationRef.current?.cancel();
    pixelAnimationsRef.current.forEach((animation) => animation.cancel());
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pixels = Array.from(overlay.querySelectorAll<HTMLDivElement>('[data-transition-pixel]'));
    for (let index = pixels.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [pixels[index], pixels[randomIndex]] = [pixels[randomIndex], pixels[index]];
    }
    const animations = pixels.map((pixel, index) => pixel.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: reducedMotion ? 0 : 180,
      delay: reducedMotion ? 0 : index / Math.max(pixels.length - 1, 1) * 100,
      easing: 'ease-out',
      fill: 'forwards',
    }));
    pixelAnimationsRef.current = animations;
    void Promise.all(animations.map((animation) => animation.finished)).then(() => {
      overlay.style.opacity = '0';
      overlay.style.visibility = 'hidden';
      overlay.style.pointerEvents = 'none';
      pendingRef.current = false;
      animations.forEach((animation) => animation.cancel());
      pixelAnimationsRef.current = [];
    }).catch(() => {});
  }, []);

  const navigate = useCallback((href: string) => {
    if (pendingRef.current) return;
    getPortfolioAudio().playPage();
    const overlay = overlayRef.current;
    if (!overlay) { router.push(href); return; }
    pendingRef.current = true;
    scheduleFeedback();
    overlay.style.visibility = 'visible';
    overlay.style.pointerEvents = 'auto';
    animationRef.current?.cancel();
    pixelAnimationsRef.current.forEach((animation) => animation.cancel());
    pixelAnimationsRef.current = [];
    router.prefetch(href);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const animation = overlay.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: reducedMotion ? 0 : 100,
      easing: 'ease-out',
      fill: 'forwards',
    });
    animationRef.current = animation;
    void animation.finished.then(() => {
      overlay.style.opacity = '1';
      animation.cancel();
      animationRef.current = null;
      watchdogRef.current = setTimeout(reveal, 8000);
      try { router.push(href); }
      catch { reveal(); }
    }).catch(() => {});
  }, [router, reveal, scheduleFeedback]);

  useLayoutEffect(() => {
    if (previousPath.current === pathname) return;
    if (!pendingRef.current) getPortfolioAudio().playPage();
    previousPath.current = pathname;
    const overlay = overlayRef.current;
    if (!overlay) return;
    animationRef.current?.cancel();
    pixelAnimationsRef.current.forEach((animation) => animation.cancel());
    pixelAnimationsRef.current = [];
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'auto';
    pendingRef.current = true;
    if (!feedbackTimerRef.current && feedbackRef.current?.dataset.visible !== 'true') scheduleFeedback();
    const controller = new AbortController();
    void waitForPageBackground(document, controller.signal).then(() => {
      if (!controller.signal.aborted) reveal();
    });
    return () => controller.abort();
  }, [pathname, reveal, scheduleFeedback]);

  useEffect(() => () => {
    animationRef.current?.cancel();
    pixelAnimationsRef.current.forEach((animation) => animation.cancel());
    if (watchdogRef.current) clearTimeout(watchdogRef.current);
    if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
  }, []);

  return (
    <TransitionContext.Provider value={navigate}>
      {children}
      <div ref={overlayRef} aria-hidden="true" className="fixed inset-0 z-9999 grid"
        style={{
          visibility: 'hidden', opacity: 0, pointerEvents: 'none',
          gridTemplateColumns: `repeat(${GRID_COLUMNS}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${GRID_ROWS}, minmax(0, 1fr))`,
        }}>
        {Array.from({ length: GRID_COLUMNS * GRID_ROWS }, (_, index) => (
          <div key={index} data-transition-pixel className="bg-pixel-bg-dark" />
        ))}
      </div>
      <div ref={feedbackRef} className={loadingStyles.feedback} data-visible="false" role="status" aria-live="polite" aria-atomic="true">
        <PageLoadingIndicator />
      </div>
    </TransitionContext.Provider>
  );
}
