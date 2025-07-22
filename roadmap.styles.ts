import styled from 'styled-components';

/* CSS variables for consistent aspect ratios and styling */
const cssVariables = {
  aspectRatios: {
    card: '3 / 1', /* Adjusted aspect ratio for even more rectangular cards */
    square: '1', 
    fourThree: '4 / 3',
    threeTwo: '3 / 2',
    sixteenNine: '16 / 9'
  },
  colors: {
    yellow: '#e6ff00',
    white: '#ffffff',
    cardBg: '#ffffff',
    textDark: '#222222',
    textLight: '#555555'
  },
  shadows: {
    card: '0px 2px 8px rgba(0, 0, 0, 0.04)',
    cardHover: '0px 4px 10px rgba(0, 0, 0, 0.06)',
    circle: '0 0 0 2px white, 0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  sizes: {
    cardWidth: '220px', /* Увеличенная ширина для более широких карточек */
    cardWidthDesktop: '230px', /* Увеличенная ширина для десктопа */
    cardPadding: '14px', /* Consistent padding for all cards */
    gridGap: '15px' /* Small, consistent gap between all cards */
  }
};

export const RoadmapContainer = styled.section`
  width: 100%;
  padding: 30px 10px;
  background: linear-gradient(135deg, #f9f9f9 0%, #ffffff 50%, #f5f5f5 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  
  /* Добавляем анимированные частицы на фоне */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 20% 80%, rgba(230, 255, 0, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(230, 255, 0, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(230, 255, 0, 0.03) 0%, transparent 50%);
    animation: float 20s ease-in-out infinite;
    z-index: 0;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-20px) rotate(1deg); }
    66% { transform: translateY(10px) rotate(-1deg); }
  }
  
  @media (max-width: 480px) {
    padding: 25px 8px;
  }
  
  @media (min-width: 576px) {
    padding: 35px 15px;
  }
  
  @media (min-width: 768px) {
    padding: 40px 20px;
  }
  
  @media (min-width: 1024px) {
    padding: 50px 25px;
  }
`;

export const RoadmapContent = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 480px) {
    padding: 0 10px;
    max-width: 100%;
  }
  
  @media (min-width: 576px) {
    max-width: 520px;
    padding: 0 8px;
  }
  
  @media (min-width: 768px) {
    max-width: 600px; /* Perfect width for six equal sized cards */
    padding: 0 15px;
  }
  
  @media (min-width: 992px) {
    max-width: 720px; /* Увеличенная ширина для более широких карточек */
    padding: 0 20px;
  }
  
  @media (min-width: 1200px) {
    max-width: 760px; /* Максимальная ширина для широких карточек */
  }
`;

export const RoadmapHeading = styled.div`
  text-align: center;
  margin-bottom: 20px;
  max-width: 800px;
  width: 100%;
  
  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
  
  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
  
  @media (min-width: 992px) {
    margin-bottom: 35px;
  }
`;

export const MainTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 3px;
  color: #222;
  position: relative;
  
  /* Убираем желтую подсветку - оставляем только обычную тень */
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  

  
  /* Убираем пульсирующую желтую полоску */
  /* &::before удален */
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 2px;
  }
  
  @media (min-width: 576px) {
    font-size: 1.6rem;
  }
  
  @media (min-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 5px;
  }
  
  @media (min-width: 992px) {
    font-size: 2.2rem;
    margin-bottom: 6px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  font-style: italic;
  margin-top: 0;
  margin-bottom: 30px; /* Увеличенный отступ снизу для единственного подзаголовка */
  color: #222;
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }
  
  @media (min-width: 576px) {
    font-size: 1.2rem;
    margin-bottom: 25px;
  }
  
  @media (min-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 25px;
  }
  
  @media (min-width: 992px) {
    font-size: 1.6rem;
    margin-bottom: 30px;
  }
`;

export const Description = styled.p`
  font-size: 0.8rem;
  color: #555;
  margin-bottom: 15px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
    margin-bottom: 12px;
  }
  
  @media (min-width: 576px) {
    font-size: 0.85rem;
    margin-bottom: 20px;
  }
  
  @media (min-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 25px;
  }
  
  @media (min-width: 992px) {
    font-size: 0.95rem;
  }
`;

export const StepsContainer = styled.div`
  /* ===============================================
   * LINEAR LAYOUT CONFIGURATION (135 top, 246 bottom)
   * ===============================================
   *
   * This container uses CSS Grid to create a linear layout with:
   * - Row 1: Steps 1, 3, 5 (первая, третья и пятая карточки)
   * - Row 2: Steps 2, 4, 6 (вторая, четвертая и шестая карточки)
   *
   * GRID STRUCTURE:
   * - Uses a 3-column grid with evenly spaced columns
   * - Two rows for clean organization of steps
   */
  width: 100%;
  position: relative;
  padding: 5px 0 15px;
  display: flex;
  flex-direction: column;
  gap: 15px; /* Gap for mobile cards */
  
  @media (max-width: 767px) {
    /* Mobile layout: vertical stack */
    padding: 10px 0;
    gap: 25px; /* Increased gap for mobile to prevent overlap */
    width: 90%;
  }
  
  @media (min-width: 768px) {
    /* Tablet/Desktop: grid layout for linear pattern */
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
    grid-template-rows: repeat(2, auto); /* 2 rows */
    gap: 45px 25px; /* Увеличенный отступ между рядами для номеров */
    justify-items: center;
    align-items: stretch; /* Make cards in each row the same height */
    position: relative;
  }
  
  /* Mobile layout styles */
  @media (max-width: 767px) {
    /* Removed vertical connecting line */
  }
`;

export const StepCard = styled.div`
  /* Card for each step in the roadmap - Glassmorphism design */
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: ${cssVariables.sizes.cardPadding};
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 2;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: auto;
  min-height: 130px;
  box-sizing: border-box;
  max-width: ${cssVariables.sizes.cardWidth};
  
  /* Добавляем внутреннее свечение */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(230, 255, 0, 0.08);
    border-radius: 12px;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: -1;
  }
  
  @media (max-width: 767px) {
    /* Mobile cards: glassmorphism стили */
    padding: 10px 12px;
    border-radius: 12px;
    min-height: 100px;
    max-width: 100%;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    
    /* Отступы для разных рядов */
    &.step-1, &.step-3, &.step-5 {
      margin-bottom: 15px; /* Отступ снизу для номера */
      padding-bottom: 20px;
    }
    
    &.step-2, &.step-4, &.step-6 {
      margin-top: 15px; /* Отступ сверху для номера */
      padding-top: 20px;
    }
  }
  
  @media (min-width: 576px) and (max-width: 767px) {
    /* Larger mobile/small tablet */
    padding: 12px 14px;
    border-radius: 12px;
  }
  
  @media (min-width: 768px) {
    padding: ${cssVariables.sizes.cardPadding};
    border-radius: 12px;
    width: 190px;
    margin: 0;
    
    /* Top row: Steps 1, 3, 5 */
    &:nth-of-type(1) { /* Step 1 */
      grid-column: 1;
      grid-row: 1;
      padding-bottom: 25px; /* Дополнительный отступ снизу для номера */
    }
    
    &:nth-of-type(3) { /* Step 3 */
      grid-column: 2;
      grid-row: 1;
      padding-bottom: 25px; /* Дополнительный отступ снизу для номера */
    }
    
    &:nth-of-type(5) { /* Step 5 */
      grid-column: 3;
      grid-row: 1;
      padding-bottom: 25px; /* Дополнительный отступ снизу для номера */
    }
    
    /* Bottom row: Steps 2, 4, 6 */
    &:nth-of-type(2) { /* Step 2 */
      grid-column: 1;
      grid-row: 2;
      padding-top: 25px; /* Дополнительный отступ сверху для номера */
    }
    
    &:nth-of-type(4) { /* Step 4 */
      grid-column: 2;
      grid-row: 2;
      padding-top: 25px; /* Дополнительный отступ сверху для номера */
    }
    
    &:nth-of-type(6) { /* Step 6 */
      grid-column: 3;
      grid-row: 2;
      padding-top: 25px; /* Дополнительный отступ сверху для номера */
    }
  }
  
  @media (min-width: 992px) {
    /* Larger desktop - ALL CARDS EXACT SAME SIZE */
    max-width: 200px; /* Увеличенная ширина для всех карточек */
    padding: 14px 16px; /* Равномерный отступ со всех сторон */
    
    /* Отступы для разных рядов */
    &:nth-of-type(1),
    &:nth-of-type(3),
    &:nth-of-type(5) {
      padding-bottom: 30px; /* Увеличенный отступ снизу для номера */
    }
    
    &:nth-of-type(2),
    &:nth-of-type(4),
    &:nth-of-type(6) {
      padding-top: 30px; /* Увеличенный отступ сверху для номера */
    }
  }
  
  @media (min-width: 1200px) {
    /* Extra large desktop - ALL CARDS SAME SIZE */
    width: ${cssVariables.sizes.cardWidth}; /* All cards exact same width */
    max-width: ${cssVariables.sizes.cardWidth};
  }
  
  &:hover {
    /* Чистый hover эффект без градиентов */
    background: rgba(230, 255, 0, 0.95);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
      0 25px 50px rgba(230, 255, 0, 0.25),
      0 15px 35px rgba(0, 0, 0, 0.1),
      0 5px 15px rgba(230, 255, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(230, 255, 0, 0.6);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    
    &::before {
      opacity: 1;
    }
  }
  
  &.highlight {
    /* Special styling for highlighted cards */
    border: 1px solid ${cssVariables.colors.yellow}cc; /* cc = 80% opacity */
  }
`;

export const StepNumber = styled.div`
  width: 32px;
  height: 32px;
  background: ${cssVariables.colors.yellow};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.75rem;
  box-shadow: 
    0 0 0 3px rgba(255, 255, 255, 0.95),
    0 4px 12px rgba(230, 255, 0, 0.5),
    0 8px 25px rgba(230, 255, 0, 0.3),
    0 2px 6px rgba(0, 0, 0, 0.1);
  position: absolute;
  z-index: 3;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  
  /* Добавляем внутренний блик */
  &::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    pointer-events: none;
  }
  
  /* Стили для переключения между числом и иконкой */
  .number-text {
    display: block;
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transform: scale(1);
  }
  
  .hover-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    
    svg {
      width: 1.2rem;
      height: 1.2rem;
      filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
    }
  }
  
  /* При hover карточки показываем иконку */
  .step-1:hover &,
  .step-2:hover &,
  .step-3:hover &,
  .step-4:hover &,
  .step-5:hover &,
  .step-6:hover & {
    background: #000000;
    color: #ffffff;
    box-shadow: 
      0 0 0 3px rgba(255, 255, 255, 0.95),
      0 8px 24px rgba(0, 0, 0, 0.4),
      0 0 25px rgba(230, 255, 0, 0.8),
      0 0 40px rgba(230, 255, 0, 0.4);
    transform: scale(1.1) rotate(360deg);
    
    &::before {
      background: rgba(255, 255, 255, 0.15);
    }
    
    .number-text {
      opacity: 0;
      transform: scale(0.8);
    }
    
    .hover-icon {
      opacity: 1;
      color: #ffffff;
      transform: translate(-50%, -50%) scale(1);
    }
  }
  
  @media (max-width: 767px) {
    /* Mobile position: центр карточки */
    left: 50%;
    transform: translateX(-50%);
    width: 26px;
    height: 26px;
    font-size: 0.7rem;
    box-shadow: 0 0 0 2px white, 0 2px 6px rgba(230, 255, 0, 0.3);
    
    .hover-icon {
      svg {
        width: 1rem;
        height: 1rem;
      }
    }
    
    /* Для нечетных карточек (1,3,5) - внизу */
    .step-1 &, .step-3 &, .step-5 & {
      bottom: -13px;
      top: auto;
    }
    
    /* Для четных карточек (2,4,6) - вверху */
    .step-2 &, .step-4 &, .step-6 & {
      top: -13px;
    }
  }
  
  @media (min-width: 576px) and (max-width: 767px) {
    /* Larger mobile */
    width: 28px;
    height: 28px;
    font-size: 0.75rem;
    
    .hover-icon {
      svg {
        width: 1.1rem;
        height: 1.1rem;
      }
    }
  }
  
  @media (min-width: 768px) {
    /* Базовые стили для всех кругов с номерами */
    width: 32px;
    height: 32px;
    font-size: 0.85rem;
    box-shadow: 0 0 0 3px white, 0 3px 5px rgba(0, 0, 0, 0.15);
    
    .hover-icon {
      svg {
        width: 1.2rem;
        height: 1.2rem;
      }
    }
    
    /* Позиционирование зависит от порядка карточки */
    /* По умолчанию стиль при отсутствии nth-of-type селектора */
    left: 50%;
    transform: translateX(-50%);
    
    /* Для карточек верхнего ряда (1,3,5) - номера внизу по центру */
    .step-1 &, .step-3 &, .step-5 & {
      bottom: -16px;
      top: auto;
    }
    
    /* Для карточек нижнего ряда (2,4,6) - номера вверху по центру */
    .step-2 &, .step-4 &, .step-6 & {
      top: -16px;
    }
  }
  
  @media (min-width: 992px) {
    /* Larger desktop */
    width: 36px;
    height: 36px;
    font-size: 0.9rem;
    
    .hover-icon {
      svg {
        width: 1.3rem;
        height: 1.3rem;
      }
    }
  }
`;

export const StepTitle = styled.h4`
  /* Title of each step card */
  font-size: 0.82rem;
  margin-bottom: 6px;
  color: ${cssVariables.colors.textDark};
  margin-top: 0;
  font-weight: 600;
  line-height: 1.3;
  width: 100%;
  
  @media (max-width: 480px) {
    /* Small mobile */
    font-size: 0.8rem;
    margin-bottom: 3px;
    line-height: 1.15;
  }
  
  @media (min-width: 576px) {
    /* Larger mobile/small tablet */
    font-size: 0.85rem;
    margin-bottom: 4px;
  }
  
  @media (min-width: 768px) {
    /* Tablet/desktop - consistent sizing for compact cards */
    font-size: 0.8rem; /* Slightly smaller for better fit in cards */
    margin-bottom: 4px;
    line-height: 1.2;
  }
  
  @media (min-width: 992px) {
    /* Larger desktop - consistent sizing for compact cards */
    font-size: 0.85rem; /* Slightly larger but consistent for all cards */
    margin-bottom: 5px;
  }
`;

export const StepDescription = styled.p`
  /* Description text in each step card */
  font-size: 0.7rem;
  color: ${cssVariables.colors.textLight};
  margin-bottom: 0;
  margin-top: 0;
  flex-grow: 1;
  line-height: 1.4;
  width: 100%;
  
  @media (max-width: 480px) {
    /* Small mobile */
    font-size: 0.65rem;
    line-height: 1.3;
  }
  
  @media (min-width: 576px) {
    /* Larger mobile/small tablet */
    font-size: 0.68rem;
    line-height: 1.33;
  }
  
  @media (min-width: 768px) {
    /* Tablet/desktop - consistent sizing for compact cards */
    font-size: 0.68rem; /* Slightly smaller for better fit in cards */
    line-height: 1.35;
  }
  
  @media (min-width: 992px) {
    /* Larger desktop - consistent sizing for compact cards */
    font-size: 0.7rem; /* Consistent size across all cards */
    line-height: 1.35;
  }
`;



export const SwitchContainer = styled.div`
  /* Container for the camera icon with modern design */
  position: absolute;
  top: 50%;
  right: -18px;
  background: rgba(17, 17, 17, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.3),
    0 8px 25px rgba(0, 0, 0, 0.2),
    0 0 0 2px rgba(230, 255, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  z-index: 3;
  transform: translateY(-50%);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  
  /* Добавляем пульсирующее кольцо */
  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border: 2px solid rgba(230, 255, 0, 0.4);
    border-radius: 50%;
    opacity: 0;
    animation: pulse 2s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { 
      opacity: 0;
      transform: scale(1);
    }
    50% { 
      opacity: 1;
      transform: scale(1.1);
    }
  }
  
  /* Скрываем иконку при hover карточки step-4 */
  .step-4:hover & {
    opacity: 0;
    transform: translateY(-50%) scale(0.8);
  }
  
  @media (max-width: 767px) {
    /* Mobile: smaller icon */
    width: 30px;
    height: 30px;
    right: -15px;
  }
  
  @media (min-width: 768px) and (max-width: 991px) {
    /* Tablet */
    width: 32px;
    height: 32px;
    right: -16px;
  }
  
  @media (min-width: 992px) {
    /* Desktop */
    width: 36px;
    height: 36px;
    right: -18px;
  }
  
  /* Icon size responsive adjustments */
  svg {
    width: 22px;
    height: 22px;
    
    @media (max-width: 480px) {
      width: 14px;
      height: 14px;
    }
    
    @media (min-width: 481px) and (max-width: 767px) {
      width: 16px;
      height: 16px;
    }
    
    @media (min-width: 768px) and (max-width: 991px) {
      width: 20px;
      height: 20px;
    }
    
    @media (min-width: 1200px) {
      width: 24px;
      height: 24px;
    }
  }
`;

export const FloatingElement = styled.div`
  /* Decorative floating elements with clean design */
  background: rgba(230, 255, 0, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: 600;
  color: ${cssVariables.colors.textDark};
  box-shadow: 
    0 4px 16px rgba(230, 255, 0, 0.3),
    0 8px 25px rgba(230, 255, 0, 0.2),
    0 2px 8px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  text-align: center;
  z-index: 2;
  font-size: 0.6rem;
  white-space: nowrap;
  transform-origin: center center;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  display: inline-block;
  margin: 3px;
  animation: gentlePulse 4s ease-in-out infinite;
  
  /* Добавляем верхний блик */
  &::before {
    content: '';
    position: absolute;
    top: 1px;
    left: 10%;
    right: 10%;
    height: 40%;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 18px 18px 50% 50%;
    pointer-events: none;
  }
  
  @keyframes gentlePulse {
    0%, 100% { 
      transform: scale(1) rotate(0deg);
      box-shadow: 
        0 4px 16px rgba(230, 255, 0, 0.3),
        0 8px 25px rgba(230, 255, 0, 0.2),
        0 2px 8px rgba(0, 0, 0, 0.1);
    }
    50% { 
      transform: scale(1.05) rotate(1deg);
      box-shadow: 
        0 6px 20px rgba(230, 255, 0, 0.4),
        0 12px 30px rgba(230, 255, 0, 0.25),
        0 3px 12px rgba(0, 0, 0, 0.15);
    }
  }
  
  &:hover {
    transform: scale(1.1) rotate(2deg);
    background: rgba(230, 255, 0, 1);
    box-shadow: 
      0 8px 24px rgba(230, 255, 0, 0.5),
      0 15px 35px rgba(230, 255, 0, 0.3),
      0 4px 16px rgba(0, 0, 0, 0.2);
    animation-play-state: paused;
  }
  
  /* Стили поворота для разных классов */
  &.quality, &.team {
    transform: rotate(-2deg);
  }
  
  &.results, &.success {
    transform: rotate(2deg);
  }
  
  /* Базовые стили для мобильных устройств */
  @media (max-width: 480px) {
    font-size: 0.55rem;
    padding: 3px 7px;
    border-radius: 10px;
    max-width: 42%; /* Предотвращение перекрытия на маленьких экранах */
    
    /* Меньший поворот на маленьких экранах */
    &.quality, &.team {
      transform: rotate(-1deg);
    }
    
    &.results, &.success {
      transform: rotate(1deg);
    }
    
    /* Убедимся, что элементы не перекрывают друг друга */
    &.quality {
      margin-right: 3px;
    }
    
    &.results {
      margin-left: 3px;
    }
    
    &.team {
      margin-right: 3px;
    }
    
    &.success {
      margin-left: 3px;
    }
  }
  
  /* Для очень маленьких мобильных устройств */
  @media (max-width: 350px) {
    padding: 2px 6px;
    font-size: 0.50rem;
    border-radius: 8px;
    max-width: 40%; /* Ещё более компактный вид */
  }
  
  @media (min-width: 481px) and (max-width: 575px) {
    font-size: 0.58rem;
    padding: 4px 8px;
    border-radius: 12px;
  }
  
  @media (min-width: 576px) {
    font-size: 0.65rem;
    padding: 5px 10px;
    border-radius: 14px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }
  
  @media (min-width: 768px) {
    font-size: 0.7rem;
    padding: 6px 12px;
    border-radius: 16px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    
    /* Более заметный поворот на больших экранах */
    &.quality, &.team {
      transform: rotate(-2deg);
    }
    
    &.results, &.success {
      transform: rotate(2deg);
    }
  }
  
  @media (min-width: 992px) {
    font-size: 0.75rem;
    padding: 8px 14px;
    border-radius: 18px;
  }
`;

export const FloatingTagsContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  /* Настройка для разных устройств */
  @media (max-width: 480px) {
    /* На мобильных устройствах контейнер немного меньше по высоте */
    height: 95%;
    top: 0.001%;
  }
  
  @media (min-width: 576px) and (max-width: 767px) {
    /* На планшетах элементы более равномерно распределены */
    height: 96%;
    top: 2%;
  }
  
  @media (min-width: 768px) {
    /* На десктопах используем всю высоту */
    height: 100%;
    top: 0;
  }
`;

export const FloatingTagsRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  box-sizing: border-box;
  
  /* Top row */
  &.top-row {
    padding-bottom: 5px;
  }
  
  /* Bottom row */
  &.bottom-row {
    padding-top: 5px;
  }
  
  /* Responsive adjustments */
  @media (max-width: 480px) {
    padding: 10px;
    align-items: center;
    
    /* Увеличиваем отступы между рядами на мобильных */
    &.top-row {
      padding-bottom: 8px;
    }
    
    &.bottom-row {
      padding-top: 8px;
    }
  }
  
  @media (max-width: 350px) {
    padding: 8px;
  }
  
  @media (min-width: 576px) and (max-width: 767px) {
    /* Увеличиваем отступы на планшетах */
    &.top-row {
      padding-bottom: 10px;
    }
    
    &.bottom-row {
      padding-top: 10px;
    }
  }
  
  @media (min-width: 768px) {
    padding: 20px;
  }
  
  @media (min-width: 992px) {
    padding: 25px;
  }
`;

export const AnimatedParticles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
  
  .particle {
    position: absolute;
    background: radial-gradient(circle, rgba(230, 255, 0, 0.6) 0%, rgba(230, 255, 0, 0.1) 50%, transparent 100%);
    border-radius: 50%;
    animation: floatParticle 15s infinite linear;
    
    &:nth-child(1) {
      width: 4px;
      height: 4px;
      left: 10%;
      animation-delay: 0s;
      animation-duration: 20s;
    }
    
    &:nth-child(2) {
      width: 6px;
      height: 6px;
      left: 20%;
      animation-delay: 2s;
      animation-duration: 18s;
    }
    
    &:nth-child(3) {
      width: 3px;
      height: 3px;
      left: 30%;
      animation-delay: 4s;
      animation-duration: 22s;
    }
    
    &:nth-child(4) {
      width: 5px;
      height: 5px;
      left: 50%;
      animation-delay: 6s;
      animation-duration: 16s;
    }
    
    &:nth-child(5) {
      width: 4px;
      height: 4px;
      left: 70%;
      animation-delay: 8s;
      animation-duration: 19s;
    }
    
    &:nth-child(6) {
      width: 7px;
      height: 7px;
      left: 85%;
      animation-delay: 10s;
      animation-duration: 21s;
    }
  }
  
  @keyframes floatParticle {
    0% {
      transform: translateY(100vh) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100px) rotate(360deg);
      opacity: 0;
    }
  }
`;
