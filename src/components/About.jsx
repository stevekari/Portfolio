import { useEffect, useRef, useState } from 'react';
import './About.css';
import { skillCategories, stats } from '../data/data';

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
  const [headerRef, headerVis] = useReveal();
  const [storyRef, storyVis] = useReveal();
  const [skillsRef, skillsVis] = useReveal();
  const [statsRef, statsVis] = useReveal({ threshold: 0.2 });

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div
          ref={headerRef}
          className={`about-header ${headerVis ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A passionate engineer dedicated to crafting clean, high-performance web applications from end to end.
          </p>
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
              My Journey
            </h3>
            <div className="about-paragraphs">
              <p>
                I'm Stephen Karikari, a passionate full-stack developer specializing in Java and React. I believe in building software that solves real business problems — clean, maintainable, and user-focused.
              </p>
              <p>
                With hands-on experience in building complete web applications from database design to frontend deployment, I bring a practical, business-minded approach to every project. I love turning complex requirements into elegant, simple solutions.
              </p>
              <p>
                My goal is to join a forward-thinking company where I can contribute to impactful projects, grow as an engineer, and help build products that make a real difference.
              </p>
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
              Technical Skills
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
          {stats.map((stat, index) => (
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
