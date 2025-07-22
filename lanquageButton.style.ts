import styled from "styled-components";

export const LanguageSwitcherWrapper = styled.div`
  position: relative;
  display: inline-block;

  /* Добавляем правый отступ, чтобы кнопки не соприкасались */
  margin-right: 20px;

  @media (max-width: 425px) {
    margin-right: 16px;
  }

  @media (max-width: 320px) {
    margin-right: 12px;
  }
`;

export const LanguageSwitcherButton = styled.button`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background: #e0e2e7;
  border: none;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease;

  /* Laptop L (1440px+) */
  @media (min-width: 1440px) {
    width: 52px;
    height: 52px;
    font-size: 20px;
  }

  /* Laptop (1024px-1439px) */
  @media (max-width: 1024px) {
    width: 46px;
    height: 46px;
    font-size: 17px;
  }

  /* Tablet (768px-1023px) */
  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 16px;
  }

  /* Mobile L (425px-767px) */
  @media (max-width: 425px) {
    width: 40px;
    height: 40px;
    font-size: 15px;
  }

  /* Mobile M (375px-424px) */
  @media (max-width: 375px) {
    width: 38px;
    height: 38px;
    font-size: 14px;
  }

  /* Mobile S (320px-374px) */
  @media (max-width: 320px) {
    width: 36px;
    height: 36px;
    font-size: 13px;
  }
`;

export const LanguageSwitcherDropdown = styled.div`
  position: absolute;
  top: 54px;
  left: 0;
  background: #fff;
  border: 1px solid #eee; /* Fixed typo by removing 'f' */
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  z-index: 10;

  /* Laptop L */
  @media (min-width: 1440px) {
    top: 58px;
  }

  /* Laptop and Tablet */
  @media (max-width: 1024px) {
    top: 52px;
  }

  /* Mobile L */
  @media (max-width: 425px) {
    top: 46px;
    min-width: 100%;
  }

  /* Mobile M and S */
  @media (max-width: 375px) {
    top: 44px;
    left: 50%;
    transform: translateX(-50%);
    min-width: 100px;
  }
`;

export const LanguageSwitcherItem = styled.div<{ selected?: boolean }>`
  padding: 8px 24px;
  background: ${({ selected }) => (selected ? "#faff4b" : "#fff")};
  color: #222;
  cursor: pointer;
  text-align: center;
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};

  /* Laptop L */
  @media (min-width: 1440px) {
    padding: 10px 28px;
    font-size: 16px;
  }

  /* Tablet */
  @media (max-width: 768px) {
    padding: 8px 20px;
    font-size: 15px;
  }

  /* Mobile L */
  @media (max-width: 425px) {
    padding: 8px 16px;
    font-size: 14px;
  }

  /* Mobile S */
  @media (max-width: 320px) {
    padding: 6px 12px;
    font-size: 13px;
  }
`;