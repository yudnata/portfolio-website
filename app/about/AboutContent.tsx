import PageBackground from '@/components/ui/PageBackground';
import Image from 'next/image';
import { TransitionLink } from '@/components/layout/TransitionLoader';
import { profile } from '@/data/resume';
import portrait from '@/public/assets/me.png';
import background from '@/public/images/about-me.webp';

export default function AboutContent() {
  return (
    <>
      <PageBackground
        imageSrc={background}
        alt="About page background"
        overlayOpacity={0.6}
      />

      <main id="main-content" className="pt-25 pb-20 px-4 md:px-12 min-h-screen max-w-7xl mx-auto flex flex-col justify-center">
        <h1 className="font-pixel text-2xl md:text-3xl text-white mb-10 animate-slide-up anim-delay-500">
          A bit about myself
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-pixel-fade anim-delay-600">
          <div className="lg:col-span-1 h-full">
            <figure className="relative w-full h-full min-h-75 bg-black/40 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <Image
                src={portrait}
                alt="Portrait of Yudhi Adinata"
                fill
                sizes="(min-width: 1280px) 373px, (min-width: 1024px) 30vw, (min-width: 768px) calc(100vw - 96px), calc(100vw - 32px)"
                className="object-cover object-center transition-all duration-500 scale-100 group-hover:scale-105"
                preload
              />
              <figcaption className="sr-only">
                Portrait of Gede Yudhi Adinata Putra Kurniawan
              </figcaption>
            </figure>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-2">
            <section
              className="bg-black/60 rounded-2xl p-8 shadow-lg"
              aria-label="Introduction"
            >
              <p className="font-retro text-xl leading-relaxed text-gray-200">
                I&apos;m{' '}
                <strong className="text-white">Gede Yudhi Adinata Putra Kurniawan</strong>, a
                Full-Stack and Mobile Developer based in Bali. I study Information
                Technology at <strong className="text-white">Udayana University</strong> with a GPA
                of 3.82/4.00.
              </p>
              <p className="mt-4 font-retro text-xl leading-relaxed text-gray-200">
                I build web and Flutter apps and handle backend APIs and deployments.
                I work part-time at <strong className="text-white">Viskal</strong> and
                freelance with <strong className="text-white">PLEY</strong>.
              </p>
              <TransitionLink href="/experience" className="mt-4 inline-flex min-h-11 items-center font-silkscreen text-xs text-white underline underline-offset-4">
                View work experience ↗
              </TransitionLink>
              <a href={profile.website} target="_blank" rel="noopener noreferrer" className="ml-5 inline-flex min-h-11 items-center font-retro text-lg text-gray-300 hover:text-white">
                yudnata.tech ↗
              </a>
            </section>

            <section
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              aria-label="Personal Details"
            >
              <div className="bg-black/60 border border-white/5 rounded-2xl p-6 shadow-md transition-colors">
                <span className="block font-pixel text-[0.6rem] text-gray-500 mb-2 uppercase tracking-wide">
                  Location
                </span>
                <p className="font-retro text-lg text-white">Denpasar, Bali</p>
              </div>

              <div className="bg-black/60 border border-white/5 rounded-2xl p-6 shadow-md transition-colors">
                <span className="block font-pixel text-[0.6rem] text-gray-500 mb-2 uppercase tracking-wide">
                  Education
                </span>
                <p className="font-retro text-lg text-white">Udayana University</p>
              </div>

              <a
                href="/assets/resume.pdf"
                target="_blank"
                className="bg-white/80 text-black rounded-2xl p-6 shadow-md hover:bg-gray-200 transition-colors flex flex-col justify-center cursor-pointer group no-underline"
              >
                <span className="block font-pixel text-[0.6rem] text-gray-600 mb-1 uppercase tracking-wide group-hover:text-black">
                  Resume
                </span>
                <p className="font-retro text-lg font-bold flex items-center gap-2">
                  Download CV
                  <span className="text-sm">↓</span>
                </p>
              </a>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}
