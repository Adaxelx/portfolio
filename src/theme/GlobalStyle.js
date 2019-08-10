import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap&subset=latin-ext'); @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-size: 1.6rem;
  }
  ${({ theme }) => theme.devicePort.tablet}{
    html {
      font-size: 90%;
    }
  } 
  ${({ theme }) => theme.deviceLand.laptop}{
    html {
      font-size: 100%;
    }
  } 
  ${({ theme }) => theme.deviceLand.laptopL}{
    html {
        font-size: 110%;
    }
  } 
`;

export default GlobalStyle;