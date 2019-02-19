import { createGlobalStyle } from "styled-components";

return createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Karla:400,400i,700,700i|Lora:400,400i,700,700i');

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Karla', sans-serif;
  }

  p, a {
    font-family: 'Lora', serif;
  }
`;
