import React, { useEffect, useState } from 'react';
import LanguageSwitcher from './lanquageButton';
import ContactButton from "./contactButton";
import { useLocale } from '../LocaleContext';
import {
  HeaderWrapper,
  HeaderTitle,
  MainTitle,
  SubTitle,
  HeaderActions,
  HeaderContainer
} from '../assets/styles/header.style';

const Header = () => {
  const { localeContent } = useLocale();
  const [isVisible, setIsVisible] = useState(true); // Изначально хедер виден
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Предотвращаем частые вызовы функции
      if (window.scrollY < lastScrollY - 5) {
        // Скроллим вверх (с небольшим порогом для исключения микропрокруток)
        setIsVisible(true);
      } else if (window.scrollY > lastScrollY + 5 && window.scrollY > 100) { 
        // Скроллим вниз (с порогом)
        setIsVisible(false);
      }
      setLastScrollY(window.scrollY);
    };
    
    // Используем requestAnimationFrame для более плавного отслеживания скролла
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [lastScrollY]);

  return (
    <>
      <HeaderContainer /> {/* Контейнер для отступа */}
      <HeaderWrapper className={isVisible ? "visible" : ""}>
        <HeaderTitle>
          <MainTitle>{localeContent?.header.logo || "MOUN"}</MainTitle>
          <SubTitle>{localeContent?.header.subtitle || "DIGITAL AGENCY"}</SubTitle>
        </HeaderTitle>
        <HeaderActions>
          <LanguageSwitcher />
          <ContactButton />
        </HeaderActions>
      </HeaderWrapper>
    </>
  );
};

export default Header;