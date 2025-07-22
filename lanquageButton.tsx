import React, { useState } from "react";
import {
  LanguageSwitcherWrapper,
  LanguageSwitcherButton,
  LanguageSwitcherDropdown,
  LanguageSwitcherItem,
} from "../assets/styles/lanquageButton.style";
import { useLocale } from '../LocaleContext';
import { LOCALES } from '../localization';

const LanguageSwitcher: React.FC = () => {
  const { currentLocale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);

  // Соответствие языков для отображения
  const languageLabels = {
    [LOCALES.UKRAINIAN]: "UA",
    [LOCALES.ENGLISH]: "EN", 
    [LOCALES.RUSSIAN]: "RU"
  };

  const languages = [LOCALES.UKRAINIAN, LOCALES.ENGLISH, LOCALES.RUSSIAN];

  return (
    <LanguageSwitcherWrapper>
      <LanguageSwitcherButton onClick={() => setOpen((o) => !o)}>
        {languageLabels[currentLocale]}
      </LanguageSwitcherButton>
      {open && (
        <LanguageSwitcherDropdown>
          {languages.map((lang) => (
            <LanguageSwitcherItem
              key={lang}
              selected={currentLocale === lang}
              onClick={() => {
                setLocale(lang);
                setOpen(false);
              }}
            >
              {languageLabels[lang]}
            </LanguageSwitcherItem>
          ))}
        </LanguageSwitcherDropdown>
      )}
    </LanguageSwitcherWrapper>
  );
};

export default LanguageSwitcher;