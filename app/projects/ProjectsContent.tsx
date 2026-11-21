'use client';

import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import { projects } from '@/data';
import type { Project } from '@/types';
import styles from './projects.module.css';

const categories = ['All', 'Personal', 'Web App', 'Enterprise'] as const;

const technologyIcons: Record<string, { src: string; monochrome?: boolean; wide?: boolean }> = {
  React: { src: '/icons/React.png' },
  'Next.js': { src: '/icons/next.svg' },
  'Node.js': { src: '/icons/Node.js.png' },
  PostgreSQL: { src: '/icons/PostgresSQL.png' },
  Docker: { src: '/icons/docker.png' },
  'Tailwind CSS': { src: '/icons/Tailwind CSS.png' },
  Midtrans: { src: '/icons/technology/midtrans.svg', wide: true },
  GSAP: { src: '/icons/technology/gsap.svg', monochrome: true },
  Prisma: { src: '/icons/technology/prisma.svg', monochrome: true },
  Kotlin: { src: '/icons/technology/kotlin.svg', monochrome: true },
  Android: { src: '/icons/technology/android.svg', monochrome: true },
  Firebase: { src: '/icons/technology/firebase.svg', monochrome: true },
  Cloudinary: { src: '/icons/technology/cloudinary.svg', monochrome: true },
  Laravel: { src: '/icons/Laravel.png' },
  PHP: { src: '/icons/technology/php.svg', monochrome: true },
  MySQL: { src: '/icons/MySQL.png' },
  JavaScript: { src: '/icons/JavaScript.png' },
  HTML: { src: '/icons/HTML5.png' },
  CSS: { src: '/icons/css.png' },
  TypeScript: { src: '/icons/typescript.png' },
  'Socket.IO': { src: '/icons/technology/socketdotio.svg', monochrome: true },
  'Three.js': { src: '/icons/technology/threedotjs.svg', monochrome: true },
  WebGL: { src: '/icons/technology/webgl.svg', monochrome: true, wide: true },
  Python: { src: '/icons/Python.png' },
  NumPy: { src: '/icons/technology/numpy.svg', monochrome: true },
};

function ProjectArtwork({ project, backdrop = false, priority = false }: {
  project: Project;
  backdrop?: boolean;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  if (!project.image || failed) {
    return <span className={styles.artworkFallback}><span>{project.title}</span>{backdrop && <small>Project preview unavailable</small>}</span>;
  }
  return (
    <Image src={project.image} alt="" fill
      sizes={backdrop ? '100vw' : '(max-width: 760px) 120px, 132px'}
      priority={priority} quality={75} className={`${styles.artwork} ${backdrop ? 'page-background-image' : ''}`}
      onLoad={(event) => { event.currentTarget.dataset.loaded = 'true'; }}
      onError={() => setFailed(true)} />
  );
}

export default function ProjectsContent() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All');
  const [activeId, setActiveId] = useState(projects[0]?.id ?? '');
  const [detailsOpen, setDetailsOpen] = useState(false);
  const railRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef(new Map<string, HTMLButtonElement>());
  const dialogRef = useRef<HTMLDialogElement>(null);
  const detailsButtonRef = useRef<HTMLButtonElement>(null);
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory);
  const activeProject = filteredProjects.find((project) => project.id === activeId) ?? filteredProjects[0];
  const activeIndex = activeProject ? filteredProjects.findIndex((project) => project.id === activeProject.id) : -1;

  useEffect(() => {
    if (!activeProject) return;
    const tile = tileRefs.current.get(activeProject.id);
    const rail = railRef.current;
    if (!tile || !rail) return;
    const left = tile.offsetLeft - rail.offsetLeft;
    const right = left + tile.offsetWidth;
    const visibleLeft = rail.scrollLeft;
    const visibleRight = visibleLeft + rail.clientWidth;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (left < visibleLeft + 8 || right > visibleRight - 8) {
      rail.scrollTo({
        left: left < visibleLeft + 8 ? left - 12 : right - rail.clientWidth + 12,
        behavior: reducedMotion ? 'instant' : 'smooth',
      });
    }
  }, [activeProject]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (detailsOpen) {
      dialog.showModal();
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = previousOverflow; };
    }
    if (dialog.open) dialog.close();
  }, [detailsOpen]);

  function changeCategory(category: (typeof categories)[number]) {
    setActiveCategory(category);
    setActiveId(projects.find((project) => category === 'All' || project.category === category)?.id ?? '');
  }

  function handleTileKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number;
    switch (event.key) {
      case 'ArrowRight': nextIndex = (index + 1) % filteredProjects.length; break;
      case 'ArrowLeft': nextIndex = (index - 1 + filteredProjects.length) % filteredProjects.length; break;
      case 'Home': nextIndex = 0; break;
      case 'End': nextIndex = filteredProjects.length - 1; break;
      default: return;
    }
    event.preventDefault();
    tileRefs.current.get(filteredProjects[nextIndex].id)?.focus();
  }

  function closeDetails() {
    dialogRef.current?.close();
    setDetailsOpen(false);
    detailsButtonRef.current?.focus();
  }

  return (
    <div className={styles.page}>
      <div className={styles.backdrops} aria-hidden="true">
        {projects.map((project, index) => (
          <div key={project.id} data-page-background={activeProject?.id === project.id ? 'active' : 'inactive'} className={`${styles.backdrop} ${activeProject?.id === project.id ? styles.backdropActive : ''}`}>
            <ProjectArtwork project={project} backdrop priority={index === 0} />
          </div>
        ))}
      </div>
      <Header />
      <main id="main-content" className={styles.main}>
        <div className={styles.libraryBar}>
          <h1 className={styles.libraryTitle}>Project library</h1>
          <div className={styles.categories} role="group" aria-label="Filter projects by category">
            {categories.map((category) => (
              <button key={category} type="button" aria-pressed={activeCategory === category} onClick={() => changeCategory(category)}>
                {category === 'All' ? 'All projects' : category}
              </button>
            ))}
          </div>
        </div>
        <section className={styles.library} aria-label="Choose a project">
          <div className={styles.rail} ref={railRef} role="tablist" aria-label="Projects" aria-orientation="horizontal">
            {filteredProjects.map((project, index) => {
              const selected = project.id === activeProject?.id;
              return (
                <button key={project.id} ref={(node) => {
                  if (node) tileRefs.current.set(project.id, node);
                  else tileRefs.current.delete(project.id);
                }} type="button" id={`project-tab-${project.id}`} role="tab" aria-selected={selected}
                  aria-controls="project-panel" tabIndex={selected ? 0 : -1}
                  aria-label={project.title}
                  className={`${styles.tile} ${selected ? styles.tileActive : ''}`}
                  onPointerEnter={(event) => { if (event.pointerType === 'mouse') setActiveId(project.id); }} onFocus={() => setActiveId(project.id)}
                  onClick={() => setActiveId(project.id)} onKeyDown={(event) => handleTileKeyDown(event, index)}>
                  <span className={styles.tileArtwork}>
                    <ProjectArtwork project={project} />
                    <span className={styles.tileWordmark} aria-hidden="true">{project.title}</span>
                  </span>
                </button>
              );
            })}
          </div>
          {activeProject && (
            <p className={styles.mobileHint}>
              <span>Swipe to browse. Tap to select.</span>
              <span>{activeIndex + 1} / {filteredProjects.length}</span>
            </p>
          )}
        </section>
        {activeProject ? (
          <section id="project-panel" role="tabpanel" aria-labelledby={`project-tab-${activeProject.id}`} tabIndex={0} className={styles.projectPanel}>
            <div key={activeProject.id} className={styles.projectInfo}>
              <div className={styles.projectMeta}><span>{activeProject.category}</span><span className={styles.metaDivider} aria-hidden="true" /><span>{activeProject.status}</span></div>
              <h2 className={`${styles.projectTitle} ${activeProject.title.length > 22 ? styles.longTitle : ''}`}>{activeProject.title}</h2>
              <p className={styles.subtitle}>{activeProject.subtitle}</p>
              <p className={styles.description}>{activeProject.description}</p>
            </div>
            <div className={styles.projectControls}>
              <div className={styles.actions}>
                {activeProject.githubUrl && <a href={activeProject.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryAction}>
                  <Image src="/icons/GitHub.png" alt="" width={20} height={20} className={styles.repositoryIcon} />
                  View repository
                </a>}
                {activeProject.liveUrl && <a href={activeProject.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.secondaryAction}>Open live project</a>}
                <button ref={detailsButtonRef} type="button" className={styles.detailsAction} aria-label={`More about ${activeProject.title}`} aria-haspopup="dialog" onClick={() => setDetailsOpen(true)}><span aria-hidden="true">···</span></button>
              </div>
              <div className={styles.projectFooter}>
              <div className={styles.technologySection}>
                <span className={styles.footerLabel}>Built with</span>
                <ul className={styles.technologyLogos} aria-label={`${activeProject.title} technologies`}>
                  {activeProject.technologies.map((technology) => {
                    const icon = technologyIcons[technology];
                    if (!icon) return null;
                    return (
                      <li key={technology} title={technology} className={icon.wide ? styles.wideLogo : undefined}>
                        <Image src={icon.src} alt={technology} width={icon.wide ? 88 : 36} height={36}
                          className={icon.monochrome ? styles.monochromeLogo : undefined} />
                      </li>
                    );
                  })}
                </ul>
              </div>
              <p className={styles.keyboardHint}><kbd>←</kbd><kbd>→</kbd><span>Browse projects</span><span className={styles.position}>{activeIndex + 1} / {filteredProjects.length}</span></p>
              </div>
            </div>
          </section>
        ) : (
          <div className={styles.emptyState}><h2>No projects in this category yet.</h2><button type="button" onClick={() => changeCategory('All')}>Show all projects</button></div>
        )}
        <span className="sr-only" role="status">{activeProject ? `${activeProject.title} selected` : 'No projects found'}</span>
      </main>
      <dialog ref={dialogRef} className={styles.dialog} aria-labelledby="project-details-title" onCancel={(event) => { event.preventDefault(); closeDetails(); }} onClose={() => setDetailsOpen(false)} onClick={(event) => { if (event.target === event.currentTarget) closeDetails(); }}>
        {activeProject && (
          <div className={styles.dialogContent}>
            <div className={styles.dialogHeading}><span>Project details</span><button type="button" onClick={closeDetails} aria-label="Close project details">×</button></div>
            <p className={styles.projectMeta}>{activeProject.category} / {activeProject.status}</p>
            <h2 id="project-details-title">{activeProject.title}</h2>
            <p className={styles.dialogSubtitle}>{activeProject.subtitle}</p>
            <p>{activeProject.description}</p>
            <h3>Technologies</h3>
            <ul className={styles.technologies}>{activeProject.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
            {activeProject.githubUrl && <a href={activeProject.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryAction}>
              <Image src="/icons/GitHub.png" alt="" width={20} height={20} className={styles.repositoryIcon} />
              View repository
            </a>}
          </div>
        )}
      </dialog>
    </div>
  );
}
