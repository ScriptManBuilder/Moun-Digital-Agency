import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: inline-block;
  margin-right: 10px;
  vertical-align: middle;
  width: auto;
  height: auto;
  background: none;

  img {
    max-width: 200px;
    height: auto;
    animation: simpleSwing 3s ease-in-out infinite; /* Простая анимация покачивания */
    pointer-events: none;
    user-select: none;
    background: none;
  }

  @keyframes simpleSwing {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @media (max-width: 768px) {
    img {
      max-width: 150px;
      display: inline-block;
    }
  }

  @media (max-width: 425px) {
    img {
      max-width: 120px;
      display: inline-block;
    }
  }
`;

const PurpleGuy: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  return (
    <ImageContainer style={style}>
      <img src="/images/purtpleGuy3.png" alt="Purple Guy" />
    </ImageContainer>
  );
};

export default PurpleGuy;
