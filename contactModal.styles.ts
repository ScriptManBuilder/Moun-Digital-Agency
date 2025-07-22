import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  padding: 20px;
  animation: fadeIn 0.3s ease-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 20px;
  width: 100%;
  max-width: 480px;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease-out;
  position: relative;
  z-index: 1000000;
  
  @keyframes slideUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @media (max-width: 480px) {
    max-width: calc(100vw - 40px);
    border-radius: 16px;
  }
  
  @media (max-height: 600px) {
    max-height: 80vh;
  }
`;

export const ModalHeader = styled.div`
  padding: 30px 30px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #f0f0f0;
  
  @media (max-width: 480px) {
    padding: 20px 20px 15px;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #23272f;
  margin: 0;
  line-height: 1.3;
  text-align: center;
  flex: 1;
  padding-right: 20px;
  font-family: 'Inter', 'Montserrat', 'Roboto', sans-serif;
  letter-spacing: -0.02em;
  
  /* Разделение текста на строки с разными стилями */
  span.main-text {
    display: block;
    font-size: 22px;
    font-weight: 800;
    background: linear-gradient(135deg, #23272f 0%, #96e6a1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 4px;
  }
  
  span.sub-text {
    display: block;
    font-size: 16px;
    font-weight: 500;
    color: #666;
    opacity: 0.9;
  }
  
  @media (max-width: 480px) {
    span.main-text {
      font-size: 18px;
    }
    
    span.sub-text {
      font-size: 14px;
    }
    
    padding-right: 15px;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 28px;
  color: #999;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  transition: color 0.2s ease;
  flex-shrink: 0;
  
  &:hover {
    color: #333;
  }
  
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const ModalForm = styled.form`
  padding: 30px;
  
  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
  font-size: 14px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 18px 24px;
  border: 2px solid #e0e0e0;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  background: #fafafa;
  box-sizing: border-box;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #d4fc79;
    background: white;
    box-shadow: 0 0 0 3px rgba(212, 252, 121, 0.1);
  }
  
  &:hover:not(:focus) {
    border-color: #c8c8c8;
  }
  
  &::placeholder {
    color: #999;
    font-weight: 400;
  }
  
  @media (max-width: 480px) {
    padding: 16px 20px;
    font-size: 16px;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 18px 24px;
  border: 2px solid #e0e0e0;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  background: #fafafa;
  box-sizing: border-box;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #d4fc79;
    background: white;
    box-shadow: 0 0 0 3px rgba(212, 252, 121, 0.1);
  }
  
  &:hover:not(:focus) {
    border-color: #c8c8c8;
  }
  
  &::placeholder {
    color: #999;
    font-weight: 400;
  }
  
  @media (max-width: 480px) {
    padding: 16px 20px;
    font-size: 16px;
    min-height: 100px;
  }
`;

export const FormSelect = styled.select`
  width: 100%;
  padding: 15px 20px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  font-size: 16px;
  background: #fafafa;
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 16px;
  padding-right: 45px;
  
  &:focus {
    outline: none;
    border-color: #d4fc79;
    box-shadow: 0 0 0 3px rgba(212, 252, 121, 0.1);
    background-color: white;
  }
  
  option {
    background: white;
    color: #333;
  }
`;

export const PhoneInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #e0e0e0;
  border-radius: 16px;
  background: #fafafa;
  transition: all 0.2s ease;
  position: relative;
  
  &:focus-within {
    border-color: #d4fc79;
    background: white;
    box-shadow: 0 0 0 3px rgba(212, 252, 121, 0.1);
  }
  
  &:hover:not(:focus-within) {
    border-color: #c8c8c8;
  }
  
  /* Стили для input внутри PhoneInputWrapper */
  input {
    flex: 1;
    border: none;
    background: transparent;
    padding: 18px 24px 18px 16px;
    font-size: 16px;
    font-weight: 500;
    color: #333;
    outline: none;
    
    &::placeholder {
      color: #999;
      font-weight: 400;
    }
  }
  
  /* Стили для состояния ошибки */
  &.error {
    border-color: #ff6b6b;
    background: rgba(255, 107, 107, 0.05);
    animation: shake 0.3s ease-in-out;
    
    input {
      color: #d63031;
    }
    
    input::placeholder {
      color: #ff6b6b;
    }
  }
  
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-2px); }
    75% { transform: translateX(2px); }
  }
`;

export const CountryCodeSelect = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 20px 18px 24px;
  cursor: pointer;
  user-select: none;
  border-right: 2px solid #e0e0e0;
  transition: border-right-color 0.15s ease;
  position: relative;
  font-weight: 500;
  background: transparent;
  
  &:hover {
    border-right-color: #d4fc79;
  }
  
  &.open {
    border-right-color: #d4fc79;
  }
  
  span:first-child {
    margin-right: 10px;
    font-size: 20px;
  }
  
  span:last-child {
    color: #666;
    font-weight: 600;
    min-width: 50px;
  }
  
  &::after {
    content: '';
    margin-left: 12px;
    border: solid #999;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    transition: transform 0.2s ease;
  }
  
  &.open::after {
    transform: rotate(-135deg);
  }
  
  @media (max-width: 480px) {
    padding: 16px 16px 16px 20px;
    
    span:first-child {
      font-size: 18px;
      margin-right: 8px;
    }
    
    span:last-child {
      font-size: 14px;
      min-width: 45px;
    }
  }
`;

export const CountryDropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: white;
  border: 2px solid #d4fc79;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  z-index: 1000001;
  max-height: 240px;
  overflow: hidden;
  opacity: 1;
  transform: translateY(0);
`;

export const CountrySearchInput = styled.input`
  width: 100%;
  padding: 16px 20px;
  border: none;
  border-bottom: 2px solid #f0f0f0;
  font-size: 15px;
  font-weight: 500;
  background: rgba(212, 252, 121, 0.02);
  box-sizing: border-box;
  outline: none;
  transition: border-bottom-color 0.15s ease;
  
  &:focus {
    background: rgba(212, 252, 121, 0.05);
    border-bottom-color: #d4fc79;
  }
  
  &::placeholder {
    color: #999;
    font-weight: 400;
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
    background: rgba(212, 252, 121, 0.1);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #d4fc79;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #96e6a1;
  }
`;

export const CountryItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-radius: 8px;
  margin: 2px 8px;
  position: relative;
  
  &:hover {
    background: rgba(212, 252, 121, 0.08);
  }
  
  &.selected {
    background: rgba(212, 252, 121, 0.15);
    font-weight: 600;
    
    &::after {
      content: '✓';
      position: absolute;
      right: 20px;
      color: #96e6a1;
      font-weight: bold;
      font-size: 16px;
    }
  }
  
  .country-flag {
    margin-right: 12px;
    font-size: 18px;
  }
  
  .country-name {
    flex: 1;
    font-size: 15px;
    color: #333;
    font-weight: 500;
  }
  
  .country-code {
    color: #666;
    font-size: 14px;
    font-weight: 600;
    background: rgba(212, 252, 121, 0.1);
    padding: 2px 8px;
    border-radius: 6px;
    margin-left: 8px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  display: inline-block;
  padding: 16px 30px;
  background: #23272f; /* Исходный цвет кнопки */
  color: #fff; /* Белый текст */
  border: 2px solid #23272f; /* Граница цвета начального фона */
  border-radius: 20px;
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
  transition: background 0.8s ease, color 2s ease, opacity 0.3s ease; /* Плавный переход цвета за 2 секунды */
  cursor: pointer;
  font-family: 'Inter', 'Montserrat', 'Roboto', sans-serif;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* Тёмная тень */
  margin-bottom: 20px;

  &:hover:not(:disabled) {
    background: #d4fc79;
    color: #23272f; /* Цвет текста при наведении */
    box-shadow: 0 4px 16px rgba(224, 252, 55, 0.3); /* Более яркая тень */
    border-color: #23272f; /* Граница остаётся цвета начального фона */
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: #666;
    border-color: #666;
  }
`;

export const OrText = styled.div`
  text-align: center;
  color: #666;
  font-size: 14px;
  margin: 20px 0 15px;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 45%;
    height: 1px;
    background: #e0e0e0;
  }
  
  &::before {
    left: 0;
  }
  
  &::after {
    right: 0;
  }
`;

export const TelegramButton = styled.button`
  width: 100%;
  display: inline-block;
  padding: 16px 40px;
  background: linear-gradient(135deg, #0088cc 0%, #006fa8 100%);
  color: white;
  border: 2px solid #0088cc;
  border-radius: 32px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-family: 'Inter', 'Montserrat', 'Roboto', sans-serif;
  box-shadow: 0 4px 16px rgba(0, 136, 204, 0.25);
  
  &:hover {
    background: linear-gradient(135deg, #64b3f4 0%, #0088cc 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 136, 204, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

// Стили для интерактивных дополнительных услуг
export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`;

export const ServicesTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::before {
    content: '⚡';
    font-size: 18px;
  }
`;

export const ServiceItem = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border: 2px solid ${props => props.selected ? '#d4fc79' : '#e0e0e0'};
  border-radius: 16px;
  background: ${props => props.selected ? 'rgba(212, 252, 121, 0.1)' : '#fafafa'};
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 12px;
  
  &:hover {
    border-color: #d4fc79;
    background: rgba(212, 252, 121, 0.05);
  }
`;

export const ServicesToggle = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border: 2px solid #e0e0e0;
  border-radius: 16px;
  background: #fafafa;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: ${props => props.isOpen ? '16px' : '0'};
  
  &:hover {
    border-color: #d4fc79;
    background: rgba(212, 252, 121, 0.05);
  }
`;

export const ServicesToggleTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::before {
    content: '⚡';
    font-size: 18px;
  }
`;

export const ServicesToggleIcon = styled.div<{ isOpen: boolean }>`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid #d4fc79;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  color: #96e6a1;
  transition: transform 0.2s ease;
  transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
  
  &::after {
    content: '+';
  }
`;

export const ServicesDropdown = styled.div<{ isOpen: boolean }>`
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
  opacity: ${props => props.isOpen ? '1' : '0'};
`;

export const ServiceLabel = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  flex: 1;
  margin-left: 12px;
`;

export const ServiceIcon = styled.div<{ selected: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid ${props => props.selected ? '#96e6a1' : '#d4fc79'};
  background: ${props => props.selected ? '#d4fc79' : 'white'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.selected ? '#23272f' : '#96e6a1'};
  transition: all 0.2s ease;
  position: relative;
  flex-shrink: 0;
  
  &::after {
    content: '${props => props.selected ? '✓' : '+'}';
    position: absolute;
  }
`;

export const ServicePrice = styled.span<{ selected: boolean }>`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.selected ? '#96e6a1' : '#666'};
  background: ${props => props.selected ? 'rgba(150, 230, 161, 0.1)' : 'transparent'};
  padding: 4px 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
  margin-left: 12px;
`;

export const SubmitMessage = styled.div<{ type: 'success' | 'error' }>`
  margin: 15px 0;
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  animation: slideIn 0.3s ease-out;
  
  background: ${({ type }) => 
    type === 'success' 
      ? 'linear-gradient(135deg, rgba(150, 230, 161, 0.1), rgba(212, 252, 121, 0.1))'
      : 'rgba(255, 107, 107, 0.1)'
  };
  
  color: ${({ type }) => 
    type === 'success' ? '#2d5016' : '#d32f2f'
  };
  
  border: 1px solid ${({ type }) => 
    type === 'success' 
      ? 'rgba(150, 230, 161, 0.3)' 
      : 'rgba(255, 107, 107, 0.3)'
  };
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
