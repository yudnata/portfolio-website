import Image from 'next/image';
import { Header } from '@/components/layout';
import { PageBackground } from '@/components/ui';

export default function SkillsContent() {
  return (
    <div className="relative min-h-screen">
      <PageBackground
        imageSrc="/images/skills.webp"
        alt="Skills page background"
        overlayOpacity={0.45}
      />

      <Header />

      <main className="pt-[100px] pb-20 px-4 md:px-12 min-h-screen max-w-7xl mx-auto flex flex-col justify-center">
        <div className="text-center mb-10 animate-slide-up anim-delay-500">
          <h1 className="font-pixel text-2xl md:text-3xl text-white text-shadow-pixel mb-2">
            Technical Skills
          </h1>
          <p className="font-retro text-lg text-gray-400">My arsenal of tools & technologies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 animate-pixel-fade anim-delay-700">
          <div className="md:row-span-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-black/70 transition-colors shadow-lg flex flex-col">
            <h2 className="font-pixel text-sm text-white mb-6 flex items-center gap-3 border-l-4 border-blue-400 pl-3">
              Frontend Development
            </h2>
            <div className="flex flex-wrap gap-3">
              <SkillChip
                name="React"
                iconSrc="/icons/React.png"
                color="text-cyan-400"
              />
              <SkillChip
                name="TypeScript"
                iconSrc="/icons/typescript.png"
                color="text-blue-500"
              />
              <SkillChip
                name="JavaScript"
                iconSrc="/icons/JavaScript.png"
                color="text-yellow-400"
              />
              <SkillChip
                name="HTML"
                iconSrc="/icons/HTML5.png"
                color="text-orange-500"
              />
              <SkillChip
                name="CSS"
                iconSrc="/icons/css.png"
                color="text-blue-400"
              />
              <SkillChip
                name="Tailwind"
                iconSrc="/icons/Tailwind CSS.png"
                color="text-cyan-300"
              />
              <SkillChip
                name="WordPress"
                iconSrc="/icons/WordPress.png"
                color="text-gray-200"
              />
              <SkillChip
                name="Next.js"
                iconSrc="/icons/next.svg"
                color="text-blue-500"
              />
            </div>
          </div>

          <div className="md:col-span-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-black/70 transition-colors shadow-lg">
            <h2 className="font-pixel text-sm text-white mb-6 flex items-center gap-3 border-l-4 border-green-500 pl-3">
              Backend Development
            </h2>
            <div className="flex flex-wrap gap-3">
              <SkillChip
                name="Node.js"
                iconSrc="/icons/Node.js.png"
                color="text-green-500"
              />
              <SkillChip
                name="Express"
                iconSrc="/icons/Express.png"
                color="text-gray-400"
              />
              <SkillChip
                name="Python"
                iconSrc="/icons/Python.png"
                color="text-yellow-300"
              />
              <SkillChip
                name="MySQL"
                iconSrc="/icons/MySQL.png"
                color="text-blue-300"
              />
              <SkillChip
                name="PostgreSQL"
                iconSrc="/icons/PostgresSQL.png"
                color="text-blue-400"
              />
              <SkillChip
                name="MongoDB"
                iconSrc="/icons/MongoDB.png"
                color="text-green-400"
              />
              <SkillChip
                name="Postman"
                iconSrc="/icons/postman.png"
                color="text-orange-500"
              />
            </div>
          </div>

          <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-black/70 transition-colors shadow-lg">
            <h2 className="font-pixel text-sm text-white mb-6 flex items-center gap-3 border-l-4 border-purple-500 pl-3">
              Design Tools
            </h2>
            <div className="flex flex-wrap gap-3">
              <SkillChip
                name="Figma"
                iconSrc="/icons/Figma.png"
                color="text-purple-400"
              />
              <SkillChip
                name="Canva"
                iconSrc="/icons/Canva.png"
                color="text-cyan-400"
              />
              <SkillChip
                name="Photoshop"
                iconSrc="/icons/AdobePhotoshop.png"
                color="text-blue-600"
              />
              <SkillChip
                name="Illustrator"
                iconSrc="/icons/AdobeIllustrator.png"
                color="text-orange-500"
              />
              <SkillChip
                name="Premiere"
                iconSrc="/icons/AdobePremierePro.png"
                color="text-purple-600"
              />
            </div>
          </div>

          <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-black/70 transition-colors shadow-lg">
            <h2 className="font-pixel text-sm text-white mb-6 flex items-center gap-3 border-l-4 border-red-500 pl-3">
              DevOps
            </h2>
            <div className="flex flex-wrap gap-3">
              <SkillChip
                name="Docker"
                iconSrc="/icons/docker.png"
                color="text-blue-500"
              />
              <SkillChip
                name="Git"
                iconSrc="/icons/Git.png"
                color="text-red-500"
              />
            </div>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center justify-between hover:bg-black/70 transition-colors">
              <div>
                <h3 className="font-pixel text-sm text-white mb-1">Indonesian</h3>
                <p className="font-retro text-xs text-gray-400">Native Speaker</p>
              </div>
              <span className="font-pixel text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300">
                IN
              </span>
            </div>
            <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center justify-between hover:bg-black/70 transition-colors">
              <div>
                <h3 className="font-pixel text-sm text-white mb-1">English</h3>
                <p className="font-retro text-xs text-gray-400">Professional Working</p>
              </div>
              <span className="font-pixel text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300">
                EN
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function SkillChip({ name, iconSrc }: { name: string; iconSrc?: string; color?: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/5 border border-white/5 px-3 py-2 rounded-xl hover:bg-white/10 hover:border-white/10 transition-all cursor-default group">
      {iconSrc && (
        <div className="relative w-5 h-5 shrink-0">
          <Image
            src={iconSrc}
            alt={name}
            fill
            className="object-contain"
          />
        </div>
      )}
      <span className={`font-retro text-sm text-gray-300 group-hover:text-white transition-colors`}>
        {name}
      </span>
    </div>
  );
}
