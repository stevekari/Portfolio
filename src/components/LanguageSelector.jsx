import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './LanguageSelector.css';

export default function LanguageSelector() {
  const { language, setLanguage, languages, currentLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSelect = (code) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="language-selector" ref={dropdownRef}>
      <button
        type="button"
        className={`lang-btn ${isOpen ? 'lang-btn--active' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={`Select language. Current: ${currentLanguage.label}`}
      >
        <span className="lang-flag" aria-hidden="true">
          {currentLanguage.flag}
        </span>
        <span className="lang-code">{currentLanguage.code.toUpperCase()}</span>
        <svg
          className={`lang-chevron ${isOpen ? 'lang-chevron--open' : ''}`}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <ul className="lang-dropdown" role="menu" aria-label="Language options">
          {languages.map((item) => (
            <li key={item.code} role="none">
              <button
                type="button"
                className={`lang-option ${language === item.code ? 'lang-option--selected' : ''}`}
                onClick={() => handleSelect(item.code)}
                role="menuitem"
              >
                <span className="lang-option-flag" aria-hidden="true">
                  {item.flag}
                </span>
                <span className="lang-option-label">{item.label}</span>
                <span className="lang-option-code">{item.code.toUpperCase()}</span>
                {language === item.code && (
                  <svg
                    className="lang-check"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

