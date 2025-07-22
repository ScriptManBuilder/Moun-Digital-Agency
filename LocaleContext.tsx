import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { LOCALES, LocaleContent, getLocaleContent } from './localization';

interface LocaleContextType {
  currentLocale: LOCALES;
  localeContent: LocaleContent | null;
  isLoading: boolean;
  setLocale: (locale: LOCALES) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface LocaleProviderProps {
  children: ReactNode;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ children }) => {
  const [currentLocale, setCurrentLocale] = useState<LOCALES>(() => {
    // Загружаем сохраненный язык из localStorage или используем украинский по умолчанию
    const savedLocale = localStorage.getItem('locale');
    return (savedLocale as LOCALES) || LOCALES.UKRAINIAN;
  });
  
  const [localeContent, setLocaleContent] = useState<LocaleContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const setLocale = async (locale: LOCALES) => {
    setIsLoading(true);
    setCurrentLocale(locale);
    localStorage.setItem('locale', locale);
    
    const content = await getLocaleContent(locale);
    setLocaleContent(content);
    setIsLoading(false);
  };

  useEffect(() => {
    const loadInitialContent = async () => {
      setIsLoading(true);
      const content = await getLocaleContent(currentLocale);
      setLocaleContent(content);
      setIsLoading(false);
    };

    loadInitialContent();
  }, []);

  return (
    <LocaleContext.Provider
      value={{
        currentLocale,
        localeContent,
        isLoading,
        setLocale,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};
