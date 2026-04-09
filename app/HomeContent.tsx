'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import PageBackground from '@/components/ui/PageBackground';
import Header from '@/components/layout/Header';
import PixelButton from '@/components/ui/PixelButton';
import { introDialogs } from '@/data';

export default function HomeContent() {
  const [dialogIndex, setDialogIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const isTyping = displayedText.length < introDialogs[dialogIndex].text.length;

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const fullText = introDialogs[dialogIndex].text;

    if (displayedText.length < fullText.length) {
      timeoutId = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 30);
    }

    return () => clearTimeout(timeoutId);
  }, [dialogIndex, displayedText]);

  const handleNextDialog = () => {
    if (isTyping) {
      setDisplayedText(introDialogs[dialogIndex].text);
      return;
    }

    if (dialogIndex < introDialogs.length - 1) {
      setDialogIndex((prev) => prev + 1);
      setDisplayedText('');
    } else {
      setDialogIndex(0);
      setDisplayedText('');
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden select-none">
      <PageBackground
        imageSrc="/images/home.webp"
        alt="Home page background"
        overlayOpacity={0.4}
        priority={true}
      />

      <Header />

      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 md:p-12 pt-20 max-w-7xl mx-auto w-full">
        <h1 className="sr-only">
          Gede Yudhi Adinata Putra Kurniawan - Fullstack Web Developer Portfolio
        </h1>

        <div className="w-full flex flex-col items-center">
          <h2 className="lg:hidden font-pixel text-xl sm:text-2xl text-white text-shadow-pixel mb-10 text-center leading-tight animate-pixel-fade anim-delay-300">
            Ready to <span className="text-primary italic animate-pulse">explore</span> <br /> my
            digital world?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center justify-center w-full min-h-[70vh]">
            {/* Left Column: Image & Dialogue */}
            <div className="flex flex-col items-center justify-center animate-pixel-fade anim-delay-500 order-1 relative pt-4 lg:pt-0">
              <div className="relative flex flex-col items-center w-full max-w-sm lg:max-w-lg">
                <figure className="relative w-72 md:w-80 lg:w-[480px] -mb-12 lg:-mb-16 z-10 animate-float pointer-events-none drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-transform duration-500">
                  <Image
                    src="/assets/introduction.png"
                    alt="Pixel art character illustration of Yudhi Adinata"
                    width={800}
                    height={1000}
                    priority
                    className="w-full h-auto object-contain contrast-110"
                  />
                </figure>

                <section
                  className="relative w-full bg-black/85 backdrop-blur-md rounded-2xl p-6 md:p-8 cursor-pointer hover:bg-black/95 transition-all shadow-2xl border border-white/10 z-20"
                  onClick={handleNextDialog}
                  role="button"
                  aria-label="Interactive dialogue box"
                  tabIndex={0}
                >
                  <span className="block font-pixel text-[0.65rem] text-primary mb-3 uppercase tracking-widest opacity-90">
                    {introDialogs[dialogIndex].speaker}
                  </span>
                  <p className="font-retro text-lg md:text-xl text-white leading-relaxed min-h-24">
                    {displayedText}
                    {displayedText !== introDialogs[dialogIndex].text && (
                      <span className="inline-block w-2 h-5 bg-primary ml-1 animate-pulse align-middle" />
                    )}
                  </p>
                  <div
                    className={`absolute bottom-5 right-8 font-pixel text-[0.5rem] text-gray-500 opacity-50 ${displayedText === introDialogs[dialogIndex].text ? 'animate-bounce text-primary opacity-100' : ''}`}
                  >
                    ▼
                  </div>
                </section>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start justify-center h-full animate-pixel-fade anim-delay-700 order-2 py-10 lg:py-0">
              <div className="w-full max-w-sm lg:pt-20">
                <h2 className="hidden lg:block font-pixel text-xl md:text-2xl lg:text-3xl text-white text-shadow-pixel mb-10 lg:mb-14 text-center lg:text-left leading-tight">
                  Ready to <span className="text-primary italic animate-pulse">explore</span>{' '}
                  <br className="hidden lg:block" /> my digital world?
                </h2>

                <div className="flex flex-col gap-6 w-full">
                  <PixelButton
                    variant="primary"
                    size="lg"
                    href="/projects"
                    fullWidth
                    icon={<span className="text-lg">➔</span>}
                  >
                    View my Projects
                  </PixelButton>

                  <PixelButton
                    variant="outline"
                    size="lg"
                    href="/contact"
                    fullWidth
                  >
                    Send Message
                  </PixelButton>

                  <div className="grid grid-cols-2 gap-4 w-full mt-2">
                    <PixelButton
                      variant="accent"
                      size="md"
                      href="https://github.com/yudnata"
                      fullWidth
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      }
                    >
                      GitHub
                    </PixelButton>

                    <PixelButton
                      variant="accent"
                      size="md"
                      href="https://linkedin.com/in/yudnata"
                      fullWidth
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      }
                    >
                      LinkedIn
                    </PixelButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
