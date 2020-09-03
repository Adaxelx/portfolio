import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "theme/GlobalStyle";
import { theme } from "theme/mainTheme";
import { Lines, Footer } from "../../components"; // czemu "components" nie działa :/
import { Dashboard } from "views";

/* aside */

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.gColor};
`;

const StyledApp = styled.main`
  width: 100%;
  max-width: 1500px;
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.gColor};
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper>
        <StyledApp>
          <GlobalStyle />
          <Lines side="l" />
          <Lines side="r" />
          <Dashboard />
          <Footer />
        </StyledApp>
      </StyledWrapper>
    </ThemeProvider>
  );
};

export default App;
