'use client';

import { Header } from '@/components/layout';
import { PageBackground } from '@/components/ui';
import Image from 'next/image';

export default function AboutContent() {
  return (
    <>
      <PageBackground
        imageSrc="/images/about-me.webp"
        alt="About page background"
        overlayOpacity={0.6}
      />
      <Header />

      <main className="pt-[100px] pb-20 px-4 md:px-12 min-h-screen max-w-7xl mx-auto flex flex-col justify-center">
        <h1 className="font-pixel text-2xl md:text-3xl text-white mb-10 animate-[translate-y-from-n20_0.6s_ease-out]">
          A bit about myself
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-pixel-fade delay-100">
          <div className="lg:col-span-1 h-full">
            <figure className="relative w-full h-full min-h-[300px] bg-black/40 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <Image
                src="/assets/me.png"
                alt="Portrait of Yudhi Adinata"
                fill
                className="object-cover object-center transition-all duration-500 scale-100 group-hover:scale-105"
                priority
              />
              <figcaption className="sr-only">Portrait of Gede Yudhi Adinata Putra Kurniawan</figcaption>
            </figure>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-2">
            <section className="bg-black/70 rounded-2xl p-8 shadow-lg" aria-label="Introduction">
              <p className="font-retro text-xl leading-relaxed text-gray-200">
                Hi my name is{' '}
                <strong className="text-white">Gede Yudhi Adinata Putra Kurniawan</strong>. I&apos;m
                an Information Technology student at{' '}
                <strong className="text-white">Udayana University</strong>, Bali with a current GPA
                of 3.77. I&apos;m passionate about building{' '}
                <span className="text-white font-bold">modern, user-centered web applications</span>{' '}
                that solve real problems.
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-4" aria-label="Personal Details">
              <div className="bg-black/70 border border-white/5 rounded-2xl p-6 shadow-md transition-colors">
                <span className="block font-pixel text-[0.6rem] text-gray-500 mb-2 uppercase tracking-wide">
                  Location
                </span>
                <p className="font-retro text-lg text-white">Denpasar, Bali</p>
              </div>

              <div className="bg-black/70 border border-white/5 rounded-2xl p-6 shadow-md transition-colors">
                <span className="block font-pixel text-[0.6rem] text-gray-500 mb-2 uppercase tracking-wide">
                  Education
                </span>
                <p className="font-retro text-lg text-white">Udayana University</p>
              </div>

              <a
                href="/assets/resume.pdf"
                target="_blank"
                className="bg-white text-black rounded-2xl p-6 shadow-md hover:bg-gray-200 transition-colors flex flex-col justify-center cursor-pointer group no-underline"
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

            <section className="bg-black/70 border border-white/5 rounded-2xl p-8 shadow-lg" aria-label="Core Values">
              <span className="block font-pixel text-[0.6rem] text-gray-500 mb-4 uppercase tracking-wide">
                Values
              </span>
              <div className="flex flex-wrap gap-3">
                {[
                  'Clean Design',
                  'User First',
                  'Continuous Learning',
                  'Team Player',
                  'Problem Solver',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="font-retro text-base px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
