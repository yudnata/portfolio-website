import Image from 'next/image';
import PageBackground from '@/components/ui/PageBackground';
import { workExperience } from '@/data/resume';
import background from '@/public/images/education.webp';

export default function ExperienceContent() {
  return (
    <div className="relative min-h-screen">
      <PageBackground imageSrc={background} alt="Pixel art workspace" overlayOpacity={0.7} />
      <main id="main-content" className="mx-auto min-h-screen max-w-6xl px-4 pb-16 pt-25 sm:px-6 lg:px-10">
        <header className="mb-8 animate-slide-up">
          <h1 className="font-pixel text-xl leading-relaxed text-white sm:text-3xl">Experience</h1>
          <p className="mt-3 max-w-2xl font-retro text-xl text-gray-300">
            Building internal business systems, web platforms, and mobile apps.
          </p>
        </header>

        <section id="work" aria-labelledby="work-title" className="scroll-mt-24">
          <h2 id="work-title" className="mb-5 font-pixel text-xs text-gray-300">Work Experience</h2>
          <div className="space-y-5">
            {workExperience.map((experience) => (
              <article key={experience.id} className="rounded-2xl bg-black/65 p-5 sm:p-7">
                <div className="grid gap-5 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8">
                  <div>
                    <a href={experience.website} target="_blank" rel="noopener noreferrer"
                      aria-label={`${experience.company} official website (opens in new tab)`}
                      className={`flex h-20 w-40 items-center rounded-xl p-4 transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transform-none ${experience.id === 'jinom' ? 'bg-white/95' : 'bg-white/5'}`}>
                      <Image src={experience.logo} alt={`${experience.company} logo`} width={144} height={64}
                        className="h-full w-full object-contain" />
                    </a>
                    <p className="mt-4 font-retro text-lg text-white">{experience.period}</p>
                    <p className="font-retro text-lg text-gray-400">{experience.location}, Indonesia</p>
                    {experience.current && <p className="mt-2 font-silkscreen text-[10px] text-emerald-300">Currently working</p>}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-pixel text-xs leading-7 text-white sm:text-sm">{experience.company}</h3>
                    <div className="mt-4 space-y-5">
                      {experience.roles.map((role) => (
                        <section key={role.type} aria-label={`${role.title}, ${role.type}`}>
                          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                            <h4 className="font-retro text-2xl text-white">{role.title}</h4>
                            <span className="font-silkscreen text-[10px] text-gray-400">{role.type}</span>
                          </div>
                          <ul className="mt-2 list-disc space-y-1.5 pl-4 font-retro text-lg leading-relaxed text-gray-300 marker:text-gray-500">
                            {role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                          </ul>
                        </section>
                      ))}
                    </div>
                    <ul aria-label="Technologies used" className="mt-5 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <li key={technology} className="rounded-md bg-white/5 px-3 py-1 font-retro text-base text-gray-300">{technology}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
