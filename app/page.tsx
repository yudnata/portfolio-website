'use client';

import { useState, useEffect, useRef } from 'react';
import { Header } from '@/components/layout';
import { PageBackground, DialogBox, PixelButton } from '@/components/ui';
import { introDialogs } from '@/data';
import Link from 'next/link';

export default function HomePage() {
  const [introState, setIntroState] = useState<'playing' | 'completed' | 'loading'>('loading');
  const [dialogIndex, setDialogIndex] = useState(0);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    
    // Defer state update to avoid synchronous update warning during hydration
    const timer = setTimeout(() => {
      if (!isMounted.current) return;
      
      try {
        const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
        if (hasSeenIntro) {
          setIntroState('completed');
        } else {
          setIntroState('playing');
        }
      } catch {
        // Fallback if sessionStorage is not available
        setIntroState('playing');
      }
    }, 0);

    return () => {
      isMounted.current = false;
      clearTimeout(timer);
    };
  }, []);

  const handleNextDialog = () => {
    if (dialogIndex < introDialogs.length - 1) {
      setDialogIndex((prev) => prev + 1);
    } else {
      finishIntro();
    }
  };

  const finishIntro = () => {
    if (!isMounted.current) return;
    
    // Mark as completed first visually
    setIntroState('completed');
    
    // Then persist (side effect)
    try {
      sessionStorage.setItem('hasSeenIntro', 'true');
    } catch (e) {
      console.error('Session storage error:', e);
    }
  };

  if (introState === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pixel-bg-dark">
        <div className="font-pixel text-accent animate-pulse">Loading...</div>
      </div>
    );
  }

  // INTRO VIEW
  if (introState === 'playing') {
    return (
      <div className="fixed inset-0 z-50">
        <PageBackground
          imageSrc="/assets/introduction.png"
          alt="Introduction background"
          overlayOpacity={0.2}
          priority={true}
        />

        <button
          onClick={finishIntro}
          className="fixed top-5 right-5 font-pixel text-[0.6rem] py-2 px-4 bg-black/50 border-2 border-pixel-text-muted text-pixel-text-muted cursor-pointer z-1001 hover:border-accent hover:text-accent transition-colors"
        >
          SKIP ▶▶
        </button>

        <main className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%] text-center z-100 w-full px-4">
          <h1 className="font-pixel text-3xl md:text-5xl text-accent-alt text-shadow-pixel mb-4 animate-float">
            YUDNATA
          </h1>
          <p className="font-retro text-xl md:text-2xl text-pixel-text-secondary text-shadow-sm">
            ~ Web Developer Portfolio ~
          </p>
        </main>

        <DialogBox
          data={introDialogs[dialogIndex]}
          // Important: Pass empty function if not needed to avoid potential rerenders from parent logic
          onComplete={() => {}} 
          showContinueIndicator={true}
        />
        
        {/* Invisible overlay to catch clicks for next dialog */}
        <div 
          className="absolute inset-0 z-90" 
          onClick={handleNextDialog}
          aria-label="Next dialog"
          role="button"
          tabIndex={0}
        />

        {/* Indicators */}
        <div className="fixed bottom-40 left-1/2 -translate-x-1/2 flex gap-2 z-101">
          {introDialogs.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 border-2 border-pixel-bg-dark transition-colors ${
                index <= dialogIndex ? 'bg-accent' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  // MAIN HOME VIEW
  return (
    <div className="relative min-h-screen overflow-hidden">
      <PageBackground
        imageSrc="/images/home.webp"
        alt="Home page background"
        overlayOpacity={0.3}
        priority={true}
      />

      <Header />

      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 md:p-12 pt-[100px]">
        <section className="text-center max-w-3xl animate-pixel-fade">
          {/* Avatar */}
          <div className="w-32 h-32 mx-auto mb-8 bg-linear-to-br from-primary to-accent border-4 border-accent-alt shadow-pixel-lg flex items-center justify-center text-6xl animate-float">
            👨‍💻
          </div>

          <h1 className="font-pixel text-2xl md:text-4xl text-accent-alt text-shadow-pixel mb-4 leading-tight">
            Hi, I&apos;m Yudnata!
          </h1>

          <p className="font-retro text-2xl md:text-4xl text-pixel-text-secondary mb-2">
            ⚡ Web Developer | Code Adventurer ⚡
          </p>

          <p className="font-retro text-lg md:text-xl text-pixel-text-muted mb-8 max-w-xl mx-auto">
            Crafting beautiful, functional, and pixel-perfect web experiences.
            Let&apos;s embark on a coding adventure together!
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <PixelButton variant="accent" size="lg" href="/projects" icon="🎮">
              View Projects
            </PixelButton>

            <PixelButton variant="gold" size="lg" href="/contact" icon="📧">
              Contact Me
            </PixelButton>
          </div>
        </section>

        {/* Quick Nav Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mt-16 px-4">
          {[
            { icon: '👤', title: 'About Me', desc: 'My story & journey', href: '/about' },
            { icon: '⚔️', title: 'Skills', desc: 'Tech & abilities', href: '/skills' },
            { icon: '📚', title: 'Education', desc: 'Learning path', href: '/education' },
          ].map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className="block bg-[#16213ee6] border-3 border-primary p-6 text-center no-underline shadow-pixel transition-all hover:-translate-y-1 hover:shadow-pixel-lg hover:border-accent group animate-pixel-fade"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <span className="text-4xl block mb-2 group-hover:scale-110 transition-transform">{item.icon}</span>
              <h3 className="font-pixel text-xs text-accent-alt mb-2">{item.title}</h3>
              <p className="font-retro text-lg text-pixel-text-muted m-0">{item.desc}</p>
            </Link>
          ))}
        </section>
      </main>

      <footer className="fixed bottom-5 left-1/2 -translate-x-1/2 font-retro text-base text-pixel-text-muted opacity-70 text-center w-full pointer-events-none">
        <p>Scroll down or use navigation to explore ✨</p>
      </footer>
    </div>
  );
}
