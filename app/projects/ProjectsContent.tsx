'use client';

import { useState } from 'react';
import { Header } from '@/components/layout';
import { PageBackground, PixelButton } from '@/components/ui';
import { projects } from '@/data';

const categories = ['All', 'Personal', 'Web App', 'Enterprise'];

export default function ProjectsContent() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const getStatusColorClass = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-400 border-green-400';
      case 'In Progress': return 'text-yellow-400 border-yellow-400';
      default: return 'text-gray-400 border-gray-400';
    }
  };

  return (
    <div className="relative min-h-screen">
      <PageBackground
        imageSrc="/images/projects.webp"
        alt="Projects page background"
        overlayOpacity={0.45}
      />

      <Header />

      <main className="pt-[100px] pb-20 px-4 md:px-12 min-h-screen">
        <article className="max-w-6xl mx-auto">
          <header className="text-center mb-10 animate-[translate-y-from-n20_0.6s_ease-out]">
            <h1 className="font-pixel text-2xl md:text-3xl text-accent-alt text-shadow-pixel flex justify-center items-center gap-4">
              <span aria-hidden="true">💻</span>
              My Projects
            </h1>
            <p className="font-retro text-xl md:text-2xl text-pixel-text-muted mt-2">
              Quests completed & adventures in progress
            </p>
          </header>

          {/* Filter */}
          <nav className="flex justify-center flex-wrap gap-2 mb-10 animate-pixel-fade delay-100">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  font-pixel text-[0.5rem] px-4 py-2 cursor-pointer transition-all duration-200 border-2 shadow-sm
                  ${activeCategory === category
                    ? 'bg-linear-to-b from-accent to-accent-dark text-white border-accent shadow-pixel'
                    : 'bg-[#16213ecc] text-white border-gray-600 hover:border-primary'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </nav>

          {/* Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className="bg-[#16213ef2] border-4 border-primary shadow-pixel-lg p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-accent animate-pixel-fade"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <header className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{project.icon}</span>
                    <h2 className="font-pixel text-xs text-accent-alt leading-snug max-w-[150px]">
                      {project.title}
                    </h2>
                  </div>
                  <span className={`font-pixel text-[0.4rem] px-2 py-1 bg-black/30 border whitespace-nowrap ${getStatusColorClass(project.status)}`}>
                    {project.status}
                  </span>
                </header>

                <p className="font-retro text-lg text-pixel-text-secondary leading-relaxed mb-4 h-20 overflow-hidden text-ellipsis">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6 min-h-12">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-retro text-sm px-2 py-0.5 bg-primary-dark text-pixel-text-secondary border border-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  {project.liveUrl && (
                    <PixelButton variant="accent" size="sm" href={project.liveUrl} icon="🌐">Demo</PixelButton>
                  )}
                  {project.githubUrl && (
                    <PixelButton variant="primary" size="sm" href={project.githubUrl} icon="📂">Code</PixelButton>
                  )}
                </div>
              </article>
            ))}
          </section>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 font-retro text-2xl text-pixel-text-muted">
              No projects found in this category... yet! 🎮
            </div>
          )}
        </article>
      </main>
    </div>
  );
}
