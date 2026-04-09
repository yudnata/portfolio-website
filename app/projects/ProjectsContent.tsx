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
        overlayOpacity={0.5}
      />

      <Header />

      <main className="pt-20 pb-12 px-4 md:px-12 min-h-screen">
        <article className="max-w-7xl mx-auto">
          <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6 animate-slide-up anim-delay-500">
            <div>
              <h1 className="font-pixel text-2xl md:text-3xl text-white text-shadow-pixel">
                My Projects
              </h1>
              <p className="font-retro text-lg text-gray-400 mt-2">
                Explore my work across various domains
              </p>
            </div>
            <nav className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`
                    font-pixel text-[0.55rem] px-4 py-2 cursor-pointer transition-all duration-300 rounded-full border backdrop-blur-sm
                    ${
                      activeCategory === category
                        ? 'bg-white text-black border-white font-bold'
                        : 'bg-black/40 text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </nav>
          </header>

          <section className="flex flex-col gap-4">
            {filteredProjects.map((project, index) => (
              <article
                key={`${activeCategory}-${project.id}`}
                onClick={() => isDesktop && setSelectedProject(project)}
                className={`
                  bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden 
                  transition-all duration-300 hover:bg-black/70 hover:border-white/20 
                  hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]
                  ${isDesktop ? 'cursor-pointer' : 'cursor-default'} 
                  group animate-card-fade opacity-0 flex flex-col md:flex-row
                `}
                style={{
                  animationDelay: isFirstLoad ? `${0.7 + index * 0.1}s` : `${index * 0.05}s`,
                }}
              >
                <figure className="relative w-full md:w-64 lg:w-80 h-48 md:h-auto bg-gray-900 overflow-hidden shrink-0">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 256px, 320px"
                      quality={100}
                      className="object-cover object-center transition-all duration-500 opacity-80 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-gray-800 to-black">
                      <span className="font-pixel text-[0.4rem] text-gray-500">NO IMAGE</span>
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="font-pixel text-[0.4rem] bg-black/60 backdrop-blur-md text-white border border-white/20 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </figure>

                <div className="p-4 md:py-5 md:px-8 flex flex-col justify-center flex-1 relative">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`font-pixel text-[0.4rem] px-2 py-0.5 rounded-full border ${
                        project.status === 'Completed'
                          ? 'text-green-400 bg-green-500/20 border-green-500/30'
                          : 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30'
                      }`}
                    >
                      {project.status}
                    </span>
                    {index === 0 && activeCategory === 'All' && (
                      <span className="font-pixel text-[0.4rem] text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full font-bold">
                        FEATURED
                      </span>
                    )}
                  </div>

                  <h3 className="font-retro text-xl md:text-2xl text-white font-bold mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-pixel text-[0.5rem] text-gray-400 mb-2">{project.subtitle}</p>
                  <p className="font-retro text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-pixel text-[0.4rem] text-gray-500 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {isDesktop && (
                    <div className="absolute bottom-5 right-6 font-pixel text-[0.45rem] text-gray-500 opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all flex items-center gap-1 pointer-events-none">
                      <span>Click to view details</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </section>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 font-retro text-2xl text-gray-500">
              No projects found in this category... yet!
            </div>
          )}
        </article>
      </main>
      {selectedProject && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-pixel-bg-dark border border-white/10 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedProject.image && (
              <div className="relative w-full h-64 md:h-80 bg-gray-900">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover object-center"
                />
              </div>
            )}
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-pixel text-[0.55rem] text-gray-500 uppercase tracking-widest">
                  {selectedProject.category}
                </span>
                <span
                  className={`font-pixel text-[0.5rem] px-2 py-0.5 rounded-full border ${
                    selectedProject.status === 'Completed'
                      ? 'text-green-400 bg-green-500/20 border-green-500/30'
                      : 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30'
                  }`}
                >
                  {selectedProject.status}
                </span>
              </div>

              <h2 className="font-retro text-3xl md:text-4xl text-white font-bold mb-2">
                {selectedProject.title}
              </h2>
              <p className="font-pixel text-[0.6rem] text-gray-500 mb-4">
                {selectedProject.subtitle}
              </p>
              <p className="font-retro text-base text-gray-300 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-pixel text-[0.5rem] text-gray-300 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-pixel text-[0.6rem] bg-white text-black px-5 py-2.5 rounded-full hover:bg-gray-200 transition-colors no-underline"
                  >
                    View on GitHub →
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="font-pixel text-[0.6rem] text-gray-400 border border-white/10 px-5 py-2.5 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
