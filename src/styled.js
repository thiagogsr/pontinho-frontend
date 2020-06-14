import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }

  body {
    font-family: "Arial Regular", sans-serif;
    background-color: #106544;
    margin: 0;
  }

  #root {
    height: 100%;
  }
`;
