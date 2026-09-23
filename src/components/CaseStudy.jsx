import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './CaseStudy.css';
import sampleImg from '../assets/sample.png';

function useReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: options.threshold || 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

export default function CaseStudy() {
  const { t } = useLanguage();
  const [sectionRef, isVisible] = useReveal();
  const [activeTab, setActiveTab] = useState('all'); // 'all' or specific stage tab

  const caseStudyData = t.caseStudy || {
    badge: 'FEATURED CASE STUDY',
    title: 'Textile Colour Detector System',
    subtitle: 'From Factory-Floor Challenge to Automated Quality Control Platform',
    overview:
      'An industrial-grade color matching and formulation verification system built with React, Spring Boot, and PostgreSQL to eliminate textile dye batch rejections and streamline production quality control.',
    stats: [
      { value: '35%', label: 'Reduction in Dye Re-dips', sub: 'Substantial savings in chemical waste & downtime' },
      { value: '< 800ms', label: 'Color Matching Latency', sub: 'Instant Pass/Fail feedback vs. 45-min lab delay' },
      { value: '100%', label: 'Digital Batch Traceability', sub: 'Standardized CIELAB ΔE tolerance audits' },
    ],
    stages: [
      {
        id: 'challenge',
        number: '01',
        title: 'The Challenge',
        tagline: 'High scrap rates & subjective visual inspection',
        content:
          'In textile manufacturing, minor dye variations cause entire fabric rolls to be rejected. Visual human inspection is subjective and varies under different shift lighting, while sending samples to external spectrophotometer labs causes 45-minute production bottlenecks per batch.',
        points: [
          'Costly dye batch re-dips consuming water, power, and expensive dyestuffs.',
          'Inconsistent pass/fail decisions across day and night production shifts.',
          'Lack of a centralized historical database for dye recipe formulations.',
        ],
      },
      {
        id: 'research',
        number: '02',
        title: 'Research & Color Science',
        tagline: 'Understanding CIELAB, ΔE2000 & factory floor constraints',
        content:
          'Researched perceptual color mathematics (CIELAB color space and Delta E formulas) to quantify color differences beyond simple RGB values. Interviewed plant operators to understand real shop-floor constraints: high ambient noise, humidity, and the need for zero-training touch interfaces.',
        points: [
          'Evaluated ΔE CMC and ΔE 2000 tolerances for human eye acceptance thresholds.',
          'Analyzed standard D65 daylight illuminant calibration parameters.',
          'Mapped factory operator workflow from dye mixing vat to final fabric inspection.',
        ],
      },
      {
        id: 'design',
        number: '03',
        title: 'System Design',
        tagline: 'High-contrast kiosk UI & modular service architecture',
        content:
          'Designed a clean, high-contrast user interface optimized for touch kiosks and tablets. Visual feedback is immediate with large status pills, color spectrum graphs, and exact Delta E variance breakdowns.',
        points: [
          'Touch-optimized kiosk layout with instantaneous Pass/Warning/Fail indicators.',
          'Interactive color swatch comparison with live LAB / RGB / HEX spectrum visualizers.',
          'Modular REST API architecture separating image capture from formulation business logic.',
        ],
      },
      {
        id: 'development',
        number: '04',
        title: 'Full-Stack Development',
        tagline: 'React frontend + Java/Spring Boot backend + PostgreSQL',
        content:
          'Engineered a full-stack solution combining a high-performance React frontend with a robust Java/Spring Boot REST backend and relational PostgreSQL persistence.',
        points: [
          'Frontend: React, HTML5 Canvas sub-pixel color sampling, and responsive CSS with dark/light themes.',
          'Backend: Spring Boot REST APIs implementing color difference algorithms, batch recipe tracking, and RBAC validation.',
          'Database: PostgreSQL schema storing fabric batches, color recipes, and inspector audit trails.',
          'DevOps: Containerized with Docker and deployed with continuous integration on Render.',
        ],
      },
      {
        id: 'results',
        number: '05',
        title: 'Operational Results',
        tagline: 'Measurable waste reduction & instant verification',
        content:
          'The deployed system dramatically accelerated inspection times and reduced material waste, creating a standardized quality benchmark across all production runs.',
        points: [
          '35% reduction in dye re-dips and chemical waste within the first quarter.',
          'Inspection turnaround slashed from 45 minutes to under 800 milliseconds.',
          'Standardized digital quality records accessible across plant management.',
        ],
      },
      {
        id: 'future',
        number: '06',
        title: 'Future Improvements',
        tagline: 'Edge AI camera inference & automated dye dispensing',
        content:
          'Planned roadmap extensions to transform the system into an autonomous industrial IoT quality control hub.',
        points: [
          'Edge AI computer vision integration for automated inline fabric scanning on rolling conveyors.',
          'Direct PLC integration to automatically dispense corrective dye quantities.',
          'Cross-platform mobile inspection app built with Flutter for plant floor supervisors.',
        ],
      },
    ],
  };

  const visibleStages =
    activeTab === 'all'
      ? caseStudyData.stages
      : caseStudyData.stages.filter((s) => s.id === activeTab);

  return (
    <section id="casestudy" className="section casestudy-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className={`casestudy-header ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}>
          <div className="casestudy-badge">
            <span className="casestudy-badge-dot" />
            <span>{caseStudyData.badge}</span>
          </div>
          <h2 className="section-title">{caseStudyData.title}</h2>
          <p className="section-subtitle">{caseStudyData.subtitle}</p>
        </div>

        {/* Hero Card / Executive Overview */}
        <div className={`casestudy-hero-card ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}>
          <div className="casestudy-hero-grid">
            <div className="casestudy-hero-content">
              <span className="casestudy-domain-tag">🏭 INDUSTRIAL AUTOMATION & SOFTWARE</span>
              <h3 className="casestudy-hero-title">
                Eliminating Color Variance on the Factory Floor
              </h3>
              <p className="casestudy-hero-desc">{caseStudyData.overview}</p>

              {/* Tech Stack Pills */}
              <div className="casestudy-stack-row">
                <span className="case-stack-pill">React</span>
                <span className="case-stack-pill">Spring Boot</span>
                <span className="case-stack-pill">Java</span>
                <span className="case-stack-pill">PostgreSQL</span>
                <span className="case-stack-pill">CIELAB ΔE</span>
                <span className="case-stack-pill">Docker</span>
              </div>
            </div>

            <div className="casestudy-hero-media">
              <div className="casestudy-image-frame">
                <img
                  src={sampleImg}
                  alt="Textile Colour Detector System Architecture & UI"
                  className="casestudy-preview-img"
                  loading="lazy"
                />
                <div className="casestudy-image-overlay">
                  <span className="casestudy-live-tag">
                    <span className="casestudy-pulse-dot" /> Live Color Matching Engine
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics / Impact Bar */}
          <div className="casestudy-metrics-grid">
            {caseStudyData.stats.map((stat, idx) => (
              <div key={idx} className="casestudy-metric-item">
                <span className="casestudy-metric-val">{stat.value}</span>
                <span className="casestudy-metric-lbl">{stat.label}</span>
                <span className="casestudy-metric-sub">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stage Filter Navigation */}
        <div className="casestudy-filter-bar">
          <button
            type="button"
            className={`case-filter-btn ${activeTab === 'all' ? 'case-filter-btn--active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All 6 Stages
          </button>
          {caseStudyData.stages.map((stage) => (
            <button
              key={stage.id}
              type="button"
              className={`case-filter-btn ${activeTab === stage.id ? 'case-filter-btn--active' : ''}`}
              onClick={() => setActiveTab(stage.id)}
            >
              {stage.number}. {stage.title}
            </button>
          ))}
        </div>

        {/* 6 Structured Stages Grid */}
        <div className="casestudy-stages-grid">
          {visibleStages.map((stage, index) => (
            <article
              key={stage.id}
              className={`casestudy-stage-card casestudy-stage-card--${stage.id} ${
                isVisible ? 'casestudy-card--visible' : ''
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="stage-card-header">
                <span className="stage-number">{stage.number}</span>
                <div className="stage-title-wrap">
                  <h4 className="stage-title">{stage.title}</h4>
                  <span className="stage-tagline">{stage.tagline}</span>
                </div>
              </div>

              <p className="stage-content-text">{stage.content}</p>

              <div className="stage-keypoints">
                <span className="stage-keypoints-title">Key Highlights:</span>
                <ul className="stage-points-list">
                  {stage.points.map((point, pIdx) => (
                    <li key={pIdx} className="stage-point-item">
                      <span className="stage-check-icon">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

