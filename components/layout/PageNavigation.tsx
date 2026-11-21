'use client';

import { usePathname } from 'next/navigation';
import { navItems } from '@/data/navigation';
import { TransitionLink } from './TransitionLoader';
import styles from './page-navigation.module.css';

export default function PageNavigation() {
  const pathname = usePathname();
  const currentIndex = navItems.findIndex((item) => item.href === pathname);
  if (currentIndex === -1) return null;

  return (
    <nav aria-label="Previous and next pages" className={styles.navigation}>
      {([-1, 1] as const).map((direction) => {
        const page = navItems[currentIndex + direction];
        const label = direction === -1 ? 'Previous page' : 'Next page';
        const arrow = (
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 16 16" fill="currentColor" shapeRendering="crispEdges"
            className={direction === 1 ? styles.nextArrow : undefined}>
            <path d="M6 2h2v2H6v2H4v1h10v2H4v1h2v2h2v2H6v-2H4v-2H2V6h2V4h2Z" />
          </svg>
        );

        return page ? (
          <TransitionLink key={direction} href={page.href} className={styles.arrow}
            aria-label={`${label}: ${page.label}`} title={`${label}: ${page.label}`}>
            {arrow}
            <span className={styles.destination} aria-hidden="true">{page.label}</span>
          </TransitionLink>
        ) : (
          <span key={direction} className={styles.arrow} role="link" aria-disabled="true" aria-label={label}>
            {arrow}
          </span>
        );
      })}
    </nav>
  );
}
