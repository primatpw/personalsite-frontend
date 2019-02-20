import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Karla:400,400i,700,700i|Lora:400,400i,700,700i');
  
  /* CSS Reset by https://alligator.io/css/minimal-css-reset/ */

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    // font-weight: normal;
  }

  ol, ul {
  }

  img {
    max-width: 100%;
    height: auto;
  }

  html,
  body {
    min-height: 100vh;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a {
    font-family: 'Karla', sans-serif;
  }

  body {
    background: #E8E2CC;
  }

  h1 {
    font-size: 4em;
  }
  h2 {
    font-size: 3em;
  }
  h3 {
    font-size: 2.5em;
  }
  p {
    font-size: 1.5em;
    font-weight: normal;
  }
`;
