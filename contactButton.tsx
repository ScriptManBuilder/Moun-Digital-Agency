// Импортируем React и хук useState для управления состоянием компонента
import React, { useState } from "react";
// Импортируем стилизованную кнопку из файла стилей
import { ContactButton as StyledContactButton } from "../assets/styles/contactButton.styles";
// Импортируем компонент модального окна с формой
import ContactModal from "./ContactModal";
// Импортируем хук для локализации
import { useLocale } from '../LocaleContext';

const ContactButton: React.FC = () => {
  const { localeContent } = useLocale();
  // Создаём состояние для отслеживания открыто ли модальное окно
  // isModalOpen - текущее состояние (true = открыто, false = закрыто)
  // setIsModalOpen - функция для изменения состояния
  // useState(false) - начальное значение (модальное окно закрыто)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Функция для открытия модального окна
  // Вызывается когда пользователь нажимает на кнопку
  const handleOpenModal = () => {
    setIsModalOpen(true); // Устанавливаем состояние в true (открываем модальное окно)
  };

  // Функция для закрытия модального окна
  // Вызывается когда пользователь нажимает крестик или кликает вне модального окна
  const handleCloseModal = () => {
    setIsModalOpen(false); // Устанавливаем состояние в false (закрываем модальное окно)
  };

  return (
    <>
      {/* Стилизованная кнопка с обработчиком клика */}
      <StyledContactButton onClick={handleOpenModal}>
        {localeContent?.header.contactUs || "Contact Us"}
      </StyledContactButton>
      
      {/* Компонент модального окна с формой */}
      {/* isOpen={isModalOpen} - передаём текущее состояние (открыто/закрыто) */}
      {/* onClose={handleCloseModal} - передаём функцию закрытия */}
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default ContactButton;