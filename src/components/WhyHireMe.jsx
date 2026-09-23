import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './WhyHireMe.css';
import resumePdf from '../resume/Resume.pdf';

export default function WhyHireMe() {
  const { t } = useLanguage();

  const advantages = [
    {
      icon: '🏭',
      title: 'Real Manufacturing Experience',
      desc: 'Years of direct factory-floor experience solving production line downtime, scrap waste, and color consistency challenges.',
      highlight: 'Factory-Floor Proven',
    },
    {
      icon: '⚙️',
      title: 'Deep Process Understanding',
      desc: 'Intuitive grasp of industrial workflows, batch tracking, yield optimization, and shift operator constraints in noisy environments.',
      highlight: 'Operational Insight',
    },
    {
      icon: '💡',
      title: 'Practical Problem-Solving Mindset',
      desc: 'I build software tailored to eliminate real bottlenecks and reduce operational costs rather than disconnected theoretical demo apps.',
      highlight: 'Business Value Focused',
    },
    {
      icon: '💻',
      title: 'End-to-End Full-Stack Skills',
      desc: 'Proficient in building clean React & Angular frontends, scalable Java & Spring Boot REST APIs, and Flutter mobile applications.',
      highlight: 'React • Spring Boot • Flutter',
    },
    {
      icon: '📡',
      title: 'Industrial Automation & Sensors',
      desc: 'Strong passion for IoT telemetry, live production metrics dashboards, image processing algorithms, and automated quality control.',
      highlight: 'IoT • Vision • Telemetry',
    },
  ];

  const targetIndustries = [
    { icon: '🏭', label: 'Manufacturing Software' },
    { icon: '📊', label: 'ERP & Shop-Floor Systems' },
    { icon: '🎛️', label: 'Industrial Dashboards' },
    { icon: '📡', label: 'IoT Platforms' },
    { icon: '👁️', label: 'AI Vision & QC Systems' },
  ];

  return (
    <section id="why-hire-me" className="section why-hire-section">
      <div className="container">
        {/* Section Header */}
        <div className="why-hire-header">
          <div className="why-hire-badge">
            <span className="why-hire-badge-icon">⭐</span>
            <span>COMPETITIVE ADVANTAGE</span>
          </div>
          <h2 className="section-title">Why Hire Me?</h2>
          <p className="section-subtitle">
            Most junior developers have only coding knowledge. I bring hands-on industrial
            manufacturing experience combined with modern full-stack software engineering.
          </p>
        </div>

        {/* Hero Value Statement Banner */}
        <div className="value-proposition-banner">
          <div className="value-banner-content">
            <span className="value-banner-quote">“</span>
            <p className="value-banner-statement">
              I help manufacturing companies reduce waste and improve efficiency through software solutions.
            </p>
            <div className="value-banner-footer">
              <span className="value-banner-author">Stephen Karikari</span>
              <span className="value-banner-role">Full-Stack Developer • Manufacturing Domain Specialist</span>
            </div>
          </div>
          <div className="value-banner-actions">
            <a href="#contact" className="btn btn-primary value-cta-btn">
              <span>Discuss an Opportunity</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href={resumePdf}
              download="Stephen_Karikari_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary value-cv-btn"
            >
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* 5 Advantages Grid */}
        <div className="advantages-grid">
          {advantages.map((adv, idx) => (
            <div key={idx} className="advantage-card">
              <div className="advantage-header">
                <span className="advantage-icon" aria-hidden="true">
                  {adv.icon}
                </span>
                <span className="advantage-highlight">{adv.highlight}</span>
              </div>
              <h3 className="advantage-title">{adv.title}</h3>
              <p className="advantage-desc">{adv.desc}</p>
            </div>
          ))}
        </div>

        {/* Ideal Industry Fit Box */}
        <div className="ideal-fit-card">
          <div className="ideal-fit-left">
            <h3 className="ideal-fit-title">Companies Developing:</h3>
            <p className="ideal-fit-desc">
              My rare background in manufacturing operations + full-stack development makes me an
              immediate asset for teams building:
            </p>
          </div>
          <div className="ideal-fit-tags">
            {targetIndustries.map((ind, idx) => (
              <span key={idx} className="industry-pill">
                <span className="industry-icon">{ind.icon}</span>
                <span>{ind.label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

