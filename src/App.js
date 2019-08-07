import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/mainTheme';

const App = () => {
  return(
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
      </>
    </ThemeProvider>
  )
}

export default App;
