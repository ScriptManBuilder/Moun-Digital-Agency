import React, { useState } from "react";
import { useLocale } from "../LocaleContext";
import { OrderButton as StyledOrderButton } from "../assets/styles/orderButton.style";
import ContactModal from "./ContactModal";

interface OrderButtonProps {
  text?: string;
}

const OrderButton: React.FC<OrderButtonProps> = ({ text }) => {
  const { localeContent } = useLocale();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const buttonText = text || localeContent?.orderButton?.signUpConsultation || "Sign up for a consultation";

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <StyledOrderButton onClick={handleOpenModal}>
        {buttonText}
      </StyledOrderButton>
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default OrderButton;