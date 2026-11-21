'use client';

import { Header } from '@/components/layout';
import { PageBackground } from '@/components/ui';
import { educationList } from '@/data';
import { organizationExperience, publication } from '@/data/resume';
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

      <main id="main-content" className="pt-25 pb-20 px-4 md:px-12 min-h-screen">
        <article className="max-w-4xl mx-auto">
          <header className="text-center mb-10 animate-slide-up anim-delay-800">
            <h1 className="font-pixel text-2xl md:text-3xl text-accent-alt text-shadow-pixel">
              Education
            </h1>
            <p className="font-retro text-xl md:text-2xl text-pixel-text-muted mt-2">
              Academic background, publications, and organization experience
            </p>
          </header>

          <div className="relative pl-0 md:pl-4">
            <div className="absolute left-8.5 top-0 bottom-0 w-0.5 bg-white/10 hidden md:block shadow-[0_0_10px_rgba(255,255,255,0.1)]" />

            {educationList.map((edu, index) => (
              <section
                key={edu.id}
                className="relative md:pl-16 mb-10 last:mb-0 animate-pixel-fade"
                style={{ animationDelay: `${index * 60}ms` }}
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
                          className={`object-contain ${edu.id === 'coding-camp-2026' ? '' : 'p-2'}`}
                          unoptimized
                          quality={100}
                        />
                      ) : (
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-gray-300">
                          <path d="m2 9 10-5 10 5-10 5L2 9Zm4 2v6c3 3 9 3 12 0v-6M22 9v7" />
                        </svg>
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
                      <p className="font-retro text-base text-gray-400">{edu.location}</p>
                    </div>
                  </div>

                  <p className="font-retro text-lg text-gray-300 leading-relaxed mb-6 pl-0 sm:pl-20">
                    {edu.description}
                  </p>

                  {edu.achievements && (
                    <div className="border-t border-white/10 pt-4 mt-4 sm:pl-20">
                      <h4 className="font-pixel text-[0.5rem] text-primary mb-3 uppercase tracking-wide opacity-80">
                        Highlights
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
        <section id="publication" aria-labelledby="publication-title" className="mt-12 scroll-mt-24">
          <h2 id="publication-title" className="mb-5 font-pixel text-xs text-gray-300">Publication</h2>
          <article className="rounded-2xl bg-black/65 p-5 sm:p-7">
            <p className="mb-3 font-silkscreen text-xs text-emerald-300">{publication.role} · {publication.period}</p>
            <h3 className="max-w-4xl font-retro text-2xl leading-snug text-white sm:text-3xl">{publication.title}</h3>
            <p className="mt-3 font-retro text-lg text-gray-400">{publication.venue}</p>
            <ul className="mt-4 list-disc space-y-2 pl-4 font-retro text-lg leading-relaxed text-gray-300 marker:text-gray-500">
              {publication.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
            <a href={publication.url} target="_blank" rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center font-silkscreen text-xs text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">
              Read on IEEE Xplore ↗
            </a>
            <p className="break-all font-retro text-base text-gray-500">DOI: {publication.doi}</p>
          </article>
        </section>

        <section id="organizations" aria-labelledby="organizations-title" className="mt-12 scroll-mt-24">
          <h2 id="organizations-title" className="mb-5 font-pixel text-xs leading-6 text-gray-300">Organization Experience</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {organizationExperience.map((experience) => (
              <article key={experience.organization} className="rounded-2xl bg-black/65 p-5 sm:p-6">
                <p className="font-retro text-base text-gray-400">{experience.period}</p>
                <h3 className="mt-2 font-pixel text-xs leading-6 text-white">{experience.organization}</h3>
                <p className="mt-2 font-retro text-xl text-gray-300">{experience.role}</p>
              </article>
            ))}
          </div>
        </section>
        </article>
      </main>
    </div>
  );
}
