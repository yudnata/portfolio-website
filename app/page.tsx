'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Header } from '@/components/layout';
import { PageBackground, PixelButton } from '@/components/ui';
import { introDialogs } from '@/data';

export default function HomePage() {
  const [dialogIndex, setDialogIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const isMounted = useRef(false);
  const isSkipped = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    isSkipped.current = false;

    setDisplayedText('');

    const currentText = introDialogs[dialogIndex].text;
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (!isMounted.current || isSkipped.current) {
        clearInterval(typingInterval);
        return;
      }

      if (charIndex < currentText.length) {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);

    return () => {
      isMounted.current = false;
      clearInterval(typingInterval);
    };
  }, [dialogIndex]);

  const handleNextDialog = () => {
    const currentFullText = introDialogs[dialogIndex].text;

    if (displayedText !== currentFullText) {
      isSkipped.current = true;
      setDisplayedText(currentFullText);
      return;
    }

    if (dialogIndex < introDialogs.length - 1) {
      setDialogIndex((prev) => prev + 1);
    } else {
      setDialogIndex(0);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden select-none">
      <PageBackground
        imageSrc="/images/home.webp"
        alt="Home page background"
        overlayOpacity={0.3}
        priority={true}
      />

      <Header />

      <main className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-12 pt-[100px] mb-20 md:mb-0 max-w-7xl mx-auto w-full">
        <h1 className="sr-only">
          Gede Yudhi Adinata Putra Kurniawan - Fullstack Web Developer Portfolio
        </h1>
        <section className="flex flex-col items-center text-center w-full relative h-[600px] lg:h-[700px] justify-end animate-pixel-fade anim-delay-700">
          <figure className="absolute bottom-[200px] left-1/2 -translate-x-1/2 w-[300px] lg:w-[400px] pointer-events-none z-10 animate-float drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] opacity-100 hover:scale-105 transition-transform duration-500">
            <Image
              src="/assets/introduction.png"
              alt="Pixel art character illustration of Yudhi Adinata"
              width={600}
              height={800}
              priority
              className="w-full h-auto object-contain contrast-110"
            />
            <figcaption className="sr-only">
              Pixel art character illustration of Yudhi Adinata
            </figcaption>
          </figure>

          <section
            className="relative w-full max-w-2xl mx-auto bg-black/80 backdrop-blur-sm rounded-2xl p-6 cursor-pointer hover:bg-black/90 transition-colors shadow-2xl border border-white/5 z-20 mt-auto min-h-[160px]"
            onClick={handleNextDialog}
            role="button"
            aria-label="Interactive dialogue box"
            tabIndex={0}
          >
            <span className="block font-pixel text-[0.6rem] text-primary mb-2 uppercase tracking-widest opacity-80 text-left">
              {introDialogs[dialogIndex].speaker}
            </span>
            <p className="font-retro text-xl md:text-2xl text-white leading-relaxed min-h-16 text-left">
              {displayedText}
              {displayedText !== introDialogs[dialogIndex].text && (
                <span className="inline-block w-2 h-5 bg-primary ml-1 animate-pulse align-middle" />
              )}
            </p>
            <div
              className={`absolute bottom-4 right-6 font-pixel text-[0.5rem] text-gray-500 opacity-50 ${displayedText === introDialogs[dialogIndex].text ? 'animate-bounce text-primary opacity-100' : ''}`}
            >
              ▼
            </div>
          </section>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full justify-center items-center z-30 px-6 sm:px-0">
            <PixelButton
              variant="primary"
              size="lg"
              href="/projects"
              className="w-full sm:w-auto"
            >
              View my Projects
            </PixelButton>
            <PixelButton
              variant="outline"
              size="lg"
              href="/contact"
              className="w-full sm:w-auto"
            >
              Send Message
            </PixelButton>
          </div>
        </section>
      </main>
    </div>
  );
}
