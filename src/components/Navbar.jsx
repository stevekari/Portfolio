import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';
import logo from '../assets/ste.png';
import resumePdf from '../resume/Resume.pdf';

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.engineering || 'Engineering', href: '#engineering' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.blog, href: '#blog' },
    { name: t.nav.reviews || 'Reviews', href: '#reviews' },
    { name: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on window resize if larger than tablet breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-badge">
            <img src={logo} alt="Stephen Karikari" />
          </span>
          <span className="logo-text">Stephen Karikari</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-nav-desktop" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-right">
          <LanguageSelector />
          <ThemeToggle />

          {/* Desktop Resume Download Button */}
          <a
            href={resumePdf}
            download="Stephen_Karikari_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-resume-btn"
            title={t.nav.resume || 'Resume'}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>{t.nav.resume || 'Resume'}</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="navbar-toggle"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg
                className="toggle-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                className="toggle-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <nav
        className={`navbar-mobile ${isMenuOpen ? 'navbar-mobile--open' : ''}`}
        aria-label="Mobile Navigation"
      >
        <ul className="navbar-mobile-list">
          {navLinks.map((link) => (
            <li key={link.href} className="navbar-mobile-item">
              <a
                href={link.href}
                className="navbar-mobile-link"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="navbar-mobile-item navbar-mobile-resume">
            <a
              href={resumePdf}
              download="Stephen_Karikari_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-mobile-link navbar-mobile-resume-link"
              onClick={closeMenu}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>{t.nav.resume || 'Resume'} (PDF)</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
