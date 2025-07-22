import styled from 'styled-components';

export const WhyChooseUsSection = styled.section`
  padding: 40px 0;
  background-color: #fafafa;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden; /* Prevent horizontal scroll */
  
  /* Laptop L (1440px+) */
  @media (min-width: 1440px) {
    padding: 60px 0;
  }
  
  /* Mobile L and smaller */
  @media (max-width: 425px) {
    padding: 30px 0;
  }
  
  /* Mobile S */
  @media (max-width: 320px) {
    padding: 25px 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 30px;
  font-weight: 700;
  color: #1F2937;
  width: 100%;
  max-width: 1200px; /* Match container max-width */
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  box-sizing: border-box;
  
  /* Laptop L */
  @media (min-width: 1440px) {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }
  
  /* Tablet */
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 25px;
    padding: 0 20px;
    max-width: 600px;
  }
  
  /* Mobile L */
  @media (max-width: 425px) {
    font-size: 1.75rem;
    margin-bottom: 20px;
    width: 90%;
  }
  
  /* Mobile M */
  @media (max-width: 375px) {
    font-size: 1.6rem;
    padding: 0;
  }
  
  /* Mobile S */
  @media (max-width: 320px) {
    font-size: 1.5rem;
    margin-bottom: 15px;
    width: 95%;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  box-sizing: border-box;
  
  /* Laptop L */
  @media (min-width: 1440px) {
    max-width: 1200px;
    gap: 30px;
    padding: 0 20px;
  }
  
  /* Laptop */
  @media (max-width: 1024px) {
    gap: 25px;
    max-width: 900px;
  }
  
  /* Tablet */
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 700px;
  }
  
  /* Mobile L */
  @media (max-width: 768px) {
    gap: 20px;
    padding: 0 20px;
    max-width: 600px;
  }
  
  /* Mobile M and S */
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    display: flex; /* Switch to flex for better centering */
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 100%;
    gap: 15px;
    padding: 0;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 10px;
  transition: all 0.2s ease;
  
  /* All mobile sizes - using exact same approach as CardWrapper */
  @media (max-width: 767px) {
    width: 250px;
    max-width: calc(100vw - 40px); /* Ensures equal margin on both sides */
    margin-left: auto;
    margin-right: auto;
  }
  
  /* Mobile L */
  @media (max-width: 425px) {
    width: 250px;
    max-width: calc(100vw - 40px);
  }
  
  /* Mobile M */
  @media (max-width: 375px) {
    width: 250px;
    max-width: calc(100vw - 40px);
  }
  
  /* Mobile S */
  @media (max-width: 320px) {
    width: 250px;
    max-width: calc(100vw - 40px);
  }
  
  /* Laptop L */
  @media (min-width: 1440px) {
    padding: 20px 15px;
  }
  
  /* Tablet */
  @media (max-width: 768px) {
    padding: 12px 8px;
  }
`;

export const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #4CAF50;
  transition: transform 0.2s ease;
  
  ${FeatureItem}:hover & {
    transform: scale(1.15);
  }
  
  /* Laptop L */
  @media (min-width: 1440px) {
    font-size: 3rem;
    margin-bottom: 15px;
  }
  
  /* Tablet */
  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
  
  /* Mobile L */
  @media (max-width: 425px) {
    font-size: 2rem;
  }
  
  /* Mobile S */
  @media (max-width: 320px) {
    font-size: 1.75rem;
    margin-bottom: 8px;
  }
`;

export const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 8px;
  font-weight: 600;
  color: #1F2937;
  
  /* Laptop L */
  @media (min-width: 1440px) {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }
  
  /* Tablet */
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  /* Mobile L */
  @media (max-width: 425px) {
    font-size: 1rem;
  }
  
  /* Mobile S */
  @media (max-width: 320px) {
    font-size: 0.95rem;
    margin-bottom: 6px;
  }
`;

export const FeatureDescription = styled.p`
  font-size: 0.9rem;
  color: #4B5563;
  line-height: 1.4;
  max-width: 260px;
  margin: 0 auto;
  padding: 0 5px;
  box-sizing: border-box;
  
  /* Laptop L */
  @media (min-width: 1440px) {
    font-size: 1rem;
    max-width: 300px;
    line-height: 1.5;
  }
  
  /* Tablet */
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 10px;
  }
  
  /* Mobile L */
  @media (max-width: 425px) {
    font-size: 0.85rem;
    line-height: 1.3;
    padding: 0 5px;
    width: 100%;
  }
  
  /* Mobile S */
  @media (max-width: 320px) {
    font-size: 0.8rem;
    padding: 0;
  }
`;
