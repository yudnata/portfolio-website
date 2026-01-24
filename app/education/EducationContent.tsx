'use client';

import { Header } from '@/components/layout';
import { PageBackground } from '@/components/ui';
import { educationList } from '@/data';

export default function EducationContent() {
  return (
    <div className="relative min-h-screen">
      <PageBackground
        imageSrc="/images/education.webp"
        alt="Education page background"
        overlayOpacity={0.45}
      />

      <Header />

      <main className="pt-[100px] pb-20 px-4 md:px-12 min-h-screen">
        <article className="max-w-4xl mx-auto">
          <header className="text-center mb-10 animate-[translate-y-from-n20_0.6s_ease-out]">
            <h1 className="font-pixel text-2xl md:text-3xl text-accent-alt text-shadow-pixel">
              📚 Education
            </h1>
            <p className="font-retro text-xl md:text-2xl text-pixel-text-muted mt-2">
              My Learning Journey
            </p>
          </header>

          <div className="relative pl-0 md:pl-4">
            {/* Timeline Line */}
            <div className="absolute left-[34px] top-0 bottom-0 w-1 bg-primary hidden md:block" />

            {educationList.map((edu, index) => (
              <section
                key={edu.id}
                className="relative md:pl-16 mb-8 animate-pixel-fade"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 top-0 w-7 h-7 bg-accent border-4 border-pixel-bg-dark rounded-none hidden md:flex items-center justify-center z-10">
                  <span className="text-[0.6rem] text-pixel-bg-dark">★</span>
                </div>

                <div className="bg-[#16213ef2] border-4 border-primary shadow-pixel p-6 transition-transform hover:-translate-x-1">
                  <span className="font-pixel text-[0.5rem] px-2 py-1 bg-primary-dark text-accent-alt inline-block mb-3">
                    {edu.period}
                  </span>

                  <h2 className="font-pixel text-xs text-accent-alt mb-2 uppercase">
                    {edu.institution}
                  </h2>
                  <h3 className="font-retro text-2xl text-accent mb-3">
                    {edu.degree}
                  </h3>
                  <p className="font-retro text-lg text-pixel-text-secondary leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  {edu.achievements && (
                    <div className="border-t border-primary/30 pt-4">
                      <h4 className="font-pixel text-[0.5rem] text-green-400 mb-2 uppercase">
                        🏆 Achievements
                      </h4>
                      <ul className="list-none p-0">
                        {edu.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="font-retro text-base text-pixel-text-muted mb-1 pl-4 border-l-2 border-green-500/50"
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
