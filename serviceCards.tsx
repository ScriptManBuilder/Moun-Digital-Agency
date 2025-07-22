import React, { useState } from "react";
import { 
  CardsContainer, 
  CardWrapper, 
  CardTitle, 
  CardDescription, 
  CardButton,
  ToggleSwitch,
  CardPrice,
  PricePrefix,
  PriceValue ,
  PriceValueWithDiscount,
  PriceValueDiscount
} from "../assets/styles/serviceCards.styles";
import ContactModal from "./ContactModal";
import { useLocale } from '../LocaleContext';

const ServiceCards: React.FC = () => {
  const { localeContent } = useLocale();

  // Создаем массив карточек из данных локализации
  const cards = localeContent ? [
    {
      title: localeContent.services.cards.onePageWebsite.title,
      description: localeContent.services.cards.onePageWebsite.description,
      price: localeContent.services.cards.onePageWebsite.price,
      button: localeContent.services.cards.onePageWebsite.button
    },
    {
      title: localeContent.services.cards.onlineStore.title,
      description: localeContent.services.cards.onlineStore.description,
      price: localeContent.services.cards.onlineStore.price,
      button: localeContent.services.cards.onlineStore.button
    },
    {
      title: localeContent.services.cards.portfolioSite.title,
      description: localeContent.services.cards.portfolioSite.description,
      price: localeContent.services.cards.portfolioSite.price,
      button: localeContent.services.cards.portfolioSite.button
    },
    {
      title: localeContent.services.cards.customProgram.title,
      description: localeContent.services.cards.customProgram.description,
      price: localeContent.services.cards.customProgram.price,
      button: localeContent.services.cards.customProgram.button
    },
    {
      title: localeContent.services.cards.landingPage.title,
      description: localeContent.services.cards.landingPage.description,
      price: localeContent.services.cards.landingPage.price,
      button: localeContent.services.cards.landingPage.button
    },
    {
      title: localeContent.services.cards.customWebsite.title,
      description: localeContent.services.cards.customWebsite.description,
      price: localeContent.services.cards.customWebsite.price,
      button: localeContent.services.cards.customWebsite.button
    },
  ] : [];

  // Track which card's button is being hovered
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  
  // Состояние для управления модальным окном
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Функция для открытия модального окна
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Функция для закрытия модального окна
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <CardsContainer>
      {cards.map((card, index) => {
        const isButtonHovered = hoveredCardIndex === index;
        const isSpecialCard = index === 3; // 4-я карточка (Corporate Website)
        
        return (
          <CardWrapper 
            key={index} 
            backgroundColor={
              isSpecialCard ? "#23272f" : // 4-я карточка (Corporate Website) - черный фон
              index % 2 === 0 ? "#F3F8DA" : "#E8E4F8"
            }
            isButtonHovered={isButtonHovered}
            isSpecialCard={isSpecialCard}
          >
            <ToggleSwitch 
              isOn={false} 
              isButtonHovered={isButtonHovered} 
            />
            <CardTitle isSpecialCard={isSpecialCard}>{card.title}</CardTitle>
            <CardDescription isSpecialCard={isSpecialCard}>{card.description}</CardDescription>
              <CardPrice>
                <PricePrefix isSpecialCard={isSpecialCard}>
                  {localeContent?.services.pricePrefix || "from"}
                </PricePrefix>
                <PriceValue isSpecialCard={isSpecialCard}>{card.price}</PriceValue>
              </CardPrice>  
             
            
            <CardButton 
              isSpecialCard={isSpecialCard}
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
              onClick={handleOpenModal}
            >
              {card.button || "Order"}
            </CardButton>
          </CardWrapper>
        );
      })}
      
      {/* Компонент модального окна */}
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </CardsContainer>
  );
};

export default ServiceCards;
