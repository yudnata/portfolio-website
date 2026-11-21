import Image from 'next/image';
import PageBackground from '@/components/ui/PageBackground';
import background from '@/public/images/skills.webp';

import { skillGroups, type ResumeSkill } from '@/data/resume';

export default function SkillsContent() {
  return (
    <div className="relative min-h-screen">
      <PageBackground
        imageSrc={background}
        alt="Skills page background"
        overlayOpacity={0.45}
      />

      <main id="main-content" className="pt-25 pb-20 px-4 md:px-12 min-h-screen max-w-7xl mx-auto flex flex-col justify-center">
        <header className="text-center mb-10 animate-slide-up anim-delay-500">
          <h1 className="font-pixel text-2xl md:text-3xl text-white text-shadow-pixel mb-2">
            Technical Skills
          </h1>
          <p className="font-retro text-lg text-gray-400">
            Skills and tools highlighted in my latest resume
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 animate-pixel-fade anim-delay-700">
          {skillGroups.map((group) => (
            <section
              key={group.title}
              className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg hover:bg-black/70 transition-colors"
            >
              <h2
                className={`font-pixel text-sm text-white mb-6 flex items-center gap-3 border-l-4 ${group.accent} pl-3`}
              >
                {group.title}
              </h2>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <SkillChip key={skill.name} {...skill} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-4 animate-pixel-fade anim-delay-700" aria-labelledby="languages-title">
          <h2
            id="languages-title"
            className="font-pixel text-sm text-white mb-4 flex items-center gap-3 border-l-4 border-yellow-400 pl-3"
          >
            Spoken Languages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LanguageCard language="Indonesian" proficiency="Native" code="ID" />
            <LanguageCard
              language="English"
              proficiency="Professional Working Proficiency"
              code="EN"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

function SkillChip({ name, iconSrc }: ResumeSkill) {
  return (
    <div className="flex items-center gap-2 bg-white/5 border border-white/5 px-3 py-2 rounded-xl hover:bg-white/10 hover:border-white/10 transition-all cursor-default group">
      {iconSrc && (
        <div className="relative w-5 h-5 shrink-0">
          <Image src={iconSrc} alt="" fill sizes="20px" className="object-contain" />
        </div>
      )}
      <span className="font-retro text-sm text-gray-300 group-hover:text-white transition-colors">
        {name}
      </span>
    </div>
  );
}

function LanguageCard({
  language,
  proficiency,
  code,
}: {
  language: string;
  proficiency: string;
  code: string;
}) {
  return (
    <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center justify-between hover:bg-black/70 transition-colors">
      <div>
        <h3 className="font-pixel text-sm text-white mb-1">{language}</h3>
        <p className="font-retro text-sm text-gray-400">{proficiency}</p>
      </div>
      <span className="font-pixel text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300">
        {code}
      </span>
    </div>
  );
}
