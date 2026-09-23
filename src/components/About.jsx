import { useEffect, useRef, useState } from 'react';
import './About.css';
import { skillCategories } from '../data/data';
import { useLanguage } from '../context/LanguageContext';

function useReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: options.threshold || 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// Professional SVG Tech Icons
function TechIcon({ name }) {
  const iconProps = {
    width: '14',
    height: '14',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: 'skill-pill-icon',
    'aria-hidden': 'true',
  };

  switch (name) {
    case 'React':
      return (
        <svg {...iconProps} strokeWidth="1.8">
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="currentColor" />
        </svg>
      );
    case 'TypeScript':
      return (
        <svg {...iconProps}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M8 8h4m-2 0v8" />
          <path d="M14 13.5c.5.5 1 1 2 1s1.5-.5 1.5-1.2c0-1.5-3.5-1-3.5-2.8 0-.9.7-1.5 1.8-1.5 1 0 1.6.4 2 1" />
        </svg>
      );
    case 'JavaScript':
      return (
        <svg {...iconProps}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 16v-4a2 2 0 0 0-2-2" />
          <path d="M14 13.5c.5.5 1 1 2 1s1.5-.5 1.5-1.2c0-1.5-3.5-1-3.5-2.8 0-.9.7-1.5 1.8-1.5 1 0 1.6.4 2 1" />
        </svg>
      );
    case 'Flutter':
      return (
        <svg {...iconProps}>
          <path d="M14 2 4 12l4 4 12-12h-6z" />
          <path d="m14 14-4 4 6 6h6l-9-9 1-1z" />
        </svg>
      );
    case 'Spring Boot':
      return (
        <svg {...iconProps}>
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5a4.5 4.5 0 0 1-5.5-4.3c0-2.3 1.8-4.2 4.2-4.2a4.3 4.3 0 0 1 3.8 2.3l-2.4 1.4a1.8 1.8 0 0 0-1.4-.8 1.8 1.8 0 0 0-1.8 1.8 1.8 1.8 0 0 0 2.4 1.7l.7 2.1z" />
        </svg>
      );
    case 'Java':
      return (
        <svg {...iconProps}>
          <path d="M4 19c4 2 12 2 16 0" />
          <path d="M6 15c3 1.5 9 1.5 12 0" />
          <path d="M12 2c2 3-1 5 1 8-2-3 1-5-1-8z" />
          <path d="M9 5c1.5 2-.8 3.5.7 5.5-1.5-2 .8-3.5-.7-5.5z" />
        </svg>
      );
    case 'REST APIs':
      return (
        <svg {...iconProps}>
          <path d="M4 12h16m-6-6 6 6-6 6" />
          <circle cx="4" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    case 'PostgreSQL':
    case 'MySQL':
      return (
        <svg {...iconProps}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case 'Docker':
      return (
        <svg {...iconProps}>
          <path d="M4 12h16c0 4.4-3.6 8-8 8s-8-3.6-8-8z" />
          <rect x="6" y="8" width="3" height="3" />
          <rect x="10" y="8" width="3" height="3" />
          <rect x="14" y="8" width="3" height="3" />
          <rect x="10" y="4" width="3" height="3" />
        </svg>
      );
    case 'Git':
      return (
        <svg {...iconProps}>
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="12" r="3" />
          <path d="M6 9v6m3-3h6" />
        </svg>
      );
    case 'GitHub':
      return (
        <svg {...iconProps}>
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
  }
}

export default function About() {
  const { t } = useLanguage();
  const [headerRef, headerVis] = useReveal();
  const [storyRef, storyVis] = useReveal();
  const [skillsRef, skillsVis] = useReveal();
  const [statsRef, statsVis] = useReveal({ threshold: 0.2 });

  const localizedStats = [
    { value: '6+', label: t.about.stats.projectsBuilt },
    { value: '3+', label: t.about.stats.languagesMastered },
    { value: '100%', label: t.about.stats.fullStack },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div
          ref={headerRef}
          className={`about-header ${headerVis ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <h2 className="section-title">{t.about.title}</h2>
          <p className="section-subtitle">{t.about.subtitle}</p>
        </div>

        <div className="about-grid">
          {/* Left Column: Story */}
          <div
            ref={storyRef}
            className={`about-story ${storyVis ? 'reveal-visible' : 'reveal-left'}`}
          >
            <h3 className="about-column-title">
              <svg
                className="about-title-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              {t.about.journeyTitle}
            </h3>
            <div className="about-paragraphs">
              <p className="about-paragraph-lead">{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
              {t.about.p4 && <p>{t.about.p4}</p>}
              {t.about.p5 && <p>{t.about.p5}</p>}
            </div>
          </div>

          {/* Right Column: Skills */}
          <div
            ref={skillsRef}
            className={`about-skills ${skillsVis ? 'reveal-visible' : 'reveal-right'}`}
          >
            <h3 className="about-column-title">
              <svg
                className="about-title-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              {t.about.skillsTitle}
            </h3>
            <div className="skills-categories">
              {skillCategories.map((group) => (
                <div key={group.category} className="skill-category-group">
                  <h4 className="skill-category-label">{group.category}</h4>
                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span key={skill} className="skill-pill">
                        <TechIcon name={skill} />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Stats Bar */}
        <div
          ref={statsRef}
          className={`about-stats-grid ${statsVis ? 'reveal-visible' : 'reveal-scale'}`}
        >
          {localizedStats.map((stat, index) => (
            <div
              key={index}
              className="stat-card"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
