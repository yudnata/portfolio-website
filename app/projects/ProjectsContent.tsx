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

  const featuredProject = filteredProjects[0];
  const restProjects = filteredProjects.slice(1);

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

      <main className="pt-[100px] pb-20 px-4 md:px-12 min-h-screen">
        <article className="max-w-7xl mx-auto">
          <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 animate-slide-up anim-delay-500">
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

          {featuredProject && (
            <section
              onClick={() => isDesktop && setSelectedProject(featuredProject)}
              className={`
                mb-8 bg-black/60 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden 
                transition-all duration-300 hover:bg-black/70 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]
                ${isDesktop ? 'cursor-pointer' : 'cursor-default'}
                group animate-pixel-fade anim-delay-600
              `}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="relative w-full lg:w-1/2 h-64 lg:h-auto lg:min-h-[400px] bg-gray-900 overflow-hidden">
                  {featuredProject.image ? (
                    <Image
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                      quality={100}
                      className="object-cover object-center transition-all duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-gray-800 to-black">
                      <span className="font-pixel text-sm text-gray-500">NO IMAGE</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="font-pixel text-[0.5rem] bg-primary text-black px-3 py-1.5 rounded-full font-bold">
                      FEATURED
                    </span>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-pixel text-[0.55rem] text-gray-500 uppercase tracking-widest">
                      {featuredProject.category}
                    </span>
                    <span
                      className={`font-pixel text-[0.5rem] px-2 py-0.5 rounded-full border ${
                        featuredProject.status === 'Completed'
                          ? 'text-green-400 bg-green-500/20 border-green-500/30'
                          : 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30'
                      }`}
                    >
                      {featuredProject.status}
                    </span>
                  </div>

                  <h2 className="font-retro text-3xl lg:text-4xl text-white font-bold mb-2 group-hover:text-primary transition-colors">
                    {featuredProject.title}
                  </h2>
                  <p className="font-pixel text-[0.6rem] text-gray-500 mb-4">
                    {featuredProject.subtitle}
                  </p>
                  <p className="font-retro text-base text-gray-400 leading-relaxed mb-6">
                    {featuredProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-pixel text-[0.5rem] text-gray-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {isDesktop && (
                    <div className="flex items-center gap-2 font-pixel text-[0.55rem] text-gray-500 group-hover:text-white transition-colors">
                      <span>Click to view details</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {restProjects.map((project, index) => (
              <article
                key={`${activeCategory}-${project.id}`}
                onClick={() => isDesktop && setSelectedProject(project)}
                className={`
                  bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden 
                  transition-all duration-300 hover:bg-black/70 hover:border-white/20 
                  hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:-translate-y-1
                  ${isDesktop ? 'cursor-pointer' : 'cursor-default'} 
                  group animate-card-fade opacity-0 flex flex-col
                `}
                style={{
                  animationDelay: isFirstLoad ? `${0.8 + index * 0.08}s` : `${index * 0.05}s`,
                }}
              >
                <figure className="relative w-full h-40 bg-gray-900 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={100}
                      className="object-cover object-center transition-all duration-500 opacity-80 group-hover:opacity-100 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-gray-800 to-black">
                      <span className="font-pixel text-xs text-gray-500">NO IMAGE</span>
                    </div>
                  )}
                  {isDesktop && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                      <span className="font-pixel text-[0.5rem] text-white border border-white/30 bg-black/60 px-3 py-1.5 rounded-full">
                        View Details
                      </span>
                    </div>
                  )}
                </figure>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-pixel text-[0.5rem] text-gray-500 uppercase tracking-widest">
                      {project.category}
                    </span>
                    {project.status === 'Completed' && (
                      <span className="font-pixel text-[0.4rem] text-green-400">✓</span>
                    )}
                  </div>
                  <h3 className="font-retro text-xl text-white font-bold mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-pixel text-[0.5rem] text-gray-500 mb-2">{project.subtitle}</p>
                  <p className="font-retro text-sm text-gray-400 line-clamp-2 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="font-pixel text-[0.45rem] text-gray-400 bg-white/5 border border-white/5 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="font-pixel text-[0.45rem] text-gray-500 px-1">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
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
