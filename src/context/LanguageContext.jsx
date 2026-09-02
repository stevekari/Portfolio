import { createContext, useContext, useState, useEffect } from 'react';
import { LANGUAGES, translations } from '../lang/translations';

const LanguageContext = createContext();

const STORAGE_KEY = 'portfolio_language';

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && translations[saved]) {
        return saved;
      }
      // Check browser language
      const browserLang = navigator.language?.slice(0, 2)?.toLowerCase();
      if (browserLang && translations[browserLang]) {
        return browserLang;
      }
    } catch {
      // ignore
    }
    return 'en';
  });

  const setLanguage = (newLang) => {
    if (translations[newLang]) {
      setLanguageState(newLang);
      try {
        localStorage.setItem(STORAGE_KEY, newLang);
      } catch {
        // ignore
      }
    }
  };

  // Update HTML lang attribute whenever language changes
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const currentTranslation = translations[language] || translations.en;
  const currentLanguageObj =
    LANGUAGES.find((item) => item.code === language) || LANGUAGES[0];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: currentTranslation,
        currentLanguage: currentLanguageObj,
        languages: LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

