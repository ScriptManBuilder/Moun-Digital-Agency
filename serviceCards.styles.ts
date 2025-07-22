import styled from "styled-components";

// Toggle switch component that reacts to button hover
export const ToggleSwitch = styled.div<{ isOn?: boolean; isButtonHovered?: boolean }>`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 40px;
  height: 20px;
  background: ${props => {
    if (props.isButtonHovered) return 'linear-gradient(to right, #4CAF50, #2E7D32)';
    return props.isOn ? 'linear-gradient(to right, #000000, #333333)' : '#e0e0e0';
  }};
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 2px;
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
  justify-content: ${props => (props.isButtonHovered || props.isOn) ? 'flex-end' : 'flex-start'};
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 2;
  
  &::before {
    content: '';
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    transition: all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
    transform: ${props => (props.isButtonHovered || props.isOn) ? 'scale(1.1)' : 'scale(1)'};
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    opacity: 0;
    transition: opacity 0.4s ease;
    background: ${props => props.isButtonHovered ? 
      'radial-gradient(circle at center, rgba(76, 175, 80, 0.2) 0%, rgba(0, 0, 0, 0) 70%)' : 
      'none'};
    opacity: ${props => props.isButtonHovered ? 1 : 0};
    pointer-events: none;
  }
  
  &:hover::before {
    transform: ${props => (props.isButtonHovered || props.isOn) ? 'scale(1.15)' : 'scale(1.05)'};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    transition: all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
  }
  
  @media (max-width: 767px) {
    width: 36px;
    height: 18px;
    
    &::before {
      width: 14px;
      height: 14px;
    }
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  position: relative;
  z-index: 0;
  margin-top: 15px;
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }
  
  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  /* All mobile devices */
  @media (max-width: 767px) {
    grid-template-columns: 1fr; /* Single column taking full available width */
    gap: 25px;
    padding: 15px;
  }
`;

interface CardWrapperProps {
  backgroundColor: string;
  isButtonHovered?: boolean;
  isSpecialCard?: boolean;
}

export const CardWrapper = styled.div<CardWrapperProps>`
  position: relative;
  width: 100%;
  height: 380px;
  padding: 20px 18px;
  background: ${props => {
    if (props.isButtonHovered) {
      // Для специальной карточки (черной) используем более темный градиент при наведении
      if (props.isSpecialCard) {
        return 'linear-gradient(135deg, #23272f, #2c3440)';
      }
      // Для обычных карточек оставляем светлый градиент
      return `linear-gradient(135deg, ${props.backgroundColor || "#F0F4F8"}, #E8F5E9)`;
    }
    // Обычное состояние без наведения
    return `linear-gradient(to bottom, ${props.backgroundColor || "#F9FAFB"}, ${props.backgroundColor ? props.backgroundColor + 'f8' : "#F1F5F9"})`;
  }};
  border-radius: 16px;
  box-shadow: ${props => props.isButtonHovered 
    ? '0 8px 30px rgba(0, 0, 0, 0.12), 0 2px 10px rgba(76, 175, 80, 0.2)' 
    : '0 4px 20px rgba(0, 0, 0, 0.08)'};
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;
  border: 1px solid ${props => props.isButtonHovered ? 'rgba(76, 175, 80, 0.3)' : 'rgba(0, 0, 0, 0.06)'};
  box-sizing: border-box;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }
  
  @media (min-width: 1024px) {
    min-width: 250px;
  }
  
  @media (min-width: 768px) and (max-width: 1023px) {
    min-width: 220px;
  }
  
  @media (max-width: 767px) {
    width: 100%;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CardTitle = styled.h3<{ isSpecialCard?: boolean }>`
  font-size: clamp(20px, 5vw, 24px);
  font-weight: 700;
  font-family: 'EuclidMedium', sans-serif;
  color: ${props => props.isSpecialCard ? '#ffffff' : '#000000'};
  margin-top: 25px;
  margin-bottom: 14px;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  text-align: left;
  width: 100%;
  min-height: 50px;
  height: auto;
  max-height: 60px;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  
  @media (max-width: 1023px) {
    font-size: 22px;
  }
  
  @media (max-width: 767px) {
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;



export const CardDescription = styled.p<{ isSpecialCard?: boolean }>`
  font-size: 0.95rem;
  font-weight: 500;
  font-family: 'EuclidRegular', sans-serif;
  color: ${props => props.isSpecialCard ? '#ffffff' : '#000000'};
  margin-bottom: 15px;
  line-height: 1.4;
  letter-spacing: 0.01em;
  padding: 0;
  text-align: left;
  width: 100%;
  min-height: 90px;
  height: auto;
  max-height: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  
  @media (max-width: 1023px) {
    font-size: 0.9rem;
    line-height: 1.35;
    min-height: 80px;
    -webkit-line-clamp: 5;
    margin-bottom: 10px;
  }
  
  @media (max-width: 767px) {
    font-size: 0.85rem;
    min-height: 70px;
    margin-bottom: 10px;
  }
`;

export const CardPrice = styled.span`
  margin-bottom: 15px;
  height: auto;
  min-height: 30px;
  display: flex;
  align-items: center;
  padding: 5px 8px;
  border-radius: 4px;
  width: fit-content;
  flex-wrap: wrap;
  
  @media (max-width: 767px) {
    margin-bottom: 10px;
    padding: 4px 6px;
  }
`;

export const PricePrefix = styled.span<{ isSpecialCard?: boolean }>`
  font-size: clamp(1rem, 3vw, 1.35rem);
  font-weight: 400;
  font-family: 'EuclidRegular', 'Inter', sans-serif;
  color: ${props => props.isSpecialCard ? '#ffffff' : 'rgb(16, 19, 16)'};
  margin-right: 0px;
  letter-spacing: 0.05px;
  opacity: 0.85;
  background: transparent;
  padding: 0;
  line-height: 1.2;
  vertical-align: middle;
  margin-top: 0;
  
  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

export const PriceValue = styled.span<{ isSpecialCard?: boolean }>`
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  font-weight: 500;
  font-family: 'EuclidRegular', 'Inter', 'Poppins', sans-serif;
  color: ${props => props.isSpecialCard ? '#ffffff' : 'rgb(11, 11, 12)'};
  padding: 2px 12px 2px 12px;
  margin-left: 0px;
  display: inline-block;
  line-height: 1.1;
  letter-spacing: 0.5px;
  vertical-align: middle;
  text-decoration: none;
  margin-top: 0;
  
  @media (max-width: 767px) {
    font-size: 1.75rem;
    padding: 2px 8px 2px 8px;
  }
`;

// Модифицированный стиль для перечеркнутой оригинальной цены
export const PriceValueWithDiscount = styled.span`
  font-size: 1.75rem; // Меньший размер для перечеркнутой цены
  font-weight: 400; // Более легкий вес шрифта
  font-family: 'EuclidRegular', 'Inter', 'Poppins', sans-serif;
  color: #e53935; /* Красный цвет для перечеркнутой цены */
  padding: 2px 4px 2px 12px;
  margin-left: 0px;
  display: inline-block;
  line-height: 1.1;
  letter-spacing: 0.5px;
  vertical-align: middle;
  text-decoration: line-through; /* Зачеркнутая цена */
  margin-top: 30px;
  opacity: 0.85; // Небольшая прозрачность для меньшего акцента
`;

// Новый стиль для цены со скидкой
export const PriceValueDiscount = styled.span`
  font-size: 2.25rem;
  font-weight: 600; // Более жирный шрифт для акцента
  font-family: 'EuclidRegular', 'Inter', 'Poppins', sans-serif;
  color: #43a047; /* Зеленый цвет для выделения скидки */
  padding: 2px 12px 2px 4px;
  margin-left: 8px; // Отступ от перечеркнутой цены
  display: inline-block;
  line-height: 1.1;
  letter-spacing: 0.5px;
  vertical-align: middle;
  margin-top: 30px;
`;

export const CardButton = styled.button<{ isSpecialCard?: boolean }>`
  padding: 12px 24px;
  background: ${props => props.isSpecialCard ? '#ffffff' : '#1F2937'};
  color: ${props => props.isSpecialCard ? '#23272f' : '#fff'};
  border: 2px solid ${props => props.isSpecialCard ? '#ffffff' : '#23272f'};
  border-radius: 20px;
  cursor: pointer;
  font-size: clamp(0.85rem, 2vw, 0.9rem);
  font-weight: 1000;
  font-family: 'Inter', 'Work Sans', sans-serif;
  transition: all 0.3s ease;
  margin-top: auto;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;

  &:hover {
    background: #d4fc79;
    color: #23272f;
    box-shadow: 0 4px 16px rgba(224, 252, 55, 0.3);
    border-color: #23272f;
  }
  
  @media (max-width: 767px) {
    padding: 10px 20px;
    margin-top: 5px;
  }
`;