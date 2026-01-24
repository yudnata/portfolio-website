'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Header } from '@/components/layout';
import { PageBackground } from '@/components/ui';
import { projects } from '@/data';
import { Project } from '@/types';

const categories = ['All', 'Personal', 'Web App', 'Enterprise'];

export default function ProjectsContent() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects =
    activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
          <header className="text-center mb-10 animate-slide-up anim-delay-500">
            <h1 className="font-pixel text-2xl md:text-3xl text-accent-alt text-shadow-pixel flex justify-center items-center gap-4">
              My Projects
            </h1>
            <p className="font-retro text-xl md:text-2xl text-pixel-text-muted mt-2">
              Project completed & Project in progress
            </p>
          </header>
          <nav className="flex justify-center flex-wrap gap-2 mb-10 animate-pixel-fade anim-delay-600">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  font-pixel text-[0.6rem] px-5 py-2 cursor-pointer transition-all duration-300 rounded-full border shadow-sm backdrop-blur-sm
                  ${
                    activeCategory === category
                      ? 'bg-primary text-pixel-bg-dark border-primary shadow-[0_0_10px_rgba(255,255,255,0.3)] font-bold scale-105'
                      : 'bg-black/40 text-gray-300 border-white/10 hover:border-white/30 hover:bg-black/60'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </nav>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredProjects.map((project, index) => (
              <article
                key={`${activeCategory}-${project.id}`}
                onClick={() => isDesktop && setSelectedProject(project)}
                className={`bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-black/70 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] ${isDesktop ? 'cursor-pointer' : 'cursor-default'} group animate-card-fade opacity-0 flex flex-col h-full`}
                style={{ animationDelay: isFirstLoad ? `${0.7 + index * 0.08}s` : `${index * 0.05}s` }}
              >
                <figure className="relative w-full h-48 bg-gray-900 border-b border-white/5 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-opacity duration-300 opacity-80 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-gray-800 to-black">
                      <span className="font-pixel text-xs text-gray-500">NO IMAGE</span>
                    </div>
                  )}
                  <div className="absolute inset-0 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <span className="font-pixel text-[0.6rem] text-white border border-white/30 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                      Click for Details
                    </span>
                  </div>
                </figure>

                <div className="p-6 flex flex-col flex-1">
                  <span className="font-pixel text-[0.55rem] text-gray-500 uppercase tracking-widest mb-1">
                    {project.category}
                  </span>
                  <h3 className="font-retro text-xl md:text-2xl text-white font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-pixel text-[0.6rem] text-gray-400 mb-3">{project.subtitle}</p>
                  <p className="font-retro text-sm text-gray-400 mb-6 line-clamp-3 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="font-pixel text-[0.5rem] text-gray-400 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="font-pixel text-[0.5rem] text-gray-500 px-2 py-1.5">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 font-retro text-2xl text-pixel-text-muted">
              No projects found in this category... yet!
            </div>
          )}
        </article>
      </main>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-pixel-bg-dark border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-red-500 text-white rounded-full p-2 transition-colors border border-white/10"
              aria-label="Close modal"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line
                  x1="18"
                  y1="6"
                  x2="6"
                  y2="18"
                ></line>
                <line
                  x1="6"
                  y1="6"
                  x2="18"
                  y2="18"
                ></line>
              </svg>
            </button>

            <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-gray-900 border-b md:border-b-0 md:border-r border-white/10">
              {selectedProject.image ? (
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover object-center"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-gray-800 to-black">
                  <span className="font-pixel text-sm text-gray-500">NO IMAGE</span>
                </div>
              )}
            </div>

            <div className="w-full md:w-3/5 p-8 flex flex-col overflow-y-auto">
              <div className="mb-6">
                <span className="font-pixel text-xs text-primary uppercase tracking-widest mb-1 block">
                  {selectedProject.category}
                </span>
                <h2 className="font-retro text-3xl md:text-4xl text-white font-bold mb-2">
                  {selectedProject.title}
                </h2>
                <p className="font-retro text-lg text-gray-400 italic">
                  {selectedProject.subtitle}
                </p>
              </div>

              <div className="prose prose-invert max-w-none mb-8 font-retro text-gray-300 leading-relaxed">
                <p>{selectedProject.description}</p>
              </div>

              <div className="mt-auto">
                <h3 className="font-pixel text-xs text-gray-500 uppercase tracking-widest mb-3">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-pixel text-[0.6rem] text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-6 border-t border-white/10">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white hover:bg-gray-200 text-black font-pixel text-xs py-3 rounded-xl text-center font-bold transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                      Live Demo
                    </a>
                  )}

                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-transparent hover:bg-white/5 text-white border border-white/20 font-pixel text-xs py-3 rounded-xl text-center font-bold transition-all flex items-center justify-center gap-2"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
