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
              About Me
            </h1>
            <p className="font-retro text-xl md:text-2xl text-pixel-text-muted mt-2">
              The story behind the code...
            </p>
          </header>

          {/* Player Stats */}
          <section className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-10 mb-8 animate-pixel-fade shadow-lg hover:bg-black/70 transition-colors">
            <h2 className="font-pixel text-sm md:text-base text-primary mb-6 flex items-center gap-3 drop-shadow-sm">
              Player Stats
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Name', value: 'Yudnata' },
                { label: 'Class', value: 'Web Developer' },
                { label: 'Level', value: 'Junior/Mid' },
                { label: 'Location', value: 'Indonesia' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 border border-white/10 p-4 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <span className="font-pixel text-[0.5rem] text-gray-400 block mb-2 uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <span className="font-retro text-xl md:text-2xl text-accent-light block">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Bio */}
          <section className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-10 mb-8 animate-pixel-fade delay-100 shadow-lg relative overflow-hidden">
            {/* Decorative soft glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />

            <h2 className="font-pixel text-sm md:text-base text-primary mb-6 flex items-center gap-3 drop-shadow-sm">
              My Story
            </h2>

            <div className="font-retro text-lg md:text-2xl text-gray-200 leading-relaxed space-y-6">
              <p>
                Greetings, fellow adventurer! I&apos;m{' '}
                <strong className="text-accent-light">Yudnata</strong>, a passionate Web Developer
                who embarked on this coding journey to create meaningful digital experiences that
                make a difference.
              </p>
              <p>
                My quest began when I discovered the magical world of programming. Since then,
                I&apos;ve been honing my skills in modern web technologies, crafting pixel-perfect
                interfaces, and solving complex problems with elegant solutions.
              </p>
            </div>
          </section>

          {/* What I Do */}
          <section className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-10 mb-8 animate-pixel-fade delay-200 shadow-lg">
            <h2 className="font-pixel text-sm md:text-base text-primary mb-6 flex items-center gap-3 drop-shadow-sm">
              What I Do
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Web Development',
                  desc: 'Building responsive, modern websites',
                },
                { title: 'Frontend Dev', desc: 'Interactive UIs with React & Next.js' },
                { title: 'UI/UX Design', desc: 'Designing user-friendly interfaces' },
                { title: 'Problem Solving', desc: 'Finding creative solutions' },
              ].map((service) => (
                <div
                  key={service.title}
                  className="bg-white/5 border border-white/10 rounded-lg p-6 text-center transition-all hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(244,208,63,0.1)] group"
                >
                  <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300"></span>
                  <h3 className="font-pixel text-[0.6rem] text-accent-light mb-3 uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className="font-retro text-lg text-gray-300 m-0">{service.desc}</p>
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
                variant="outline"
                href="/contact"
              >
                Contact Me
              </PixelButton>
              <PixelButton
                variant="primary"
                href="/projects"
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
