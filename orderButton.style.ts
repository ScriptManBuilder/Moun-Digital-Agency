import styled from "styled-components";

export const OrderButton = styled.button`
  display: inline-block;
  padding: 15px 40px;  /* Уменьшен горизонтальный padding для лучшего размещения текста в одну строку */
  background: #23272f; /* Исходный цвет кнопки */
  color: #fff; /* Белый текст */
  border: 2px solid #23272f; /* Граница цвета начального фона */
  border-radius: 32px;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  transition: background 0.8s ease, color 2s ease; /* Плавный переход цвета за 2 секунды */
  cursor: pointer;
  font-family: 'Inter', 'Montserrat', 'Roboto', sans-serif;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* Тёмная тень */
  white-space: nowrap; /* Предотвращает перенос текста на новую строку */
  text-align: center; /* Центрирование текста */
  min-width: 280px; /* Увеличена минимальная ширина для длинного текста */

  /* Laptop L (1440px+) */
  @media (min-width: 1440px) {
    padding: 18px 50px;
    font-size: 20px;
    border-radius: 36px;
    min-width: 300px;
  }
  
  /* Laptop (1024px-1439px) */
  @media (max-width: 1024px) {
    padding: 14px 45px;
    font-size: 17px;
    min-width: 260px;
  }
  
  /* Tablet (768px-1023px) */
  @media (max-width: 768px) {
    padding: 12px 40px;
    font-size: 16px;
    border-radius: 28px;
    min-width: 240px;
  }
  
  /* Mobile L (425px-767px) */
  @media (max-width: 425px) {
    padding: 10px 30px;
    font-size: 14px;
    border-radius: 24px;
    min-width: 220px;
  }
  
  /* Mobile M (375px-424px) */
  @media (max-width: 375px) {
    padding: 10px 25px;
    font-size: 13px;
    border-width: 1.5px;
    min-width: 200px;
  }
  
  /* Mobile S (320px-374px) */
  @media (max-width: 320px) {
    padding: 8px 20px;
    font-size: 12px;
    border-radius: 20px;
    border-width: 1.5px;
    min-width: 180px;
  }

  &:hover {
    background: #d4fc79; /* градиентный лайм (можно для градиентов) */
    color: #23272f; /* Цвет текста при наведении */
    box-shadow: 0 4px 16px rgba(224, 252, 55, 0.3); /* Более яркая тень */
    border-color: #23272f; /* Граница остаётся цвета начального фона */
  }
`;