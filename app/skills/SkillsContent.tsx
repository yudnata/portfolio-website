'use client';

import { Header } from '@/components/layout';
import { PageBackground } from '@/components/ui';
import { skillCategories } from '@/data';

function SkillBar({ skill, delay }: { skill: { name: string; level: number; icon: string }; delay: number }) {
  return (
    <div className="mb-4 group">
      <div className="flex justify-between mb-1">
        <span className="font-retro text-lg text-pixel-text-secondary flex items-center gap-2">
          <span>{skill.icon}</span> {skill.name}
        </span>
        <span className="font-pixel text-[0.5rem] text-accent-alt opacity-0 group-hover:opacity-100 transition-opacity">
          LV.{skill.level}
        </span>
      </div>
      <div className="bg-black/40 border-2 border-gray-600 h-5 relative">
        <div
          className="h-full bg-linear-to-r from-primary via-accent to-accent-alt animate-[width_1s_ease-out_forwards]"
          style={{ width: `${skill.level}%`, animationDelay: `${delay}s` }}
        />
        {/* Pixel grid overlay */}
        <div className="absolute inset-0 w-full h-full bg-[repeating-linear-gradient(90deg,transparent_0,transparent_10%,rgba(0,0,0,0.2)_10%,rgba(0,0,0,0.2)_10.5%)] pointer-events-none" />
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
              ⚔️ My Skills
            </h1>
            <p className="font-retro text-xl md:text-2xl text-pixel-text-muted mt-2">
              Abilities & Stats Unlocked
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, catIndex) => (
              <section
                key={category.title}
                className="bg-[#16213ef2] border-4 border-primary shadow-pixel p-6 animate-pixel-fade"
                style={{ animationDelay: `${catIndex * 0.15}s` }}
              >
                <h2 className="font-pixel text-xs text-accent mb-5 flex items-center gap-2 uppercase tracking-wide border-b-2 border-primary/30 pb-2">
                  <span className="text-lg">{category.icon}</span>
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
