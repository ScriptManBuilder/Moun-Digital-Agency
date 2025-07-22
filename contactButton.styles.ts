import styled from "styled-components";

export const ContactButton = styled.button`
  display: inline-block;
  padding: 16px 40px;
  background: #23272f; /* Исходный цвет кнопки */
  color: #fff; /* Белый текст */
  border: 2px solid #23272f; /* Граница цвета начального фона */
  border-radius: 32px;
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
  transition: background 0.8s ease, color 2s ease; /* Плавный переход цвета за 2 секунды */
  cursor: pointer;
  font-family: 'Inter', 'Montserrat', 'Roboto', sans-serif;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* Тёмная тень */

  &:hover {
    background: #d4fc79;
    color: #23272f; /* Цвет текста при наведении */
    box-shadow: 0 4px 16px rgba(224, 252, 55, 0.3); /* Более яркая тень */
    border-color: #23272f; /* Граница остаётся цвета начального фона */
  }
  
  /* Адаптивность для разных размеров экранов */
  @media (min-width: 1440px) {
    /* Laptop L */
    padding: 18px 45px;
    font-size: 22px;
    border-radius: 36px;
  }
  
  @media (max-width: 1024px) {
    /* Laptop */
    padding: 13px 30px;
    font-size: 16px;
  }
  
  @media (max-width: 768px) {
    /* Tablet */
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 26px;
  }
  
  @media (max-width: 425px) {
    /* Mobile L */
    padding: 10px 20px;
    font-size: 13px;
    border-radius: 22px;
  }
  
  @media (max-width: 375px) {
    /* Mobile M */
    padding: 8px 16px;
    font-size: 12px;
    border-width: 1.5px;
  }
  
  @media (max-width: 320px) {
    /* Mobile S */
    padding: 6px 12px;
    font-size: 11px;
    border-radius: 18px;
    border-width: 1.5px;
  }
`;