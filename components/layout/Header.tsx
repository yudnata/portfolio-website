'use client';

import { useState, useEffect, useRef } from 'react';
import { TransitionLink as Link } from './TransitionLoader';
import { usePathname } from 'next/navigation';

const navItems = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'projects', label: 'Projects', href: '/projects' },
  { id: 'experience', label: 'Experience', href: '/experience' },
  { id: 'skills', label: 'Skills', href: '/skills' },
  { id: 'education', label: 'Education', href: '/education' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    let ticking = false;

    const updateScrollState = () => {
      const scrolled = window.scrollY > 50;
      if (isMounted.current) {
        setIsScrolled(scrolled);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollState();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateScrollState();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      isMounted.current = false;
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      setTimeout(() => {
        if (isMounted.current) {
          setIsMobileMenuOpen(false);
        }
      }, 0);
    }
  }, [pathname]);

  const headerBaseClass =
    'fixed top-0 left-0 right-0 py-2 lg:py-4 px-4 sm:px-6 md:px-8 z-200 transition-all duration-300 select-none';
  const headerScrolledClass = isScrolled
    ? 'bg-pixel-bg-medium/95 shadow-md backdrop-blur-sm'
    : 'bg-linear-to-b from-pixel-bg-medium/95 to-transparent';

  return (
    <header
      className={`${headerBaseClass} ${headerScrolledClass}`}
      role="banner"
    >
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 font-pixel text-sm md:text-base text-primary text-shadow-sm group no-underline"
        >
          <span>YUDNATA</span>
        </Link>

        <nav
          className="hidden lg:block"
          role="navigation"
        >
          <ul className="flex gap-2 p-0 m-0 list-none">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`
                      flex items-center gap-2 px-3 py-2 text-[0.6rem] font-pixel no-underline transition-all duration-200 border border-transparent rounded-lg
                      ${
                        isActive
                          ? 'bg-white text-black font-bold shadow-[0_0_10px_rgba(255,255,255,0.4)]'
                          : 'bg-transparent text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20'
                      }
                    `}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="lg:hidden flex items-center justify-center gap-2 min-h-11 min-w-11 px-3 bg-transparent text-white font-pixel text-[0.625rem] cursor-pointer rounded-md hover:bg-white/10"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span aria-hidden="true" className="text-base">{isMobileMenuOpen ? '✕' : '☰'}</span>
          <span>{isMobileMenuOpen ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        inert={!isMobileMenuOpen}
        className={`
          lg:hidden fixed top-15 left-0 right-0 bg-pixel-bg-medium/98 backdrop-blur-md border-b border-white/10
          overflow-x-hidden transition-all duration-300 ease-in-out z-190 shadow-2xl
          ${isMobileMenuOpen ? 'max-h-[calc(100dvh-3.75rem)] overflow-y-auto opacity-100 py-4' : 'max-h-0 overflow-y-hidden opacity-0 py-0'}
        `}
      >
        <ul className="flex flex-col gap-2 px-4 container mx-auto max-w-7xl">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-3 min-h-11 p-3 font-pixel text-[0.7rem] no-underline transition-all border-l-2 rounded-r-lg
                    ${
                      isActive
                        ? 'bg-white/10 text-white border-white'
                        : 'text-gray-400 border-transparent hover:text-white hover:bg-white/5'
                    }
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-15 bg-black/80 backdrop-blur-sm z-180"
          onClick={() => setIsMobileMenuOpen(false)}
          onKeyDown={(e) => e.key === 'Escape' && setIsMobileMenuOpen(false)}
          role="button"
          tabIndex={0}
          aria-label="Close menu"
        />
      )}
    </header>
  );
}
