import PageBackground from '@/components/ui/PageBackground';
import { educationList } from '@/data';
import { organizationExperience, publication } from '@/data/resume';
import Image from 'next/image';
import background from '@/public/images/education.webp';

export default function EducationContent() {
  return (
    <div className="relative min-h-screen">
      <PageBackground
        imageSrc={background}
        alt="Education page background"
        overlayOpacity={0.45}
      />

      <main id="main-content" className="mx-auto min-h-screen max-w-6xl px-4 pb-16 pt-25 sm:px-6 lg:px-10">
        <article>
          <header className="mb-8 animate-slide-up">
            <h1 className="font-pixel text-xl leading-relaxed text-white sm:text-3xl">
              Education
            </h1>
            <p className="mt-3 max-w-2xl font-retro text-xl text-gray-300">
              Academic background, publications, and organization experience
            </p>
          </header>

          <section aria-labelledby="academic-background-title">
            <h2 id="academic-background-title" className="mb-5 font-pixel text-xs text-gray-300">Academic Background</h2>
            <div className="space-y-5">
              {educationList.map((edu) => (
                <article
                  key={edu.id}
                  className="rounded-2xl bg-black/65 p-5 sm:p-7"
                >
                  <div className="grid gap-5 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8">
                    <div>
                      <div className="flex h-20 w-40 items-center justify-center overflow-hidden rounded-xl bg-white/5 p-2">
                        {edu.icon ? (
                          <Image
                            src={edu.icon}
                            alt={edu.institution}
                            width={144}
                            height={64}
                            className="h-full w-full object-contain"
                            quality={100}
                          />
                        ) : (
                          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-gray-300">
                            <path d="m2 9 10-5 10 5-10 5L2 9Zm4 2v6c3 3 9 3 12 0v-6M22 9v7" />
                          </svg>
                        )}
                      </div>

                      <p className="mt-4 font-retro text-lg text-white">{edu.period}</p>
                      <p className="font-retro text-lg text-gray-400">{edu.location}</p>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-pixel text-xs leading-7 text-white sm:text-sm">
                        {edu.institution}
                      </h3>
                      <h4 className="mt-4 font-retro text-2xl text-white">
                        {edu.degree}
                      </h4>
                      <p className="mt-2 font-retro text-lg leading-relaxed text-gray-300">
                        {edu.description}
                      </p>

                      {edu.achievements && (
                        <div className="mt-5">
                          <h5 className="mb-2 font-silkscreen text-[10px] text-gray-400">
                            Highlights
                          </h5>
                          <ul className="list-disc space-y-1.5 pl-4 font-retro text-lg leading-relaxed text-gray-300 marker:text-gray-500">
                            {edu.achievements.map((achievement) => (
                              <li key={achievement}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
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
