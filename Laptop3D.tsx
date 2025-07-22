import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: inline-block;
  margin-left: 1px;
  vertical-align: middle;
  width: auto;
  height: auto;
  background: none;

  img {
    max-width: 200px;
    height: auto;
    animation: swing 3s ease-in-out infinite; /* Анимация покачивания */
    pointer-events: none;
    user-select: none;
    background: none;
  }

  @keyframes swing {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-5deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @media (max-width: 768px) {
    img {
      max-width: 150px;
    }
  }

  @media (max-width: 425px) {
    img {
      max-width: 120px;
    }
  }
`;

const Laptop3D: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  return (
    <ImageContainer style={style}>
      <img src="/images/3Dlaptop.png" alt="3D Laptop" />
    </ImageContainer>
  );
};

export default Laptop3D;
