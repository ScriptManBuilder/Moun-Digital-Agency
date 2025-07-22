import styled from 'styled-components';

export const StackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f9f9f9;
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    width: 100%;
  }
`;

export const LeftSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const RightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    width: 100%;
  }
  
  @media (max-width: 480px) {
    padding: 0;
    width: 100%;
  }
`;

export const IconsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Сетка 4x4 по умолчанию */
  gap: 1rem; /* Расстояние между иконками */
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* Сетка 3x3 на планшетах */
    gap: 0.8rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Сетка 2x2 на телефонах */
    gap: 0.6rem;
    justify-items: center;
    width: fit-content;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr); /* Сетка 2x2 на очень маленьких экранах */
    gap: 0.5rem;
    width: fit-content;
    margin: 0 auto;
    padding: 0;
  }
  
  @media (max-width: 375px) {
    /* Специально для iPhone */
    width: fit-content;
    margin: 0 auto;
    padding: 0;
  }
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f0f8ff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  margin: 0 auto;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
    margin: 0 auto;
  }
  
  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
    margin: 0 auto;
  }
  img {
    width: 50px;
    height: 50px;
    transition: transform 0.3s ease;
    display: block;
    margin: 0 auto;

    &:hover {
      transform: scale(1.2);
    }
    
    @media (max-width: 768px) {
      width: 45px;
      height: 45px;
    }
    
    @media (max-width: 480px) {
      width: 40px;
      height: 40px;
    }
  }

  figcaption {
    font-size: 0.8rem;
    font-weight: 500;
    color: #333;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    margin-top: 5px;
    width: 100%;

    @media (max-width: 768px) {
      font-size: 0.7rem;
    }

    @media (max-width: 480px) {
      font-size: 0.6rem;
    }
  }
`;

// ===== Portfolio Section =====
export const PortfolioSection = styled.section`
  background-color: #f9f9f9;
  padding: 40px 0 60px 0;
  text-align: center;
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  max-width: 100vw;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 30px 0 40px 0;
  }
  
  @media (max-width: 480px) {
    padding: 20px 0 30px 0;
  }
`;

export const PortfolioTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;
  padding-bottom: 15px;
  text-transform: none;
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #ddd;
  }
  
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 3px;
    background: #333;
  }

  b {
    font-style: italic;
    color: #333;
    font-weight: bold;
    position: relative;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
    padding-bottom: 12px;
    
    &::before {
      width: 60px;
      height: 3px;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 25px;
    padding-bottom: 10px;
    
    &::before {
      width: 50px;
      height: 2px;
    }
  }
`;

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
    padding: 0 20px;
    max-width: calc(100% - 40px);
  }

  @media (max-width: 480px) {
    grid-template-columns: minmax(0, 1fr);
    padding: 0 20px;
    gap: 15px;
    width: 100%;
    max-width: 100%;
  }

  @media (max-width: 375px) {
    /* Specifically for iPhone sizes */
    padding: 0 15px;
    width: calc(100% - 30px);
  }
`;

export const PortfolioItem = styled.div`
  border-radius: 10px;
  overflow: hidden;
  background-color: #f0f8ff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 250px;
  cursor: pointer;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    height: 200px;
  }
  
  @media (max-width: 480px) {
    height: 180px;
    width: 100%;
  }

  @media (max-width: 375px) {
    /* Specifically for iPhone sizes */
    width: 100%;
  }
`;

export const PortfolioImage = styled.div<{ imageUrl?: string }>`
  width: 100%;
  height: 100%;
  background-image: ${({ imageUrl }) =>
    imageUrl
      ? `url(${imageUrl})`
      : 'linear-gradient(45deg, #e0e8f5, #f0f8ff)'};
  background-size: cover;
  background-position: center;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-sizing: border-box;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;