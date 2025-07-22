import styled from 'styled-components';

export const DiscussContainer = styled.section`
  background-color: #171717;
  color: white;
  padding: 60px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  
  /* Добавляем градиентный фон с низкой непрозрачностью */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top left, rgba(150, 230, 161, 0.03), transparent 60%),
                radial-gradient(circle at bottom right, rgba(212, 252, 121, 0.03), transparent 60%);
    pointer-events: none;
  }
  
  @media (min-width: 576px) {
    padding: 70px 30px;
  }
  
  @media (min-width: 768px) {
    padding: 80px 40px;
  }
  
  @media (min-width: 1024px) {
    padding: 100px 60px;
  }
  
  @media (min-width: 1200px) {
    padding: 120px 80px;
  }
    color: #d4fc79;
    font-style: italic;
    z-index: 10;
  }
`;

export const DiscussContent = styled.div`
  max-width: 98%; /* Увеличиваем еще больше для предотвращения обрезания */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1; /* Поверх градиентного фона */
  box-sizing: border-box;
  padding: 0 5px; /* Уменьшаем отступы для большей ширины текста */
  margin: 0 auto;
  
  @media (min-width: 360px) {
    max-width: 98%;
    padding: 0 8px;
  }
  
  @media (min-width: 400px) {
    max-width: 380px;
    padding: 0 10px;
  }
  
  @media (min-width: 576px) {
    gap: 30px;
    max-width: 540px;
    padding: 0 20px;
  }
    @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 25px; /* Уменьшаем gap для лучшего использования пространства */
    max-width: 720px;
    padding: 0 10px; /* Уменьшаем боковые отступы */
  }
  
  @media (min-width: 1024px) {
    gap: 45px; /* Уменьшаем gap */
    max-width: 960px;
    padding: 0 15px; /* Уменьшаем отступы */
  }
  
  @media (min-width: 1200px) {
    max-width: 1140px;
    padding: 0 30px;
  }
`;

export const DiscussTextContainer = styled.div`
  margin-bottom: 30px; /* Уменьшаем отступ */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  max-width: 98%; /* Увеличиваем еще больше для предотвращения обрезания текста */
  
  @media (min-width: 360px) {
    margin-bottom: 35px;
    max-width: 98%;
  }
  
  @media (min-width: 400px) {
    margin-bottom: 40px;
    max-width: 380px;
  }
  
  @media (min-width: 576px) {
    max-width: 500px;
  }
  
  @media (min-width: 768px) {
    width: 50%; /* Увеличиваем ширину текстового блока */
    margin-bottom: 0;
    padding-right: 15px; /* Увеличиваем отступ справа */
    flex-direction: row;
    align-items: center;
    gap: 15px; /* Уменьшаем gap для экономии места */
    max-width: none;
  }
  
  @media (min-width: 1024px) {
    padding-right: 15px; /* Уменьшаем отступ */
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 98%; /* Увеличиваем еще больше для лучшей адаптивности */
  margin: 0 auto;
  
  @media (min-width: 360px) {
    max-width: 98%;
  }
  
  @media (min-width: 400px) {
    max-width: 380px;
  }
  
  @media (min-width: 576px) {
    max-width: 500px;
  }
  
  @media (min-width: 768px) {
    align-items: flex-start;
    max-width: none;
    margin: 0;
  }
`;

export const DiscussTitle = styled.h2`
  font-size: 1.0rem; /* Возвращаем к предыдущему размеру */
  font-weight: 600;
  margin-bottom: 8px; /* Увеличиваем отступ снизу для двух строк */
  text-align: center;
  line-height: 1.2; /* Увеличиваем для лучшего отображения двух строк */
  width: 100%;
  max-width: 100%; /* Убираем ограничение ширины, пусть использует всё место */
  word-wrap: break-word; /* Разрешаем перенос длинных слов */
  overflow-wrap: break-word; /* Дополнительная защита от переполнения */
  hyphens: auto; /* Автоматические переносы */
  display: block; /* Блочное отображение для контроля ширины */
  
  span {
    font-style: italic;
    background: linear-gradient(to right, #96e6a1, #d4fc79);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  @media (max-width: 320px) {
    font-size: 0.85rem; /* Возвращаем к предыдущему размеру */
    margin-bottom: 6px;
    line-height: 1.15;
    max-width: 100%; /* Убираем ограничения и на мобильных */
  }
  
  @media (min-width: 360px) {
    font-size: 1.05rem; /* Возвращаем к предыдущему размеру */
    max-width: 100%;
  }
  
  @media (min-width: 400px) {
    font-size: 1.15rem; /* Возвращаем к предыдущему размеру */
    max-width: 100%;
  }
  
  @media (min-width: 576px) {
    font-size: 1.25rem; /* Возвращаем к предыдущему размеру */
    max-width: 100%;
  }
  
  @media (min-width: 768px) {
    font-size: 1.4rem; /* Возвращаем к предыдущему размеру */
    text-align: left;
    max-width: 100%; /* Убираем ограничения, пусть использует всё место */
  }
  
  @media (min-width: 1024px) {
    font-size: 1.6rem; /* Возвращаем к предыдущему размеру */
    max-width: 100%;
  }
`;

export const DiscussSubtitle = styled.p`
  font-size: 0.95rem; /* Немного увеличиваем */
  color: #b3b3b3;
  margin-top: 0;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
  max-width: 98%; /* Увеличиваем еще больше для предотвращения обрезания */
  line-height: 1.5;
  
  @media (min-width: 360px) {
    font-size: 1rem; /* Увеличиваем */
    max-width: 98%;
  }
  
  @media (min-width: 400px) {
    font-size: 1.1rem; /* Увеличиваем */
    max-width: 360px;
  }
  
  @media (min-width: 576px) {
    font-size: 1.15rem; /* Увеличиваем */
    max-width: 480px;
  }
  
  @media (min-width: 768px) {
    text-align: left;
    font-size: 1.25rem; /* Увеличиваем */
    max-width: none;
  }
`;

export const DiscussForm = styled.form`
  width: 100%;
  max-width: 280px; /* Уменьшено специально для 320px */
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  padding: 15px 12px; /* Уменьшены отступы */
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  }
    @media (min-width: 360px) {
    max-width: 310px;
    padding: 18px 15px;
  }
  
  @media (min-width: 400px) {
    padding: 20px;
    max-width: 340px;
  }
    @media (min-width: 576px) {
    padding: 25px;
    max-width: 450px;
  }
  
  @media (min-width: 768px) {
    width: 45%; /* Уменьшаем ширину формы для баланса */
    max-width: 320px; /* Уменьшаем максимальную ширину */
    padding: 25px; /* Уменьшаем отступы */
    margin: 0;
  }
  
  @media (min-width: 1024px) {
    padding: 32px;
    max-width: 400px;
  }
  
  @media (min-width: 1200px) {
    padding: 36px;
    max-width: 500px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 18px; /* Уменьшаем для маленьких экранов */
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 45px; /* Фиксированная минимальная высота */
  transition: min-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Увеличиваем высоту при наличии выбранных тегов */
  &.has-tags {
    min-height: 120px;
  }
  
  &:last-of-type {
    margin-bottom: 24px; /* Уменьшаем для маленьких экранов */
  }
  
  @media (min-width: 360px) {
    margin-bottom: 20px;
    min-height: 48px;
    
    &.has-tags {
      min-height: 130px;
    }
    
    &:last-of-type {
      margin-bottom: 26px;
    }
  }
  
  @media (min-width: 768px) {
    margin-bottom: 26px;
    min-height: 50px;
    
    &.has-tags {
      min-height: 140px;
    }
    
    &:last-of-type {
      margin-bottom: 35px;
    }
  }
  
  @media (max-width: 360px) {
    min-height: 42px;
    
    &.has-tags {
      min-height: 110px;
    }
  }
  
  @media (max-width: 320px) {
    min-height: 40px;
    
    &.has-tags {
      min-height: 100px;
    }
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px 12px; /* Уменьшаем для 320px */
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #555;
  color: white;
  font-size: 0.95rem; /* Уменьшаем для 320px */
  outline: none;
  transition: border-bottom 0.3s;
  box-sizing: border-box;
  margin: 0;
  
  @media (min-width: 360px) {
    padding: 10px 15px;
    font-size: 1rem;
  }
  
  &::placeholder {
    color: #aaa;
  }
  
  &:focus {
    border-bottom: 1px solid #fff;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px 12px; /* Уменьшаем для 320px */
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #555;
  color: white;
  font-size: 0.95rem; /* Уменьшаем для 320px */
  min-height: 70px; /* Уменьшаем для 320px */
  resize: vertical;
  outline: none;
  transition: border-bottom 0.3s;
  box-sizing: border-box;
  margin: 0;
  
  @media (min-width: 360px) {
    padding: 10px 15px;
    font-size: 1rem;
    min-height: 80px;
  }
  
  &::placeholder {
    color: #aaa;
  }
  
  &:focus {
    border-bottom: 1px solid #fff;
  }
`;

export const PhoneInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #555;
  transition: border-bottom 0.3s;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  height: 41px; /* Уменьшаем для 320px */
  
  @media (min-width: 360px) {
    height: 43px;
  }
  
  @media (min-width: 400px) {
    height: 45px;
  }
  
  &:focus-within {
    border-bottom: 1px solid #fff;
  }
`;

export const CountryCodeSelect = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 6px 8px 10px; /* Уменьшаем для 320px */
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  font-weight: normal;
  user-select: none;
  transition: background-color 0.2s;
  border-radius: 4px;
  
  @media (min-width: 360px) {
    padding: 10px 8px 10px 12px;
  }
  
  @media (min-width: 400px) {
    padding: 12px 10px 12px 15px;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  span {
    margin-right: 4px;
    display: inline-block;
  }
  
  span:first-child {
    font-size: 1.1rem;
    position: relative;
    top: -1px;
  }
  
  span:last-child {
    color: #ccc;
  }

  &:after {
    content: '';
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid #aaa;
    margin-left: 4px;
    transition: transform 0.3s;
  }
  
  &.open:after {
    transform: rotate(180deg);
  }
  
  &.open {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

export const CountryDropdown = styled.div`
  position: absolute;
  top: calc(100% + 1px);
  left: -1px;
  width: 350px;
  max-height: 250px;
  overflow-y: auto;
  background-color: #1c1c1c;
  border: 1px solid #333;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  z-index: 100;
  padding: 0;
  margin-top: 3px;
`;

export const CountrySearchInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  background-color: #1c1c1c;
  border: none;
  border-bottom: 1px solid #333;
  color: white;
  font-size: 0.9rem;
  outline: none;
  box-sizing: border-box;
  border-radius: 8px 8px 0 0;
  
  &::placeholder {
    color: #aaa;
  }
  
  &:focus {
    border-bottom-color: #555;
  }
`;

export const CountryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 180px;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #1c1c1c;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 20px;
  }
  
  /* Стили для скроллбара */
  scrollbar-width: thin;
  scrollbar-color: #444 #1c1c1c;
`;

export const CountryItem = styled.li`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #333;
  }
  
  &.selected {
    background-color: rgba(219, 255, 144, 0.35);
  }
  
  .country-flag {
    margin-right: 10px;
    font-size: 1.2rem;
  }
  
  .country-name {
    flex-grow: 1;
    color: #ddd;
    font-size: 0.9rem;
  }
  
  .country-code {
    color: #aaa;
    margin-left: 10px;
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

export const FormSubmit = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 30px;
  background-color: white;
  color: black;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 1;
  outline: none;
  
  @media (min-width: 360px) {
    padding: 13px;
    font-size: 0.98rem;
  }
  
  @media (min-width: 400px) {
    padding: 15px;
    font-size: 1rem;
  }
  
  /* Эффект градиентной волны при наведении */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: linear-gradient(45deg, #d4fc79, #96e6a1);
    transition: width 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: -1;
    transform-origin: left;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    border: 2px solid transparent;
    border-radius: 30px;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: -2;
    transform: scale(1);
    opacity: 0;
  }
  
  &:hover {
    color: #23272f;
    box-shadow: 0 5px 20px rgba(212, 252, 121, 0.4);
    letter-spacing: 0.5px;
    
    &:before {
      width: 100%;
    }
    
    &:after {
      border-color: #d4fc79;
      transform: scale(1.05);
      opacity: 0.7;
    }
  }
  
  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 10px rgba(212, 252, 121, 0.3);
    
    &:before {
      background: linear-gradient(45deg, #96e6a1, #d4fc79);
      transition: all 0.1s;
    }
  }
  
  /* Ripple effect */
  .ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    background: rgba(212, 252, 121, 0.4);
    animation: ripple 0.8s linear;
    pointer-events: none;
    z-index: 0;
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  /* Анимация пульсации */
  @keyframes pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(212, 252, 121, 0.7);
    }
    
    70% {
      transform: scale(1.02);
      box-shadow: 0 0 0 10px rgba(212, 252, 121, 0);
    }
    
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(212, 252, 121, 0);
    }
  }
  
  /* Добавляем пульсацию через некоторое время после загрузки страницы */
  animation: pulse 2s infinite;
  animation-delay: 3s;
`;

export const FormSelect = styled.div`
  position: relative;
  width: 100%;
  
  select {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.05);
    color: white;
    cursor: pointer;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
    box-sizing: border-box;
    appearance: none;
    outline: none;
    padding-right: 45px;
    min-height: 45px;
    margin: 0;
    
    /* Кастомная стрелка для dropdown */
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23aaa' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: 16px;
    
    /* Для множественного выбора */
    &[multiple] {
      min-height: 120px;
      padding: 10px 15px;
      background-image: none;
      padding-right: 15px;
      overflow-y: auto;
      
      /* Кастомный скроллбар */
      &::-webkit-scrollbar {
        width: 6px;
      }
      
      &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 3px;
      }
      
      &::-webkit-scrollbar-thumb {
        background-color: #555;
        border-radius: 3px;
        
        &:hover {
          background-color: #777;
        }
      }
      
      /* Стили для Firefox */
      scrollbar-width: thin;
      scrollbar-color: #555 rgba(255, 255, 255, 0.05);
    }
    
    &:focus {
      border-color: #d4fc79;
      box-shadow: 0 0 0 3px rgba(212, 252, 121, 0.1);
      background-color: rgba(255, 255, 255, 0.08);
      
      /* Изменение цвета стрелки при фокусе */
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23d4fc79' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
    }
    
    &:hover {
      border-color: rgba(255, 255, 255, 0.2);
      background-color: rgba(255, 255, 255, 0.07);
    }
    
    option {
      background-color: #1c1c1c;
      color: white;
      padding: 10px 15px;
      
      &:checked {
        background-color: rgba(212, 252, 121, 0.08);
        color: #b8e6c1;
        font-weight: 500;
        position: relative;
      }
      
      &:hover {
        background-color: rgba(255, 255, 255, 0.05);
      }
      
      &:focus {
        background-color: rgba(212, 252, 121, 0.05);
        outline: none;
      }
    }
    
    /* Стили для placeholder (первого option) */
    option:first-child {
      color: #aaa;
      font-style: italic;
    }
    
    /* Для множественного выбора - улучшенное отображение выбранных элементов */
    &[multiple] option:checked {
      background-color: rgba(212, 252, 121, 0.06);
      color: #a8d6b3;
      border-left: 3px solid rgba(212, 252, 121, 0.4);
      padding-left: 12px;
    }
    
    @media (max-width: 360px) {
      padding: 10px 12px;
      font-size: 0.95rem;
      padding-right: 40px;
      
      &[multiple] {
        min-height: 100px;
        padding: 8px 12px;
      }
    }
  }
  
  /* Убираем старую стрелку */
  &:after {
    display: none;
  }
  
  /* Индикатор для множественного выбора */
  &[data-multiple="true"]::before {
    content: 'Удерживайте Ctrl для выбора нескольких опций';
    position: absolute;
    top: -18px;
    left: 0;
    font-size: 10px;
    color: #888;
    font-style: italic;
    white-space: nowrap;
  }
`;

/* Дополнительные компоненты для красивого отображения выбранных значений */
export const SelectedTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
  max-height: 80px;
  overflow-y: auto;
  opacity: 1;
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Анимация появления */
  animation: slideIn 0.3s ease-out;
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
      max-height: 0;
    }
    to {
      opacity: 1;
      transform: translateY(0);
      max-height: 80px;
    }
  }
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #555;
    border-radius: 2px;
  }
  
  @media (max-width: 360px) {
    gap: 4px;
    margin-top: 6px;
    max-height: 60px;
    
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-8px);
        max-height: 0;
      }
      to {
        opacity: 1;
        transform: translateY(0);
        max-height: 60px;
      }
    }
  }
  
  @media (max-width: 320px) {
    gap: 3px;
    margin-top: 5px;
    max-height: 50px;
    
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-6px);
        max-height: 0;
      }
      to {
        opacity: 1;
        transform: translateY(0);
        max-height: 50px;
      }
    }
  }
  
  @media (min-width: 360px) and (max-width: 400px) {
    gap: 5px;
    margin-top: 7px;
    max-height: 70px;
    
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-9px);
        max-height: 0;
      }
      to {
        opacity: 1;
        transform: translateY(0);
        max-height: 70px;
      }
    }
  }
`;

export const SelectedTag = styled.span`
  background: rgba(212, 252, 121, 0.08);
  color: #a8d6b3;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid rgba(212, 252, 121, 0.15);
  display: flex;
  align-items: center;
  gap: 4px;
  opacity: 0;
  transform: scale(0.8);
  animation: tagAppear 0.3s ease-out forwards;
  
  @keyframes tagAppear {
    from {
      opacity: 0;
      transform: scale(0.8) translateY(-5px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
  
  /* Задержка анимации для каждого тега */
  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.15s; }
  &:nth-child(3) { animation-delay: 0.2s; }
  &:nth-child(4) { animation-delay: 0.25s; }
  &:nth-child(5) { animation-delay: 0.3s; }
  
  .remove {
    cursor: pointer;
    font-weight: bold;
    opacity: 0.7;
    transition: opacity 0.2s ease, color 0.2s ease, transform 0.2s ease;
    
    &:hover {
      opacity: 1;
      color: #ff6b6b;
      transform: scale(1.2);
    }
  }
  
  @media (max-width: 360px) {
    padding: 3px 6px;
    font-size: 11px;
    border-radius: 4px;
    gap: 3px;
  }
  
  @media (max-width: 320px) {
    padding: 2px 5px;
    font-size: 10px;
    border-radius: 3px;
    gap: 2px;
  }
  
  @media (min-width: 360px) and (max-width: 400px) {
    padding: 3px 7px;
    font-size: 11.5px;
    border-radius: 5px;
    gap: 3px;
  }
`;

export const ScrollArrow = styled.div`
  position: absolute;
  right: 8px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  font-size: 14px;
  color: #ccc;
  cursor: pointer;
  z-index: 5;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(212, 252, 121, 0.3);
    color: white;
  }

  &.up {
    top: 40px;
  }

  &.down {
    bottom: 10px;
  }
`;

export const RobotImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #96e6a1;
  margin-bottom: 20px;
  box-shadow: 0 5px 15px rgba(212, 252, 121, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(212, 252, 121, 0.5);
  }
  
  @media (min-width: 360px) {
    width: 100px;
    height: 100px;
  }
  
  @media (min-width: 400px) {
    width: 110px;
    height: 110px;
  }
  
  @media (min-width: 576px) {
    width: 130px;
    height: 130px;
  }
  
  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 10px; /* Добавляем отступ справа для смещения влево */
    width: 140px; /* Уменьшаем размер для экономии места */
    height: 140px;
    flex-shrink: 0; /* Предотвращаем сжатие изображения */
  }
  
  @media (min-width: 1024px) {
    width: 160px; /* Немного увеличиваем на больших экранах */
    height: 160px;
    margin-right: 15px;
  }
  
  @media (min-width: 1200px) {
    width: 180px;
    height: 180px;
    margin-right: 20px;
  }
`;

// Стили для кастомного алерта
export const AlertContainer = styled.div<{isSuccess: boolean}>`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: ${({ isSuccess }) => (isSuccess ? "#4CAF50" : "#ff4d4d")};
  color: #fff;
  padding: 15px 20px;
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  min-width: 300px;
  animation: fadeIn 0.5s ease-in-out, horizontal-shaking 0.5s ease-in-out, fadeOut 0.5s ease-in-out forwards;
  animation-delay: 0s, 0.5s, 4.5s;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(100%);
    }
  }
  
  @keyframes horizontal-shaking {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
    20%, 40%, 60%, 80% { transform: translateX(2px); }
  }
  
  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    left: 10px;
    min-width: auto;
    font-size: 14px;
    padding: 12px 16px;
  }
`;

export const AlertTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  &::before {
    content: '✓';
    font-size: 18px;
    font-weight: bold;
  }
`;

/* Кастомный дропдаун для сервисов */
export const ServicesDropdown = styled.div`
  position: relative;
  width: 100%;
  min-height: 45px; /* Фиксированная минимальная высота */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  @media (max-width: 320px) {
    font-size: 0.9rem;
    min-height: 38px;
  }
  
  @media (max-width: 360px) {
    min-height: 40px;
  }
  
  @media (min-width: 360px) and (max-width: 400px) {
    min-height: 42px;
  }
`;

export const ServicesButton = styled.div`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
  box-sizing: border-box;
  outline: none;
  padding-right: 45px;
  min-height: 45px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  /* Кастомная стрелка */
  &::after {
    content: '';
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #aaa;
    transition: transform 0.3s ease;
  }
  
  &.open::after {
    transform: rotate(180deg);
    border-top-color: #d4fc79;
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.07);
  }
  
  &:focus, &.open {
    border-color: #d4fc79;
    box-shadow: 0 0 0 3px rgba(212, 252, 121, 0.1);
    background-color: rgba(255, 255, 255, 0.08);
  }
  
  .placeholder {
    color: #aaa;
    font-style: italic;
  }
  
  .selected-count {
    color: #d4fc79;
    font-weight: 500;
  }
  
  @media (max-width: 360px) {
    padding: 10px 12px;
    font-size: 0.95rem;
    padding-right: 35px;
    min-height: 40px;
  }
  
  @media (max-width: 320px) {
    padding: 8px 10px;
    font-size: 0.9rem;
    padding-right: 32px;
    min-height: 38px;
  }
  
  @media (min-width: 360px) and (max-width: 400px) {
    padding: 11px 13px;
    font-size: 0.97rem;
    padding-right: 40px;
    min-height: 42px;
  }
`;

export const ServicesDropdownList = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background-color: #1c1c1c;
  border: 1px solid rgba(212, 252, 121, 0.2);
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  z-index: 100;
  padding: 8px 0;
  opacity: 1;
  transform: translateY(0) scale(1);
  transform-origin: top;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Анимация появления */
  animation: dropdownAppear 0.3s ease-out;
  
  @keyframes dropdownAppear {
    from {
      opacity: 0;
      transform: translateY(-10px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  /* Кастомный скроллбар */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #555;
    border-radius: 3px;
    
    &:hover {
      background-color: #777;
    }
  }
  
  /* Стили для Firefox */
  scrollbar-width: thin;
  scrollbar-color: #555 rgba(255, 255, 255, 0.05);
  
  @media (max-width: 360px) {
    max-height: 150px;
    padding: 6px 0;
  }
  
  @media (max-width: 320px) {
    max-height: 130px;
    padding: 4px 0;
    border-radius: 10px;
  }
  
  @media (min-width: 360px) and (max-width: 400px) {
    max-height: 180px;
    padding: 7px 0;
  }
`;

export const ServiceOption = styled.div<{ selected: boolean }>`
  padding: 12px 20px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  color: white;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  ${({ selected }) => selected && `
    background-color: rgba(212, 252, 121, 0.08);
    color: #a8d6b3;
    border-left: 3px solid rgba(212, 252, 121, 0.4);
    padding-left: 17px;
    
    &:hover {
      background-color: rgba(212, 252, 121, 0.12);
    }
  `}
  
  .checkmark {
    opacity: ${({ selected }) => selected ? 1 : 0};
    color: #d4fc79;
    font-weight: bold;
    transition: opacity 0.2s ease;
  }
  
  @media (max-width: 360px) {
    padding: 10px 15px;
    font-size: 0.9rem;
    
    ${({ selected }) => selected && `
      padding-left: 13px;
    `}
  }
  
  @media (max-width: 320px) {
    padding: 8px 12px;
    font-size: 0.85rem;
    
    ${({ selected }) => selected && `
      padding-left: 10px;
      border-left-width: 2px;
    `}
  }
  
  @media (min-width: 360px) and (max-width: 400px) {
    padding: 11px 18px;
    font-size: 0.92rem;
    
    ${({ selected }) => selected && `
      padding-left: 15px;
    `}
  }
`;

