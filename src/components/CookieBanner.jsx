import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './CookieBanner.css';

const COOKIE_STORAGE_KEY = 'cookie_consent';

export default function CookieBanner() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (!consent) {
        // Subtle delay for smooth entrance after page loads
        const timer = setTimeout(() => setIsVisible(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleConsent = (status) => {
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, status);
    } catch {
      // ignore
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      className="cookie-banner"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent banner"
    >
      <div className="cookie-banner-content">
        <div className="cookie-icon-wrapper" aria-hidden="true">
          <svg
            className="cookie-icon"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <path d="M8.5 8.5v.01" />
            <path d="M16 15.5v.01" />
            <path d="M12 12v.01" />
            <path d="M11 17v.01" />
            <path d="M7 13v.01" />
          </svg>
        </div>

        <div className="cookie-text-content">
          <h4 className="cookie-title">{t.cookies?.title || 'We use cookies'}</h4>
          <p className="cookie-desc">
            {t.cookies?.description ||
              'We use essential cookies and local storage to remember your theme and language preferences.'}
          </p>
        </div>

        <div className="cookie-actions">
          <button
            type="button"
            className="cookie-btn cookie-btn-decline"
            onClick={() => handleConsent('declined')}
          >
            {t.cookies?.decline || 'Decline'}
          </button>
          <button
            type="button"
            className="cookie-btn cookie-btn-accept"
            onClick={() => handleConsent('accepted')}
          >
            {t.cookies?.accept || 'Accept All'}
          </button>
        </div>
      </div>
    </aside>
  );
}

