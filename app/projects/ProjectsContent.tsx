'use client';

import { useState } from 'react';
import { Header } from '@/components/layout';
import { PageBackground } from '@/components/ui';
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
      case 'Completed': return 'text-white border-white';
      case 'In Progress': return 'text-gray-300 border-gray-300';
      default: return 'text-gray-500 border-gray-500';
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
                  font-pixel text-[0.6rem] px-5 py-2 cursor-pointer transition-all duration-300 rounded-full border shadow-sm backdrop-blur-sm
                  ${activeCategory === category
                    ? 'bg-primary text-pixel-bg-dark border-primary shadow-[0_0_10px_rgba(255,255,255,0.3)] font-bold scale-105'
                    : 'bg-black/40 text-gray-300 border-white/10 hover:border-white/30 hover:bg-black/60'
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
                className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-black/70 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:border-primary/40 group animate-pixel-fade flex flex-col h-full"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <header className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <h2 className="font-pixel text-xs md:text-sm text-primary group-hover:text-white transition-colors leading-snug max-w-[150px] tracking-wide">
                      {project.title}
                    </h2>
                  </div>
                  {project.status && (
                     <span className={`font-pixel text-[0.4rem] px-2 py-1 rounded-full border bg-black/40 ${getStatusColorClass(project.status)}`}>
                        {project.status}
                     </span>
                  )}
                </header>

                <p className="font-retro text-lg text-gray-300 leading-relaxed mb-6 h-20 overflow-hidden text-ellipsis opacity-90">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 min-h-12 content-start">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-pixel text-[0.5rem] px-2 py-1 bg-white/5 text-gray-400 border border-white/10 rounded-md group-hover:border-primary/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto pt-4 border-t border-white/10">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                       <div className="bg-primary/90 hover:bg-primary text-pixel-bg-dark font-pixel text-[0.6rem] py-2.5 rounded-lg text-center font-bold shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-all">
                          Demo
                       </div>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                       <div className="bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 font-pixel text-[0.6rem] py-2.5 rounded-lg text-center transition-all">
                          Code
                       </div>
                    </a>
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
