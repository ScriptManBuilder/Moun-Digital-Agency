import styled from "styled-components";

// ===== Main Section Container =====
export const ApproachSection = styled.section`
  background: #18161e;
  padding: 20px 0 40px 0;
  text-align: center;
  width: 100%;
  overflow-x: hidden;

  @media (max-width: 600px) {
    padding: 36px 0 18px 0;
  }
`;



// ===== Section Headings =====
export const ApproachTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;

  b {
    font-style: italic;
    color: #ffe066;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const ApproachSubtitle = styled.p`
  color: #e0e0e0;
  font-size: 1.08rem;
  margin-bottom: 36px;

  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`;

// ===== Grid Layout =====
export const ApproachSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* Ensure six cards fit in one row */
  gap: 2.5px; /* Reduced spacing between cards */
  padding: 10px;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px; /* Restrict container width */
  box-sizing: border-box;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* Adjusted for smaller screens */
    gap: 15px;
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr); /* Adjusted for mobile */
    gap: 15px;
    padding: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Single column for very small screens */
    gap: 15px;
    padding: 20px;
  }
`;

// ===== Individual Step Cards =====
export const ApproachStep = styled.div<{ $active?: boolean }>`
  position: relative;
  width: ${({ $active }) => ($active ? "210px" : "190px")}; /* Slightly reduced width */
  height: 240px; /* Slightly reduced height */
  padding: 20px 15px;
  background: ${({ $active }) =>
    $active
      ? "linear-gradient(135deg, #faff00 0%, #e4ff70 100%)"
      : "linear-gradient(to bottom, #F9FAFB, #F1F5F9)"};
  border-radius: 12px;
  box-shadow: ${({ $active }) =>
    $active
      ? "0 8px 30px rgba(0, 0, 0, 0.12), 0 2px 10px rgba(76, 175, 80, 0.2)"
      : "0 4px 20px rgba(0, 0, 0, 0.08)"};
  transition: width 0.4s ease; /* Анимация изменения ширины */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.06);

  @media (max-width: 767px) {
    width: ${({ $active }) => ($active ? "210px" : "190px")};
    max-width: calc(100vw - 40px); /* Равные отступы слева и справа */
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 480px) {
    width: ${({ $active }) => ($active ? "210px" : "190px")};
    max-width: calc(100vw - 40px);
  }
`;

// ===== Step Components =====
export const StepIcon = styled.div<{ $active?: boolean }>`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${({ $active }) =>
    $active
      ? "linear-gradient(135deg, #f0f9ff 0%, #cfe8ff 100%)"
      : "linear-gradient(135deg, #f7fbe9 0%, #fff 100%)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 12px;
  box-shadow: ${({ $active }) =>
    $active ? "0 2px 10px rgba(67,198,172,0.12)" : "none"};
  transition: background 0.25s, box-shadow 0.25s;

  @media (max-width: 600px) {
    width: 38px;
    height: 38px;
    font-size: 1.5rem;
    margin-bottom: 8px;
  }
`;

export const StepTitle = styled.div`
  font-size: 0.9rem; /* Slightly larger font size */
  font-weight: 700; /* Bold for emphasis */
  color: #232946;
  position: absolute; /* Fixed positioning */
  top: 80px; /* Explicitly positioned at the top */
  left: 20px; /* Adjusted for left alignment */
  text-align: left; /* Left alignment */
  width: calc(100% - 40px); /* Adjusted width */
  max-width: 100%;
  padding: 0 2px;
  word-break: break-word;
  line-height: 1.2;
  height: auto; /* Allow dynamic height */

  @media (max-width: 600px) {
    font-size: 0.8rem;
    top: 60px; /* Adjusted for smaller screens */
    left: 15px;
    width: calc(100% - 30px);
    padding: 0 1px;
  }
`;

export const StepDescription = styled.div<{ $active?: boolean }>`
  font-size: 0.75rem; /* Adjusted font size */
  color: #232946;
  margin-top: ${({ $active }) => ($active ? "20px" : "0")}; /* Adjusted margin-top */
  text-align: left; /* Align text to the left */
  font-weight: 400;
  max-height: ${({ $active }) => ($active ? "140px" : "0")}; /* Increased max height */
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  overflow: visible; /* Ensure text is not clipped */
  transition: max-height 0.35s cubic-bezier(.4,0,.2,1), opacity 0.25s;
  padding: 0 2px;
  word-break: break-word;
  line-height: 1.4; /* Increased line height */
  height: ${({ $active }) => ($active ? "auto" : "0")};
  display: block; /* Removed flex properties */

  @media (max-width: 600px) {
    font-size: 0.7rem;
    padding: 0 0.5px;
  }
`;

export const StepArrow = styled.div<{ $active?: boolean }>`
  position: absolute;
  bottom: 12px;
  right: 16px;
  font-size: 1.2rem;
  color: #fff; /* Белая стрелка */
  background: #000; /* Черная заливка */
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  transform: ${({ $active }) => ($active ? "rotate(-90deg)" : "rotate(0deg)")}; /* Rotate arrow upward when active */
  transition: all 0.25s cubic-bezier(.4,0,.2,1);

  @media (max-width: 600px) {
    width: 20px;
    height: 20px;
    font-size: 1rem;
    right: 8px;
    bottom: 8px;
    transform: ${({ $active }) => ($active ? "rotate(-90deg)" : "rotate(0deg)")}; /* Adjusted for smaller screens */
  }
`;