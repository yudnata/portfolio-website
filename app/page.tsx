'use client';

import { useState, useRef, useEffect } from 'react';
import { Header } from '@/components/layout';
import { PageBackground, PixelButton } from '@/components/ui';
import { introDialogs } from '@/data';
import Link from 'next/link';

export default function HomePage() {
  const [dialogIndex, setDialogIndex] = useState(0);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleNextDialog = () => {
    if (dialogIndex < introDialogs.length - 1) {
      setDialogIndex((prev) => prev + 1);
    } else {
      // Loop back to start or handle completion
      // For now, let's just loop or stop. Let's restart for interactivity.
      setDialogIndex(0);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <PageBackground
        imageSrc="/images/home.webp"
        alt="Home page background"
        overlayOpacity={0.3}
        priority={true}
      />

      <Header />

      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 md:p-12 pt-[100px] mb-20 md:mb-0">
        <section className="text-center max-w-3xl animate-pixel-fade w-full">
          <h1 className="font-pixel text-2xl md:text-3xl text-primary text-shadow-pixel mb-4 leading-tight tracking-wide">
            Hi, I&apos;m Yudnata!
          </h1>

          <p className="font-retro text-2xl md:text-4xl text-white drop-shadow-md mb-2">
            Web Developer | Code Adventurer
          </p>

          <p className="font-retro text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto drop-shadow-sm">
            Crafting beautiful, functional, and pixel-perfect web experiences. Let&apos;s embark on
            a coding adventure together!
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-8 mb-16">
            <PixelButton
              variant="primary"
              size="lg"
              href="/projects"
            >
              View Projects
            </PixelButton>

            <PixelButton
              variant="outline"
              size="lg"
              href="/contact"
            >
              Contact Me
            </PixelButton>
          </div>

          {/* Inline Introduction Dialog - "Until Then" Style (Black Bubble) */}
          <div className="relative max-w-2xl mx-auto mt-8 min-h-[140px]">
            <div
              className="relative md:static w-full text-left bg-black/80 backdrop-blur-sm rounded-2xl p-6 cursor-pointer hover:bg-black/90 transition-colors shadow-2xl border border-white/5"
              onClick={handleNextDialog}
              role="button"
              aria-label="Next dialog message"
            >
              {/* Speaker */}
              <span className="block font-pixel text-[0.6rem] text-primary mb-2 uppercase tracking-widest opacity-80">
                {introDialogs[dialogIndex].speaker}
              </span>

              {/* Text */}
              <p className="font-retro text-2xl md:text-3xl text-white leading-relaxed min-h-[3rem]">
                {introDialogs[dialogIndex].text}
                <span className="inline-block w-2 h-5 bg-primary ml-2 animate-pulse align-middle" />
              </p>

              <div className="absolute bottom-4 right-6 font-pixel text-[0.5rem] text-gray-500 opacity-50">
                ▼
              </div>
            </div>
          </div>
        </section>

        {/* Quick Nav Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mt-16 px-4">
          {[
            { title: 'About Me', desc: 'My story & journey', href: '/about' },
            { title: 'Skills', desc: 'Tech & abilities', href: '/skills' },
            { title: 'Education', desc: 'Learning path', href: '/education' },
          ].map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className="block bg-black/60 border border-white/10 rounded-xl p-6 text-center no-underline transition-all hover:bg-black/80 hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] group animate-pixel-fade backdrop-blur-sm"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <h3 className="font-pixel text-xs text-accent-alt mb-2">{item.title}</h3>
              <p className="font-retro text-lg text-pixel-text-muted m-0">{item.desc}</p>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
