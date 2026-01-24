'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { id: 'home', label: 'Home', href: '/', icon: '🏠' },
  { id: 'about', label: 'About', href: '/about', icon: '👤' },
  { id: 'projects', label: 'Projects', href: '/projects', icon: '💻' },
  { id: 'skills', label: 'Skills', href: '/skills', icon: '⚔️' },
  { id: 'education', label: 'Education', href: '/education', icon: '📚' },
  { id: 'contact', label: 'Contact', href: '/contact', icon: '✉️' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mounted check to prevent any hydration mismatch or unsafe state updates
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

    // Initial check
    updateScrollState();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      isMounted.current = false;
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    if (isMounted.current) {
      // Defer the state update to avoid "Synchronous update" warnings during navigation
      setTimeout(() => {
        if (isMounted.current) {
          setIsMobileMenuOpen(false);
        }
      }, 0);
    }
  }, [pathname]);

  const headerBaseClass =
    'fixed top-0 left-0 right-0 py-4 px-6 md:px-8 z-200 transition-all duration-300';
  const headerScrolledClass = isScrolled
    ? 'bg-[#16213ef0] shadow-md'
    : 'bg-gradient-to-b from-[#16213ef2] to-transparent';

  return (
    <header
      className={`${headerBaseClass} ${headerScrolledClass}`}
      role="banner"
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-pixel text-sm md:text-base text-accent-alt text-shadow-sm group no-underline"
        >
          <span>YUDNATA</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:block"
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
                      flex items-center gap-2 px-3 py-2 text-[0.55rem] font-pixel no-underline transition-all duration-200 border-2
                      ${
                        isActive
                          ? 'bg-linear-to-b from-accent to-accent-dark text-white border-accent shadow-pixel'
                          : 'bg-transparent text-pixel-text-secondary border-transparent hover:bg-linear-to-b hover:from-primary-light hover:to-primary hover:text-white hover:-translate-y-0.5 hover:shadow-pixel-sm'
                      }
                    `}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span aria-hidden="true">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-pixel-bg-medium border-2 border-primary p-2 text-white font-pixel cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`
          md:hidden fixed top-[60px] left-0 right-0 bg-[#16213efa] backdrop-blur-md border-b-2 border-primary
          overflow-hidden transition-all duration-300 ease-in-out z-190
          ${isMobileMenuOpen ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}
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
                    flex items-center gap-3 p-3 font-pixel text-[0.7rem] no-underline transition-all border-l-4
                    ${
                      isActive
                        ? 'bg-linear-to-r from-accent/20 to-transparent text-white border-accent-alt'
                        : 'text-pixel-text-secondary border-transparent hover:text-white'
                    }
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[60px] bg-black/50 backdrop-blur-sm z-180"
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
