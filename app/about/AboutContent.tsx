'use client';

import { Header } from '@/components/layout';
import { PageBackground, PixelButton } from '@/components/ui';

export default function AboutContent() {
  return (
    <div className="relative min-h-screen">
      <PageBackground
        imageSrc="/images/about-me.webp"
        alt="About page background"
        overlayOpacity={0.4}
      />

      <Header />

      <main className="pt-[100px] pb-20 px-4 md:px-12 min-h-screen">
        <article className="max-w-4xl mx-auto">
          <header className="text-center mb-12 animate-[translate-y-from-n20_0.6s_ease-out]">
            <h1 className="font-pixel text-2xl md:text-3xl text-accent-alt text-shadow-pixel flex items-center justify-center gap-4">
              <span aria-hidden="true">👤</span>
              About Me
            </h1>
            <p className="font-retro text-xl md:text-2xl text-pixel-text-muted mt-2">
              The story behind the code...
            </p>
          </header>

          {/* Player Stats */}
          <section className="bg-[#16213ef2] border-4 border-primary shadow-[inset_0_0_0_2px_var(--color-pixel-bg-dark),inset_0_0_0_4px_var(--color-primary-light),8px_8px_0_rgba(0,0,0,0.3)] p-6 md:p-10 mb-8 animate-pixel-fade">
            <h2 className="font-pixel text-sm md:text-base text-accent mb-6 flex items-center gap-3">
              <span aria-hidden="true">🎮</span>
              Player Stats
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Name', value: 'Yudnata' },
                { label: 'Class', value: 'Web Developer' },
                { label: 'Level', value: 'Junior/Mid' },
                { label: 'Location', value: 'Indonesia 🇮🇩' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-black/30 border-2 border-gray-600 p-4"
                >
                  <span className="font-pixel text-[0.5rem] text-pixel-text-muted block mb-2 uppercase">
                    {stat.label}
                  </span>
                  <span className="font-retro text-xl md:text-2xl text-accent-alt block">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Bio */}
          <section className="bg-[#16213ef2] border-4 border-primary shadow-[inset_0_0_0_2px_var(--color-pixel-bg-dark),inset_0_0_0_4px_var(--color-primary-light),8px_8px_0_rgba(0,0,0,0.3)] p-6 md:p-10 mb-8 animate-pixel-fade delay-100">
            <h2 className="font-pixel text-sm md:text-base text-accent mb-6 flex items-center gap-3">
              <span aria-hidden="true">📜</span>
              My Story
            </h2>

            <div className="font-retro text-lg md:text-2xl text-pixel-text-secondary leading-relaxed space-y-6">
              <p>
                Greetings, fellow adventurer! I&apos;m{' '}
                <strong className="text-accent-alt">Yudnata</strong>, a passionate Web Developer who
                embarked on this coding journey to create meaningful digital experiences that make a
                difference.
              </p>
              <p>
                My quest began when I discovered the magical world of programming. Since then,
                I&apos;ve been honing my skills in modern web technologies, crafting pixel-perfect
                interfaces, and solving complex problems with elegant solutions.
              </p>
            </div>
          </section>

          {/* What I Do */}
          <section className="bg-[#16213ef2] border-4 border-primary shadow-[inset_0_0_0_2px_var(--color-pixel-bg-dark),inset_0_0_0_4px_var(--color-primary-light),8px_8px_0_rgba(0,0,0,0.3)] p-6 md:p-10 mb-8 animate-pixel-fade delay-200">
            <h2 className="font-pixel text-sm md:text-base text-accent mb-6 flex items-center gap-3">
              <span aria-hidden="true">⚡</span>
              What I Do
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: '🌐',
                  title: 'Web Development',
                  desc: 'Building responsive, modern websites',
                },
                { icon: '⚛️', title: 'Frontend Dev', desc: 'Interactive UIs with React & Next.js' },
                { icon: '🎨', title: 'UI/UX Design', desc: 'Designing user-friendly interfaces' },
                { icon: '🔧', title: 'Problem Solving', desc: 'Finding creative solutions' },
              ].map((service) => (
                <div
                  key={service.title}
                  className="bg-black/30 border-3 border-gray-600 p-6 text-center transition-transform hover:-translate-y-1"
                >
                  <span className="text-4xl block mb-4">{service.icon}</span>
                  <h3 className="font-pixel text-[0.6rem] text-accent-alt mb-3 uppercase">
                    {service.title}
                  </h3>
                  <p className="font-retro text-lg text-pixel-text-muted m-0">{service.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="text-center mt-12 animate-pixel-fade delay-300">
            <p className="font-retro text-2xl text-pixel-text-secondary mb-6">
              Ready to start an adventure together?
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <PixelButton
                variant="accent"
                href="/contact"
                icon="✉️"
              >
                Contact Me
              </PixelButton>
              <PixelButton
                variant="primary"
                href="/projects"
                icon="💻"
              >
                View Projects
              </PixelButton>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
