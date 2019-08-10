import React from 'react';
import styled,{ ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/mainTheme';

/* components */

/* main */

import Home from './components/main/Home'
import About from './components/main/About'
import Projects from './components/main/Projects'

/* aside */ 

import Lines from './components/aside/Lines'

const StyledApp = styled.main`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  background-color: ${({theme}) => theme.gColor}
`

const App = () => {
  return(
    <ThemeProvider theme={theme}>
      <StyledApp>
        <GlobalStyle />
        <Lines side='l'/>
        <Lines side='r'/>
        <Home/>
        <About/>
        <Projects/>
      </StyledApp>
    </ThemeProvider>
  )
}

export default App;
