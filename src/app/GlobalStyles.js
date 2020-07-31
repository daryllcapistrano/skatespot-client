import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'IBM Plex Serif', serif;
    background-color: #121212;
    color: #000000
  }
  a {
    color: white;
  }
  a:hover{
    color: yellow;
    text-decoration: none;
  }
`;

export default GlobalStyles;
