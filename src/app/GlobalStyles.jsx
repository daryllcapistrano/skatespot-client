import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'IBM Plex Serif', serif;
    background-color: #1F2226;
    color: #ffffff;
    position: fixed
  }
`;

// Theme
// export const mainBGColor = "#1e2225";
export const mainText = "#ffffff";

export default GlobalStyles;
