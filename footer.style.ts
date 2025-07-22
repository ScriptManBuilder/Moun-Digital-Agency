import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px;
  background: #f7f7f7; /* Светлый фон */
  color: #333; /* Цвет текста */
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  width: 100%;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1); /* Тень сверху */
  position: relative; /* Убираем абсолютное позиционирование */
  justify-content: space-between;
  max-width: 100%; /* Предотвращаем выход за границы */
  overflow-x: hidden; /* Предотвращаем горизонтальную прокрутку */
  box-sizing: border-box; /* Учитываем padding в общей ширине */

  @media (min-width: 1440px) {
    /* Laptop L */
    padding: 25px;
    font-size: 1.1rem;
  }

  @media (max-width: 1024px) {
    /* Laptop */
    padding: 18px;
  }

  @media (max-width: 768px) {
    /* Tablet */
    padding: 12px;
    font-size: 0.85rem; /* Уменьшаем размер шрифта для планшетов и телефонов */
    flex-wrap: wrap; /* Позволяем перенос элементов */
    justify-content: space-around; /* Равномерное распределение элементов */
    gap: 8px; /* Увеличиваем расстояние между элементами */
  }

  @media (max-width: 425px) {
    /* Mobile L */
    padding: 10px;
    font-size: 0.8rem; /* Ещё меньше для маленьких телефонов */
    flex-wrap: wrap;
    justify-content: center; /* Центрируем элементы */
    gap: 6px; /* Уменьшаем расстояние между элементами */
  }

  @media (max-width: 375px) {
    /* Mobile M */
    padding: 8px; /* Уменьшаем отступы */
    font-size: 0.7rem; /* Ещё меньше размер шрифта */
    flex-wrap: wrap; /* Позволяем перенос элементов */
    justify-content: center; /* Центрируем элементы */
    gap: 4px; /* Уменьшаем расстояние между элементами */

    img {
      width: 20px; /* Уменьшаем размер иконок */
      height: 20px;
    }
  }

  @media (max-width: 320px) {
    /* Mobile S */
    padding: 6px; /* Ещё меньше отступы для самых узких экранов */
    font-size: 0.65rem; /* Минимальный размер шрифта */
    flex-wrap: wrap;
    justify-content: center;
    gap: 3px; /* Минимальное расстояние между элементами */

    img {
      width: 18px; /* Ещё меньше размер иконок */
      height: 18px;
    }
  }

  .icon {
    width: 40px;
    height: 40px;
    margin: 5px;
  }

  .text {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    .icon {
      width: 35px; /* Уменьшаем размер иконок для планшетов */
      height: 35px;
      margin: 4px;
    }

    .text {
      font-size: 0.9rem; /* Уменьшаем размер шрифта для планшетов */
    }
  }

  @media (max-width: 425px) {
    flex-direction: column; /* Переносим содержимое в столбик */
    .icon {
      width: 30px; /* Уменьшаем размер иконок для маленьких экранов */
      height: 30px;
      margin: 3px;
    }

    .text {
      font-size: 0.8rem; /* Уменьшаем размер шрифта для маленьких экранов */
    }

    .telegram-button {
      margin-top: 10px; /* Добавляем отступ сверху */
      align-self: center; /* Центрируем кнопку телеграм */
    }
  }
`;

export const FooterTitle = styled.div`
  font-size: 1.4rem; /* Увеличен размер текста */
  font-weight: 700; /* Более жирный текст */
  letter-spacing: 0.1em; /* Увеличено расстояние между буквами */
  font-family: "Poppins", sans-serif; /* Новый современный шрифт */
  color: #18181b; /* Чёрный цвет текста */

  @media (min-width: 1440px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    letter-spacing: 0.08em;
  }

  @media (max-width: 425px) {
    font-size: 1.1rem;
    letter-spacing: 0.06em;
  }

  @media (max-width: 375px) {
    font-size: 1rem;
    letter-spacing: 0.04em;
  }

  @media (max-width: 320px) {
    font-size: 0.9rem;
    letter-spacing: 0.03em;
  }
`;
export const FooterIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  right: 30px; /* Смещение влево на 30px */

  @media (min-width: 1440px) {
    gap: 25px;
    right: 40px; /* На больших экранах смещаем сильнее */
  }

  @media (max-width: 768px) {
    gap: 16px;
    right: 20px; /* На планшетах смещаем меньше */
  }

  @media (max-width: 425px) {
    gap: 14px;
    right: 15px; /* На мобильных смещаем еще меньше */
  }

  @media (max-width: 320px) {
    gap: 10px;
    right: 10px; /* На самых маленьких экранах минимальное смещение */
  }
`;

export const FooterIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px; /* Размер круга */
  height: 48px; /* Размер круга */
  background: #e0e0e0; /* Светло-серый фон */
  color: #000; /* Цвет иконки */
  border-radius: 50%; /* Делает фон круглым */
  font-size: 1.8rem;
  transition: background 0.3s ease, color 0.3s ease; /* Плавный переход цвета и фона */

  &:hover {
    background: #e6ff00; /* Основной акцентный цвет сайта */
    color: #000; /* Цвет иконки при наведении */
    scale: 1.1; /* Увеличение размера при наведении */
  }

  @media (min-width: 1440px) {
    width: 52px;
    height: 52px;
    font-size: 2rem;
  }

  @media (max-width: 1024px) {
    width: 45px;
    height: 45px;
    font-size: 1.7rem;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }

  @media (max-width: 425px) {
    width: 36px;
    height: 36px;
    font-size: 1.4rem;
  }

  @media (max-width: 375px) {
    width: 32px;
    height: 32px;
    font-size: 1.3rem;
  }

  @media (max-width: 320px) {
    width: 28px;
    height: 28px;
    font-size: 1.2rem;
  }
`;