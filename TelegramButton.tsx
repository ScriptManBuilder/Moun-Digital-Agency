import React from 'react';
import styled from 'styled-components';
import { FaTelegramPlane } from "react-icons/fa";





const ButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background-color: #000; /* Темный фон */
  border-radius: 50%; /* Круглая заливка */
  padding: 8px; /* Увеличение padding для пропорциональности */
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    color: #fff; /* Белая иконка */
    font-size: 23px;
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  }

  &:hover {
    background: #e6ff00; /* Цвет заливки при наведении */
    .icon {
      color: #23272f; /* Цвет иконки при наведении */
    }
  }
`;

const TelegramButton: React.FC = () => {
  const handleClick = () => {
    window.open('https://t.me/moun_digital', '_blank');
  };

  return (
    <ButtonContainer>
      <FaTelegramPlane className="icon" onClick={handleClick} />
    </ButtonContainer>
  );
};

export default TelegramButton;
