import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "theme/GlobalStyle";
import { theme } from "theme/mainTheme";
import { Lines } from "components";
import { Dashboard } from "views";

/* aside */

const StyledApp = styled.main`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.gColor};
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <GlobalStyle />

        {/* <Lines side="l" />
        <Lines side="r" /> */}
        <Dashboard />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
