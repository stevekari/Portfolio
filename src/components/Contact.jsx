import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';
import { useLanguage } from '../context/LanguageContext';
import resumePdf from '../resume/Resume.pdf';

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

export default function Contact() {
  const { t } = useLanguage();
  const [headerRef, headerVis] = useReveal();
  const [cardsRef, cardsVis] = useReveal();
  const [infoRef, infoVis] = useReveal();
  const [formRef, formVis] = useReveal();

  const [copiedEmail, setCopiedEmail] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('stephenkarikari76@email.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('Contact form submitted:', formData);

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`contact-header ${headerVis ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <div className="contact-badge">
            <span className="contact-badge-dot" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="section-title">{t.contact?.title || 'Get In Touch'}</h2>
          <p className="section-subtitle">
            {t.contact?.subtitle ||
              'Open to full-stack, frontend, and backend engineering roles. Reach out directly or send a message below.'}
          </p>
        </div>

        {/* Direct Recruiter Action Cards (Immediate Hire Options) */}
        <div
          ref={cardsRef}
          className={`recruiter-actions-grid ${cardsVis ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          {/* 1. Email (Mailto + Copy) */}
          <div className="recruiter-card recruiter-card--email">
            <div className="recruiter-card-header">
              <div className="recruiter-card-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <span className="recruiter-card-tag">DIRECT EMAIL</span>
            </div>
            <h3 className="recruiter-card-title">stephenkarikari76@email.com</h3>
            <p className="recruiter-card-desc">Fastest response for interview requests and inquiries.</p>
            <div className="recruiter-btn-group">
              <a
                href="mailto:stephenkarikari76@email.com"
                className="btn btn-primary recruiter-btn"
              >
                <span>Send Email</span>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn btn-secondary recruiter-btn recruiter-btn--copy"
                aria-label="Copy email address"
              >
                <span>{copiedEmail ? 'Copied! ✓' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* 2. LinkedIn */}
          <div className="recruiter-card recruiter-card--linkedin">
            <div className="recruiter-card-header">
              <div className="recruiter-card-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <span className="recruiter-card-tag">PROFESSIONAL NETWORK</span>
            </div>
            <h3 className="recruiter-card-title">LinkedIn Profile</h3>
            <p className="recruiter-card-desc">Connect directly for message exchanges and career history.</p>
            <a
              href="https://www.linkedin.com/in/stephen-karikari/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary recruiter-btn recruiter-btn--full"
            >
              <span>View LinkedIn</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>

          {/* 3. GitHub */}
          <div className="recruiter-card recruiter-card--github">
            <div className="recruiter-card-header">
              <div className="recruiter-card-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
              <span className="recruiter-card-tag">CODE & REPOS</span>
            </div>
            <h3 className="recruiter-card-title">GitHub Portfolio</h3>
            <p className="recruiter-card-desc">Inspect repository code, architecture commits, and builds.</p>
            <a
              href="https://github.com/stevekari"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary recruiter-btn recruiter-btn--full"
            >
              <span>Explore GitHub</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>

          {/* 4. Download CV */}
          <div className="recruiter-card recruiter-card--cv">
            <div className="recruiter-card-header">
              <div className="recruiter-card-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </div>
              <span className="recruiter-card-tag">PDF RESUME</span>
            </div>
            <h3 className="recruiter-card-title">Full Curriculum Vitae</h3>
            <p className="recruiter-card-desc">Complete overview of technical stacks, background, and history.</p>
            <a
              href={resumePdf}
              download="Stephen_Karikari_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary recruiter-btn recruiter-btn--full"
            >
              <span>Download CV</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Secondary: Detailed Form & Information */}
        <div className="contact-grid">
          {/* Left Column: Contact Information */}
          <div
            ref={infoRef}
            className={`contact-info ${infoVis ? 'reveal-visible' : 'reveal-left'}`}
          >
            <h3 className="contact-info-title">{t.contact?.infoTitle || 'Direct Message'}</h3>
            <p className="contact-info-desc">
              {t.contact?.infoDesc ||
                'Prefer to leave a message right here? Fill out the form and I will get back to you within 24 hours.'}
            </p>

            <div className="contact-list">
              {/* Location */}
              <div className="contact-item contact-item-static">
                <div className="contact-icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="contact-icon"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="contact-item-details">
                  <span className="contact-item-label">{t.contact?.locationLabel || 'LOCATION & AVAILABILITY'}</span>
                  <span className="contact-item-value">{t.contact?.locationValue || 'Open to Remote & On-site'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            ref={formRef}
            className={`contact-form-wrapper ${formVis ? 'reveal-visible' : 'reveal-right'}`}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              {isSubmitted && (
                <div className="contact-alert-success" role="alert">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>{t.contact?.form?.successAlert || 'Thank you! Your message has been sent successfully.'}</span>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  {t.contact?.form?.name || 'Your Name'}
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.contact?.form?.namePlaceholder || 'e.g. Alex Morgan'}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  {t.contact?.form?.email || 'Email Address'}
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.contact?.form?.emailPlaceholder || 'alex@company.com'}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  {t.contact?.form?.subject || 'Subject'}
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t.contact?.form?.subjectPlaceholder || 'Opportunity / Project Inquiry'}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  {t.contact?.form?.message || 'Message'}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact?.form?.messagePlaceholder || 'Tell me about your team, project, or role...'}
                  required
                  className="form-input form-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary contact-submit-btn"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>{t.contact?.form?.send || 'Send Message'}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="btn-icon"
                      aria-hidden="true"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
