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
    animation: horizontalMove 2s ease-in-out infinite;
    pointer-events: none;
    user-select: none;
    background: none;
  }

  @keyframes horizontalMove {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(15px); /* Movement to the right */
    }
    100% {
      transform: translateX(0px);
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

const RightArrow: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  return (
    <ImageContainer style={style}>
      <img src={`${process.env.PUBLIC_URL}/images/rightArrow1.png`} alt="Right Arrow" />
    </ImageContainer>
  );
};

export default RightArrow;
