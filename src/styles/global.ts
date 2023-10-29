import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Inter;
  }

  h1, h2, h3, h4 {
    font-family: sans-serif; // TODO: Informar no README o não uso da Degular, pois fonte é paga.
  } 
`
