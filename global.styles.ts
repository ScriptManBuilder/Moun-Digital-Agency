import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Only prevent horizontal scroll without affecting other styling */
  html, body {
    overflow-x: hidden;
    max-width: 100%;
  }
  
  /* Remove styles that might interfere with existing layouts */
`;

export default GlobalStyles;
