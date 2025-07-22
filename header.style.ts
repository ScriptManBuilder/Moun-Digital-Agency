import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: #eff0f3;
  width: 100%;
  box-sizing: border-box;
  min-height: 60px; /* Минимальная высота */
  /* При скролле вверх - фиксируем хедер и показываем */
  position: fixed;
  top: 0;
  z-index: 1000;
  transform: translateY(-100%);
  transition: transform 0.8s cubic-bezier(0.1, 0.7, 0.1, 1);
  
  &.visible {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    min-height: 55px;
  }

  @media (max-width: 425px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    min-height: 50px;
  }
    /* Mobile S (320px-374px) */
  @media (max-width: 320px) {
    padding: 6px 8px;
    min-height: 45px;
    gap: 8px; /* Добавляем промежуток между элементами */
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 1;
  min-width: 0; /* Allows text to wrap */

  @media (max-width: 768px) {
    align-items: flex-start;
    flex-shrink: 1;
  }

  @media (max-width: 425px) {
    max-width: 60%; /* Ограничиваем ширину для мобильных */
  }

  @media (max-width: 320px) {
    max-width: 55%;
  }
`;

export const MainTitle = styled.span`
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  font-family: "Inter", "Montserrat", "Roboto", sans-serif;
  color: #18181b;
  line-height: 1;

  /* Laptop L */
  @media (min-width: 1440px) {
    font-size: 3.2rem;
  }

  /* Laptop */
  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  /* Tablet */
  @media (max-width: 768px) {
    font-size: 2.2rem;
    text-align: center;
  }

  /* Mobile L */
  @media (max-width: 425px) {
    font-size: 1.8rem;
  }

  /* Mobile M */
  @media (max-width: 375px) {
    font-size: 1.6rem;
    letter-spacing: 0.03em;
  }

  /* Mobile S */
  @media (max-width: 320px) {
    font-size: 1.3rem;
    letter-spacing: 0.02em;
  }
`;

export const SubTitle = styled.span`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  color: #18181b;
  opacity: 0.8;
  margin-top: 0.2em;
  font-family: "Inter", "Montserrat", "Roboto", sans-serif;
  white-space: nowrap; /* Предотвращаем перенос строк */
  overflow: hidden;
  text-overflow: ellipsis; /* Добавляем многоточие при переполнении */

  /* Laptop L */
  @media (min-width: 1440px) {
    font-size: 1.1rem;
  }

  /* Tablet */
  @media (max-width: 768px) {
    font-size: 0.9rem;
    letter-spacing: 0.12em;
    white-space: nowrap;
  }

  /* Mobile L */
  @media (max-width: 425px) {
    font-size: 0.8rem;
    letter-spacing: 0.08em;
  }

  /* Mobile M */
  @media (max-width: 375px) {
    font-size: 0.75rem;
    letter-spacing: 0.06em;
  }

  /* Mobile S */
  @media (max-width: 320px) {
    font-size: 0.7rem;
    letter-spacing: 0.04em;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0; /* Предотвращаем сжатие кнопок */

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 12px;
    flex-shrink: 0;
  }

  @media (max-width: 425px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 8px;
    flex-shrink: 0;
  }

  @media (max-width: 320px) {
    gap: 6px;
  }
`;

export const HeaderContainer = styled.div`
  /* Создаем контейнер, который будет обеспечивать отступ для контента под хедером */
  width: 100%;
  height: 60px; /* Высота должна быть такой же как у хедера */
  
  @media (max-width: 768px) {
    height: 55px;
  }
  
  @media (max-width: 425px) {
    height: 50px;
  }
  
  @media (max-width: 320px) {
    height: 45px;
  }
`;