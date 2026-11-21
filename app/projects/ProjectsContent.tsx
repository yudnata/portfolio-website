'use client';

import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';
import Image from 'next/image';
import { projects } from '@/data';
import type { Project } from '@/types';
import styles from './projects.module.css';
import { getPortfolioAudio } from '@/lib/portfolio-audio';

const categories = ['All', 'Personal', 'Web App', 'Enterprise'] as const;

type RailDrag = {
  pointerId: number;
  startX: number;
  scrollLeft: number;
  dragged: boolean;
  captureTarget: HTMLElement;
};

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
  PHP: { src: '/icons/technology/php.svg' },
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
  'Vue.js': { src: '/icons/Vue.png' },
  Flutter: { src: '/icons/Flutter.png' },
  Go: { src: '/icons/Go.png' },
  Rust: { src: '/icons/technology/rust.svg' },
  FastAPI: { src: '/icons/technology/fastapi.svg' },
  'Cloudflare R2': { src: '/icons/technology/cloudflare.svg', monochrome: true },
};

function ProjectArtwork({ project, backdrop = false, priority = false, onReady }: {
  project: Project;
  backdrop?: boolean;
  priority?: boolean;
  onReady?: () => void;
}) {
  const [failed, setFailed] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!project.image || failed || (image?.complete && image.naturalWidth > 0)) onReady?.();
  }, [failed, onReady, project.image]);

  if (!project.image || failed) {
    return <span className={styles.artworkFallback}><span>{project.title}</span>{backdrop && <small>Project preview unavailable</small>}</span>;
  }
  return (
    <Image ref={imageRef} src={project.image} alt="" fill draggable={false}
      sizes={backdrop ? '100vw' : '(max-width: 760px) 120px, 132px'}
      preload={priority} loading={backdrop && !priority ? 'eager' : undefined}
      quality={75} className={`${styles.artwork} ${backdrop ? 'page-background-image' : ''}`}
      onLoad={(event) => { event.currentTarget.dataset.loaded = 'true'; onReady?.(); }}
      onError={() => { setFailed(true); onReady?.(); }} />
  );
}

function ProjectBackdrops({ project }: { project: Project }) {
  const [layers, setLayers] = useState<{ current: Project; previous: Project | null }>(() => ({ current: project, previous: null }));
  const renderedProjects = [layers.previous, layers.current, project].filter((item, index, items): item is Project =>
    item !== null && items.findIndex((candidate) => candidate?.id === item.id) === index);

  return (
    <div className={styles.backdrops} aria-hidden="true">
      {renderedProjects.map((item) => (
        <div key={item.id} data-page-background={item.id === project.id ? 'active' : 'inactive'}
          className={`${styles.backdrop} ${item.id === layers.current.id ? styles.backdropActive : ''}`}
          onTransitionEnd={(event) => {
            if (event.target === event.currentTarget && event.propertyName === 'opacity') {
              setLayers((current) => current.previous?.id === item.id ? { ...current, previous: null } : current);
            }
          }}>
          <ProjectArtwork project={item} backdrop priority={item.id === projects[0]?.id}
            onReady={() => {
              if (item.id === project.id) {
                setLayers((current) => current.current.id === item.id ? current : { current: item, previous: current.current });
              }
            }} />
        </div>
      ))}
    </div>
  );
}

export default function ProjectsContent() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All');
  const [activeId, setActiveId] = useState(projects[0]?.id ?? '');
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [scrollAvailable, setScrollAvailable] = useState({ previous: false, next: false });
  const railRef = useRef<HTMLDivElement>(null);
  const railDragRef = useRef<RailDrag | null>(null);
  const suppressRailClickRef = useRef(false);
  const tileRefs = useRef(new Map<string, HTMLButtonElement>());
  const dialogRef = useRef<HTMLDialogElement>(null);
  const detailsButtonRef = useRef<HTMLButtonElement>(null);
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory);
  const activeProject = filteredProjects.find((project) => project.id === activeId) ?? filteredProjects[0];
  const activeIndex = activeProject ? filteredProjects.findIndex((project) => project.id === activeProject.id) : -1;
  const hasRailOverflow = scrollAvailable.previous || scrollAvailable.next;
  const previousProjectId = useRef(activeProject?.id);

  useEffect(() => {
    if (previousProjectId.current !== activeProject?.id) {
      previousProjectId.current = activeProject?.id;
      getPortfolioAudio().playProject();
    }
  }, [activeProject?.id]);

  useEffect(() => {
    if (!activeProject || railDragRef.current) return;
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
    const rail = railRef.current;
    if (!rail) return;
    function updateScrollAvailable() {
      if (!rail) return;
      const previous = rail.scrollLeft > 1;
      const next = rail.scrollLeft < rail.scrollWidth - rail.clientWidth - 1;
      setScrollAvailable((current) => current.previous === previous && current.next === next
        ? current : { previous, next });
    }
    const observer = new ResizeObserver(updateScrollAvailable);
    observer.observe(rail);
    const tile = activeProject ? tileRefs.current.get(activeProject.id) : undefined;
    if (tile) observer.observe(tile);
    rail.addEventListener('scroll', updateScrollAvailable, { passive: true });
    const frame = requestAnimationFrame(updateScrollAvailable);
    return () => {
      observer.disconnect();
      rail.removeEventListener('scroll', updateScrollAvailable);
      cancelAnimationFrame(frame);
    };
  }, [activeProject, activeCategory]);

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

  function startRailDrag(event: PointerEvent<HTMLDivElement>) {
    const rail = event.currentTarget;
    if (event.pointerType !== 'mouse' || event.button !== 0 || !event.isPrimary
      || rail.scrollWidth <= rail.clientWidth) return;
    if (event.clientY - rail.getBoundingClientRect().top >= rail.clientHeight) return;
    suppressRailClickRef.current = false;
    rail.scrollTo({ left: rail.scrollLeft, behavior: 'instant' });
    const captureTarget = (event.target as HTMLElement).closest<HTMLElement>('button') ?? rail;
    railDragRef.current = {
      pointerId: event.pointerId, startX: event.clientX, scrollLeft: rail.scrollLeft,
      dragged: false, captureTarget,
    };
    captureTarget.setPointerCapture(event.pointerId);
  }

  function moveRailDrag(event: PointerEvent<HTMLDivElement>) {
    const drag = railDragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const distance = event.clientX - drag.startX;
    if (!drag.dragged && Math.abs(distance) < 8) return;
    drag.dragged = true;
    event.currentTarget.dataset.dragging = 'true';
    event.currentTarget.scrollLeft = drag.scrollLeft - distance;
    event.preventDefault();
  }

  function finishRailDrag(event: PointerEvent<HTMLDivElement>) {
    const drag = railDragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    suppressRailClickRef.current = drag.dragged;
    railDragRef.current = null;
    delete event.currentTarget.dataset.dragging;
    if (drag.captureTarget.hasPointerCapture(event.pointerId)) {
      drag.captureTarget.releasePointerCapture(event.pointerId);
    }
  }

  function scrollRail(direction: number) {
    const rail = railRef.current;
    if (!rail) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    rail.scrollBy({ left: direction * rail.clientWidth * .75, behavior: reducedMotion ? 'instant' : 'smooth' });
  }

  function closeDetails() {
    dialogRef.current?.close();
    setDetailsOpen(false);
    detailsButtonRef.current?.focus();
  }

  return (
    <div className={styles.page}>
      <ProjectBackdrops project={activeProject ?? projects[0]} />
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
          <div className={styles.rail} ref={railRef} role="tablist" aria-label="Projects" aria-orientation="horizontal"
            onPointerDown={startRailDrag} onPointerMove={moveRailDrag}
            onPointerUp={finishRailDrag} onPointerCancel={finishRailDrag} onLostPointerCapture={finishRailDrag}
            onClickCapture={(event) => {
              if (suppressRailClickRef.current && event.detail !== 0) {
                event.preventDefault();
                event.stopPropagation();
                suppressRailClickRef.current = false;
              }
            }}>
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
                  onPointerEnter={(event) => { if (event.pointerType === 'mouse' && !railDragRef.current && !suppressRailClickRef.current) setActiveId(project.id); }}
                  onFocus={() => { if (!railDragRef.current) setActiveId(project.id); }}
                  onClick={() => setActiveId(project.id)} onKeyDown={(event) => handleTileKeyDown(event, index)}>
                  <span className={styles.tileArtwork}>
                    <ProjectArtwork project={project} />
                    <span className={styles.tileWordmark} aria-hidden="true">{project.title}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </section>
        {activeProject ? (
          <section id="project-panel" role="tabpanel" aria-labelledby={`project-tab-${activeProject.id}`} tabIndex={0} className={styles.projectPanel}>
            <div className={styles.railUtility}>
              <div className={styles.projectMeta}><span>{activeProject.category}</span><span className={styles.metaDivider} aria-hidden="true" /><span>{activeProject.status}</span></div>
              {hasRailOverflow && (
                <p className={styles.railHint}>
                  <span className={styles.swipeHint}>Swipe to see more</span>
                  <span className={styles.dragHint}>Drag to see more</span>
                  <span aria-hidden="true"> →</span>
                </p>
              )}
              <p className={styles.mobileHint}>
                <span className={styles.mobileBrowseActions}>
                  <button type="button" onClick={() => scrollRail(-1)} disabled={!scrollAvailable.previous} aria-label="Scroll projects left">←</button>
                  <button type="button" onClick={() => scrollRail(1)} disabled={!scrollAvailable.next} aria-label="Scroll projects right">→</button>
                  <span>{activeIndex + 1} / {filteredProjects.length}</span>
                </span>
              </p>
            </div>
            <div key={activeProject.id} className={styles.projectInfo}>
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
              <p className={styles.keyboardHint}>
                <button type="button" onClick={() => scrollRail(-1)} disabled={!scrollAvailable.previous} aria-label="Scroll projects left">←</button>
                <button type="button" onClick={() => scrollRail(1)} disabled={!scrollAvailable.next} aria-label="Scroll projects right">→</button>
                <span>Browse projects</span><span className={styles.position}>{activeIndex + 1} / {filteredProjects.length}</span>
              </p>
              </div>
            </div>
          </section>
        ) : (
          <div className={styles.emptyState}><h2>No projects in this category yet.</h2><button type="button" onClick={() => changeCategory('All')}>Show all projects</button></div>
        )}
        <span className="sr-only" role="status">{activeProject ? `${activeProject.title} selected` : 'No projects found'}</span>
      </main>
      <dialog ref={dialogRef} className={styles.dialog} aria-labelledby="project-details-title" onCancel={(event) => { event.preventDefault(); closeDetails(); }} onClose={() => setDetailsOpen(false)} onClick={(event) => { if (event.target === event.currentTarget) closeDetails(); }}>
        {activeProject && detailsOpen && (
          <div className={styles.dialogContent}>
            <div className={styles.dialogHeading}><span>Project details</span><button type="button" onClick={closeDetails} aria-label="Close project details">×</button></div>
            <p className={styles.projectMeta}>{activeProject.category} / {activeProject.status}</p>
            <h2 id="project-details-title">{activeProject.title}</h2>
            <p className={styles.dialogSubtitle}>{activeProject.subtitle}</p>
            {activeProject.image && (
              <a href={activeProject.image} target="_blank" rel="noopener noreferrer"
                className={styles.screenshotLink} aria-label={`Open full-size screenshot of ${activeProject.title}`}>
                <Image src={activeProject.image} alt={`${activeProject.title} screenshot`} fill sizes="(max-width: 760px) 90vw, 640px" quality={100} />
              </a>
            )}
            {activeProject.imageNote && <p className={styles.imageNote}>{activeProject.imageNote}</p>}
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
