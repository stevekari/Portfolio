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
              <p>{t.about.p1}</p>
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
                        {skill}
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
