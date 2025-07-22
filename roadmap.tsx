import React from 'react';
import { useLocale } from '../LocaleContext';
import {
  RoadmapContainer,
  RoadmapContent,
  RoadmapHeading,
  MainTitle,
  SubTitle,
  Description,
  StepsContainer,
  StepCard,
  StepNumber,
  StepTitle,
  StepDescription,
  SwitchContainer,
  FloatingElement,
  FloatingTagsContainer,
  FloatingTagsRow,
  AnimatedParticles,
} from '../assets/styles/roadmap.styles';

import { FiGlobe, FiFileText,  FiCode } from "react-icons/fi";
import { BsCameraVideoFill } from 'react-icons/bs';
import { FaLaptopCode, FaHandshake, FaSearch, FaRocket } from 'react-icons/fa';


import RightArrow from '../components/RightArrow';
import OrderButton from './orderButton';
import { 
  DesktopArrowContainer, 
  MobileArrowContainer, 
  ArrowContainer, 
  ButtonContainer,
  ResponsiveButtonArrowContainer
} from "../assets/styles/arrowContainer.style";



const Roadmap: React.FC = () => {
  const { localeContent } = useLocale();
  
  const getStepIcon = (stepNumber: string) => {
    switch (stepNumber) {
      case '01':
        return <FaHandshake />;
      case '02':
        return <FaSearch />;
      case '03':
        return <FiFileText />;
      case '04':
        return <FaLaptopCode />;
      case '05':
        return <FiCode />;
      case '06':
        return <FaRocket />;
      default:
        return <FiGlobe />;
    }
  };
  
  const steps = [
  {
    number: '01',
    title: localeContent?.roadmap?.steps?.[0]?.title || 'Introduction and initial briefing',
    description: localeContent?.roadmap?.steps?.[0]?.description || 'We\'ll start with a discovery call to dive into your goals, ideas, and expectations — this helps us understand the big picture from the start.',
    isHighlighted: false
  },
  {
    number: '02',
    title: localeContent?.roadmap?.steps?.[1]?.title || 'Audit & Business Analysis',
    description: localeContent?.roadmap?.steps?.[1]?.description || 'If you already have a website, we\'ll analyze it along with your niche and competitors to identify what can be improved and what will set you apart.',
    isHighlighted: false
  },
  {
    number: '03',
    title: localeContent?.roadmap?.steps?.[2]?.title || 'Tailored Proposal',
    description: localeContent?.roadmap?.steps?.[2]?.description || 'Based on all insights and your completed brief, we\'ll provide a clear estimate for time, budget, and the best solution for your business.',
    isHighlighted: false
  },
  {
    number: '04',
    title: localeContent?.roadmap?.steps?.[3]?.title || 'Project Planning & Agreement',
    description: localeContent?.roadmap?.steps?.[3]?.description || 'We\'ll sign a detailed agreement that outlines all key stages, timelines, and payment terms — so you know exactly what to expect.',
    isHighlighted: true
  },
  {
    number: '05',
    title: localeContent?.roadmap?.steps?.[4]?.title || 'Design & Development',
    description: localeContent?.roadmap?.steps?.[4]?.description || 'You\'ll get regular updates throughout the process. We\'ll share progress, gather your feedback, and adjust based on your vision.',
    isHighlighted: false
  },
  {
    number: '06',
    title: localeContent?.roadmap?.steps?.[5]?.title || 'Testing & Launch',
    description: localeContent?.roadmap?.steps?.[5]?.description || 'Once development is complete, we\'ll run full testing to ensure everything works smoothly. Then we launch and hand over full access with clear instructions.',
    isHighlighted: false
  }
];


  return (
    <RoadmapContainer>
      {/* Анимированные частицы на фоне */}
      <AnimatedParticles>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </AnimatedParticles>
      
      <RoadmapContent>
        <RoadmapHeading>
          <MainTitle>{localeContent?.roadmap?.mainTitle || "Important stages"}</MainTitle>
          <SubTitle>{localeContent?.roadmap?.subTitle || "of the beginning of half-time work"}</SubTitle>
          <Description>{localeContent?.roadmap?.description || "Steps to help create a stress-free project"}</Description>
        </RoadmapHeading>
        
        <StepsContainer>
     

          {steps.map((step, index) => (
            <StepCard 
              key={index}
              className={`step-${index + 1} ${step.isHighlighted ? 'highlight' : ''}`}
            >
             
              <StepNumber className={index % 2 === 0 ? 'odd-step' : 'even-step'}>
                <span className="number-text">{step.number}</span>
                <span className="hover-icon">
                  {getStepIcon(step.number)}
                </span>
              </StepNumber>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
              
              {step.isHighlighted && (
                <SwitchContainer>
                  <BsCameraVideoFill  color="white" />
                </SwitchContainer>
              )}
            </StepCard>
          ))}
        </StepsContainer>
        
        {/* Адаптивный контейнер для кнопки и стрелки */}
        <ResponsiveButtonArrowContainer>
          {/* На больших экранах: стрелка слева, кнопка справа */}
          {/* На мобильных и планшетах: кнопка сверху, стрелка снизу */}
          
          {/* Стрелка для больших экранов (показывается только на десктопах) */}
          <ArrowContainer>
            <DesktopArrowContainer>
              <RightArrow />
            </DesktopArrowContainer>
          </ArrowContainer>
          
          {/* Кнопка центрирована */}
          <ButtonContainer>
            <OrderButton />
          </ButtonContainer>
          
          {/* Стрелка для мобильных устройств и планшетов (показывается только там) */}
          <MobileArrowContainer>
            <RightArrow />
          </MobileArrowContainer>
        </ResponsiveButtonArrowContainer>

        {/* Адаптивная структура плавающих элементов с использованием styled-components */}
        <FloatingTagsContainer>
          {/* Верхний ряд тегов */}
          <FloatingTagsRow className="top-row">
            <FloatingElement className="quality">
              {localeContent?.roadmap?.consultation?.qualityGuarantee || "Quality guarantee"}
            </FloatingElement>
            <FloatingElement className="results">
              {localeContent?.roadmap?.consultation?.workForResults || "We work for results"}
            </FloatingElement>
          </FloatingTagsRow>
          
          {/* Нижний ряд тегов */}
          <FloatingTagsRow className="bottom-row">
            <FloatingElement className="team">
              {localeContent?.roadmap?.consultation?.teamOfExperts || "Team of experts"}
            </FloatingElement>
            <FloatingElement className="success">
              {localeContent?.roadmap?.consultation?.yourSuccess || "Your success is our goal"}
            </FloatingElement>
          </FloatingTagsRow>
        </FloatingTagsContainer>
      </RoadmapContent>
  
    </RoadmapContainer>
    
  );
};

export default Roadmap;
