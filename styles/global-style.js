import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  :root {
    --main-color: #f46dfe;
    --header-height: 70px;
    --text-black-color: #0f1419;
    --text-gray-color: #536471;
  }


  #root {
    width: 100%;
    height: 100%;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-size: 10px;
  }

  body {
    padding: 0;
    margin: 0;
  }

  *{
    box-sizing: border-box;
  }

`;

export default GlobalStyle;
