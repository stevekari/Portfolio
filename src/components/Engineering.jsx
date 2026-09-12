import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Engineering.css';

// SVG Icons for the 4 Engineering Pillars
function PillarIcon({ type }) {
  if (type === 'layout') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    );
  }
  if (type === 'server') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    );
  }
  if (type === 'smartphone') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    );
  }
  // terminal / devops
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}

export default function Engineering() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const eng = t.engineering || {};
  const pillars = eng.pillars || [];
  const now = eng.now || {};
  const nowItems = now.items || [];

  return (
    <section id="engineering" className="section engineering-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className={`engineering-header ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}>
          <div className="engineering-badge">
            <span className="engineering-badge-icon">⚙️</span>
            <span>{eng.pillarsTitle || 'Evidence-Based Stack'}</span>
          </div>
          <h2 className="section-title">{eng.title || 'Engineering & Capabilities'}</h2>
          <p className="section-subtitle">
            {eng.subtitle ||
              'Skills demonstrated through real-world implementation, architecture, and production tooling.'}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="engineering-grid">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.id || idx}
              className={`pillar-card pillar-card--${pillar.id} ${isVisible ? 'pillar-card--visible' : ''}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="pillar-header">
                <div className="pillar-icon-box">
                  <PillarIcon type={pillar.icon} />
                </div>
                <div className="pillar-title-group">
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <span className="pillar-highlight">{pillar.highlight}</span>
                </div>
              </div>

              {/* Monospace Tech Stack Tags */}
              <div className="pillar-tags">
                {pillar.tags?.map((tag) => (
                  <span key={tag} className="pillar-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Concrete Capability Description */}
              <p className="pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Currently Building / "Now" Section Card */}
        <div className={`now-card ${isVisible ? 'now-card--visible' : ''}`}>
          <div className="now-card-header">
            <div className="now-status-pill">
              <span className="now-pulse-dot" />
              <span>{now.badge || 'NOW · SEPTEMBER 2026'}</span>
            </div>
            <h3 className="now-title">{now.title || 'Currently Building & Focused On'}</h3>
            <p className="now-subtitle">
              {now.subtitle || 'Active projects, skill expansion, and professional goals in progress right now:'}
            </p>
          </div>

          <div className="now-items-grid">
            {nowItems.map((item, index) => (
              <div key={index} className="now-item">
                <span className="now-item-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="now-item-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

