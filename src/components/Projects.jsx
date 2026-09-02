import { useEffect, useRef, useState } from 'react';
import './Projects.css';
import { projects } from '../data/data';
import { useLanguage } from '../context/LanguageContext';

function ProjectCard({ project, index, onOpenImage, t }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const localizedItem = t.projects.items[project.id];
  const projectTitle = localizedItem?.title || project.title;
  const projectDesc = localizedItem?.description || project.description;
  const projectBiz = localizedItem?.businessValue || project.businessValue;

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className={`project-card ${isVisible ? 'project-card--visible' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* ===== Browser Mockup ===== */}
      <div className="browser-mockup">
        <div className="browser-chrome">
          <div className="browser-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <div className="browser-url">
            <span className="browser-url-text">{project.mockup?.url || `${project.title.toLowerCase().replace(/\s+/g, '')}.stephen.local`}</span>
            <span className="browser-url-indicator">—</span>
            <span className="browser-url-dot">•</span>
          </div>
        </div>
        <div
          className={`browser-viewport ${project.image ? 'browser-viewport--has-image' : ''}`}
          style={!project.image ? { background: project.gradient } : undefined}
          onClick={() => project.image && onOpenImage({ ...project, title: projectTitle, description: projectDesc })}
          role={project.image ? 'button' : undefined}
          tabIndex={project.image ? 0 : undefined}
          aria-label={project.image ? `View full screenshot for ${projectTitle}` : undefined}
          onKeyDown={(e) => {
            if (project.image && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault();
              onOpenImage({ ...project, title: projectTitle, description: projectDesc });
            }
          }}
        >
          {project.image ? (
            <div className="browser-image-wrapper">
              <img
                src={project.image}
                alt={`${projectTitle} interface preview`}
                className="browser-project-image"
                loading="lazy"
              />
              <div className="browser-image-expand-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
                <span>{t.projects.clickToExpand}</span>
              </div>
            </div>
          ) : (
            <div className="browser-app-preview">
              <div
                className="app-icon"
                style={{ backgroundColor: project.mockup?.accentColor || '#2563EB' }}
              >
                {project.mockup?.icon || project.title[0]}
              </div>
              <p className="app-label">[ {project.mockup?.label || `${projectTitle} UI`} ]</p>
              <div className="app-nav-dots">
                <span className="nav-dot nav-dot--muted" />
                <span
                  className="nav-dot nav-dot--active"
                  style={{ backgroundColor: project.mockup?.accentColor || '#2563EB' }}
                />
                <span className="nav-dot nav-dot--muted" />
              </div>
              <div className="app-input-row">
                <div className="app-input-bar" />
                <div
                  className="app-input-btn"
                  style={{ backgroundColor: project.mockup?.accentColor || '#2563EB' }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ===== Card Body ===== */}
      <div className="project-card-body">
        {/* Title Row */}
        <div className="project-title-row">
          <h3 className="project-card-title">{projectTitle}</h3>
          <div className="project-categories">
            {project.categories.map((cat) => (
              <span key={cat} className="project-category">{cat}</span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="project-card-description">{projectDesc}</p>

        {/* Business Value */}
        <blockquote className="project-business-value">
          <strong>{t.projects.businessValueLabel}</strong> {projectBiz}
        </blockquote>

        {/* Tech Stack */}
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>

        {/* Actions */}
        <div className="project-card-divider" />
        <div className="project-card-actions">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-action-btn project-action-btn--primary"
          >
            {t.projects.liveDemo}
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-action-btn project-action-btn--secondary"
          >
            {t.projects.sourceCode}
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [activeModalProject, setActiveModalProject] = useState(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Lock scroll and handle escape key when modal is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      }
    };

    if (activeModalProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalProject]);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div
          ref={headerRef}
          className={`projects-header ${headerVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-subtitle">{t.projects.subtitle}</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpenImage={(proj) => setActiveModalProject(proj)}
              t={t}
            />
          ))}
        </div>
      </div>

      {/* ===== Fullscreen Image Preview Lightbox Modal ===== */}
      {activeModalProject && (
        <div
          className="project-lightbox-backdrop"
          onClick={() => setActiveModalProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeModalProject.title} screenshot full view`}
        >
          <div
            className="project-lightbox-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="project-lightbox-header">
              <div className="project-lightbox-title-wrap">
                <h3 className="project-lightbox-title">{activeModalProject.title}</h3>
                <span className="project-lightbox-hint">{t.projects.lightboxPreview}</span>
              </div>
              <button
                className="project-lightbox-close"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close preview"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Full Image */}
            <div className="project-lightbox-body">
              <img
                src={activeModalProject.image}
                alt={`${activeModalProject.title} full interface`}
                className="project-lightbox-img"
              />
            </div>

            {/* Footer with actions */}
            <div className="project-lightbox-footer">
              <div className="project-tags">
                {activeModalProject.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-lightbox-actions">
                <a
                  href={activeModalProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-btn project-action-btn--primary"
                >
                  {t.projects.liveDemo}
                </a>
                <a
                  href={activeModalProject.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-btn project-action-btn--secondary"
                >
                  {t.projects.sourceCode}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
