import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }

  body {
    font-family: "Arial Regular", sans-serif;
    overflow: hidden;
    background-color: #106544;
  }

  #app {
    height: 100%;
  }
`;
