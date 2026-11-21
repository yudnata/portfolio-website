import Image from 'next/image';
import PageBackground from '@/components/ui/PageBackground';
import PixelButton from '@/components/ui/PixelButton';
import IntroDialogue from '@/components/ui/IntroDialogue';
import introduction from '@/public/assets/introduction.png';
import background from '@/public/images/home.webp';

export default function HomeContent() {
  return (
    <div className="relative min-h-screen overflow-hidden select-none">
      <PageBackground
        imageSrc={background}
        alt="Home page background"
        overlayOpacity={0.4}
        priority={true}
      />

      <main id="main-content" className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 md:p-12 pt-20 max-w-7xl mx-auto w-full">
        <h1 className="sr-only">
          Gede Yudhi Adinata Putra Kurniawan - Full-Stack and Mobile Developer Portfolio
        </h1>

        <div className="w-full flex flex-col items-center">
          <h2 className="lg:hidden font-pixel text-xl sm:text-2xl text-white text-shadow-pixel mb-10 text-center leading-tight animate-pixel-fade anim-delay-300">
            Ready to <span className="text-primary italic animate-pulse">explore</span> <br /> my
            digital world?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center justify-center w-full min-h-[70vh]">
            {/* Left Column: Image & Dialogue */}
            <div className="flex flex-col items-center justify-center order-1 relative pt-4 lg:pt-0">
              <div className="relative flex flex-col items-center w-full max-w-sm lg:max-w-lg">
                <figure className="relative w-72 md:w-80 lg:w-[480px] -mb-12 lg:-mb-16 z-10 animate-float pointer-events-none drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-transform duration-500">
                  <Image
                    src={introduction}
                    alt="Pixel art character illustration of Yudhi Adinata"
                    sizes="(min-width: 1024px) 480px, (min-width: 768px) 320px, 288px"
                    preload
                    className="w-full h-auto object-contain contrast-110"
                  />
                </figure>

                <IntroDialogue />
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

                  <div className="grid grid-cols-2 gap-4 w-full mt-2">
                    <PixelButton
                      variant="outline"
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
                      variant="outline"
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
