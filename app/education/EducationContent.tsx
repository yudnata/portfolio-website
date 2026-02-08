'use client';

import { Header } from '@/components/layout';
import { PageBackground } from '@/components/ui';
import { educationList } from '@/data';
import Image from 'next/image';

export default function EducationContent() {
  return (
    <div className="relative min-h-screen">
      <PageBackground
        imageSrc="/images/education.webp"
        alt="Education page background"
        overlayOpacity={0.45}
      />

      <Header />

      <main className="pt-25 pb-20 px-4 md:px-12 min-h-screen">
        <article className="max-w-4xl mx-auto">
          <header className="text-center mb-10 animate-slide-up anim-delay-800">
            <h1 className="font-pixel text-2xl md:text-3xl text-accent-alt text-shadow-pixel">
              Education
            </h1>
            <p className="font-retro text-xl md:text-2xl text-pixel-text-muted mt-2">
              My Learning Journey
            </p>
          </header>

          <div className="relative pl-0 md:pl-4">
            <div className="absolute left-8.5 top-0 bottom-0 w-0.5 bg-white/10 hidden md:block shadow-[0_0_10px_rgba(255,255,255,0.1)]" />

            {educationList.map((edu, index) => (
              <section
                key={edu.id}
                className="relative md:pl-16 mb-10 last:mb-0 animate-pixel-fade"
                style={{ animationDelay: `${0.8 + index * 0.2}s` }}
              >
                <div className="absolute left-6.5 top-0 w-4 h-4 bg-primary rounded-full hidden md:block shadow-[0_0_15px_rgba(255,255,255,0.6)] border-2 border-primary-light z-10" />

                <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all hover:bg-black/70 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:-translate-x-1 group">
                  <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden group-hover:border-primary/30 transition-colors">
                      {edu.icon ? (
                        <Image
                          src={edu.icon}
                          alt={edu.institution}
                          fill
                          className="object-contain p-2"
                          unoptimized
                          quality={100}
                        />
                      ) : (
                        <span className="text-2xl opacity-50">🎓</span>
                      )}
                    </div>

                    <div className="flex-1">
                      <span className="font-pixel text-[0.6rem] px-3 py-1 bg-white/5 text-primary-light rounded-full border border-white/10 inline-block mb-3 tracking-wider">
                        {edu.period}
                      </span>
                      <h2 className="font-pixel text-xs text-gray-400 uppercase tracking-widest mb-1">
                        {edu.institution}
                      </h2>
                      <h3 className="font-retro text-2xl md:text-3xl text-white group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                    </div>
                  </div>

                  <p className="font-retro text-lg text-gray-300 leading-relaxed mb-6 pl-0 sm:pl-20">
                    {edu.description}
                  </p>

                  {edu.achievements && (
                    <div className="border-t border-white/10 pt-4 mt-4 sm:pl-20">
                      <h4 className="font-pixel text-[0.5rem] text-primary mb-3 uppercase tracking-wide opacity-80">
                        Achievements
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="font-retro text-base text-gray-400 pl-4 border-l-2 border-primary/30 hover:border-primary hover:text-white transition-colors"
                          >
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
