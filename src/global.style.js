import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0; 
  height: 100vh;
  min-height: 100%;
  min-width: 100%; 
  width: 100%;
  position: absolute;
  font-family: 'Lora', serif;
  background-color: #fff;
};
`;
