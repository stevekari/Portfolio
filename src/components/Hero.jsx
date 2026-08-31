import { useEffect, useRef, useState } from 'react';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Background Decorative Ambient Glow */}
      <div className="hero-gradient-circle" aria-hidden="true" />

      <div className="container hero-container" ref={heroRef}>
        <div className={`hero-grid ${isVisible ? 'hero-grid--visible' : ''}`}>
          {/* ===== Left Column: Intro & Info ===== */}
          <div className="hero-left">
            {/* Status Pill Badge */}
            <div className="hero-badge hero-animate hero-animate-1">
              <span className="hero-badge-dot" />
              <span>Available for new product work — 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title hero-animate hero-animate-2">
              I build business apps{' '}
              <span className="hero-title-muted">
                that companies actually use.
              </span>
            </h1>

            {/* Monospace Tagline & Description */}
            <div className="hero-description-wrap hero-animate hero-animate-3">
              <p className="hero-description-lead">
                Clean UI • Boxes + Arrows • Business Logic • Real-World Projects.
              </p>
              <p className="hero-description-text">
                Full‑stack developer specializing in Java, Spring Boot, React, and Docker. I build practical business applications with clean UI, solid backend architecture, and real‑world use cases. My background in textile production taught me discipline, responsibility, and strong problem‑solving skills, which I now apply to software development. Currently building full‑stack projects and preparing for junior developer roles across Europe.
              </p>
            </div>

            {/* Quick Info Cards Grid */}
            <div className="hero-info-cards hero-animate hero-animate-4">
              <div className="hero-info-card">
                <span className="info-card-label">NAME</span>
                <strong className="info-card-value">Stephen Karikari</strong>
              </div>
              <div className="hero-info-card">
                <span className="info-card-label">ROLE</span>
                <strong className="info-card-value">Full-Stack • Java / React</strong>
              </div>
              <div className="hero-info-card">
                <span className="info-card-label">LOCATION</span>
                <strong className="info-card-value">Open to Remote & On-site</strong>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="hero-actions hero-animate hero-animate-5">
              <a href="#projects" className="hero-btn hero-btn-primary">
                <span>View Projects</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>

              <a
                href="https://github.com/stevekari"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn hero-btn-secondary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/stephen-karikari/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn hero-btn-secondary hero-btn-linkedin"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.63 1.63 0 1 0 0-3.26 1.63 1.63 0 0 0 0 3.26m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* ===== Right Column: Architecture & System Flow ("Boxes + Arrows") ===== */}
          <div className="hero-right hero-animate hero-animate-4">
            <div className="system-flow-card">
              {/* Flow Grid with Nodes and Arrows */}
              <div className="system-flow-diagram">
                {/* Level 1: Frontend */}
                <div className="flow-level">
                  <div className="flow-node flow-node-main">
                    <div className="flow-node-badge flow-badge-react">R</div>
                    <div className="flow-node-content">
                      <strong className="flow-node-title">React UI — Kiosk & Web</strong>
                      <span className="flow-node-desc">Components • State • Clean UI • Boxes</span>
                    </div>
                  </div>

                  <div className="flow-connector-horiz">
                    <span className="flow-arrow-down">↓</span>
                  </div>

                  <div className="flow-node flow-node-sub">
                    <div className="flow-node-badge flow-badge-action">→</div>
                    <div className="flow-node-content">
                      <strong className="flow-node-title">Action</strong>
                      <span className="flow-node-desc">User intent</span>
                    </div>
                  </div>
                </div>

                {/* Vertical Connector */}
                <div className="flow-vertical-connector">
                  <span className="flow-line-vert" />
                  <span className="flow-arrow-down-main">↓</span>
                </div>

                {/* Level 2: Backend */}
                <div className="flow-level">
                  <div className="flow-node flow-node-main">
                    <div className="flow-node-badge flow-badge-java">J</div>
                    <div className="flow-node-content">
                      <strong className="flow-node-title">Java API — Spring Boot</strong>
                      <span className="flow-node-desc">REST • Auth • Business Logic • RBAC</span>
                    </div>
                  </div>

                  <div className="flow-connector-horiz">
                    <span className="flow-arrow-down">↓</span>
                  </div>

                  <div className="flow-node flow-node-sub">
                    <div className="flow-node-badge flow-badge-validate">✓</div>
                    <div className="flow-node-content">
                      <strong className="flow-node-title">Validate</strong>
                      <span className="flow-node-desc">Rule engine</span>
                    </div>
                  </div>
                </div>

                {/* Vertical Connector */}
                <div className="flow-vertical-connector">
                  <span className="flow-line-vert" />
                  <span className="flow-arrow-down-main">↓</span>
                </div>

                {/* Level 3: Database & Deploy */}
                <div className="flow-level">
                  <div className="flow-node flow-node-main">
                    <div className="flow-node-badge flow-badge-db">DB</div>
                    <div className="flow-node-content">
                      <strong className="flow-node-title">PostgreSQL / MySQL</strong>
                      <span className="flow-node-desc">Orders • Members • Inventory • Logs</span>
                    </div>
                  </div>

                  <div className="flow-connector-horiz">
                    <span className="flow-arrow-down">↓</span>
                  </div>

                  <div className="flow-node flow-node-sub">
                    <div className="flow-node-badge flow-badge-docker">⚙</div>
                    <div className="flow-node-content">
                      <strong className="flow-node-title">Docker</strong>
                      <span className="flow-node-desc">Render • Prod</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Bar */}
              <div className="system-flow-footer">
                <span className="system-flow-caption">
                  SYSTEM FLOW — REQ → RULES → STATE → DEPLOY
                </span>
                <span className="system-flow-status">
                  <span className="system-flow-live-dot" />
                  <span>Live • Prod</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
