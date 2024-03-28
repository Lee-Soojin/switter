import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }


  #root {
    width: 100%;
  }

  body {
    padding: 0;
    margin: 0;
  }

`;

export default GlobalStyle;
