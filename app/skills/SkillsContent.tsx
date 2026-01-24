'use client';

import { Header } from '@/components/layout';
import { PageBackground } from '@/components/ui';
import { skillCategories } from '@/data';

function SkillBar({ skill, delay }: { skill: { name: string; level: number; icon: string }; delay: number }) {
  return (
    <div className="mb-5 group">
      <div className="flex justify-between mb-2">
        <span className="font-retro text-lg text-gray-200 flex items-center gap-2 group-hover:text-primary transition-colors">
          {skill.name}
        </span>
        <span className="font-pixel text-[0.5rem] text-primary/80 opacity-60 group-hover:opacity-100 transition-opacity">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
        <div
          className="h-full bg-primary shadow-[0_0_10px_rgba(255,255,255,0.5)] relative animate-[width_1s_ease-out_forwards]"
          style={{ width: `${skill.level}%`, animationDelay: `${delay}s` }}
        >
           <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]" />
        </div>
      </div>
    </div>
  );
}

export default function SkillsContent() {
  return (
    <div className="relative min-h-screen">
      <PageBackground
        imageSrc="/images/skills.webp"
        alt="Skills page background"
        overlayOpacity={0.45}
      />

      <Header />

      <main className="pt-[100px] pb-20 px-4 md:px-12 min-h-screen">
        <article className="max-w-5xl mx-auto">
          <header className="text-center mb-10 animate-[translate-y-from-n20_0.6s_ease-out]">
            <h1 className="font-pixel text-2xl md:text-3xl text-accent-alt text-shadow-pixel">
              My Skills
            </h1>
            <p className="font-retro text-xl md:text-2xl text-pixel-text-muted mt-2">
              Abilities & Stats Unlocked
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, catIndex) => (
              <section
                key={category.title}
                className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 animate-pixel-fade hover:bg-black/70 transition-colors shadow-lg"
                style={{ animationDelay: `${catIndex * 0.15}s` }}
              >
                <h2 className="font-pixel text-xs text-primary mb-6 flex items-center gap-3 uppercase tracking-widest border-b border-white/10 pb-4">
                  {category.title}
                </h2>

                <div>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      delay={0.3 + catIndex * 0.15 + skillIndex * 0.1}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
