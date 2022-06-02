import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Navbar } from "./Components/Navbar";
import { PajarrakoWelcome } from "./Components/PajarrakoWelcome";
import { themes } from "./themes";

const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colorPrimario};
  color: ${(props) => props.theme.colorPrimario};
`;

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={themes[theme]}>
      <WelcomeWrapper>
        <Navbar theme={theme} setTheme={setTheme} />
        <PajarrakoWelcome theme={theme} setTheme={setTheme} />
      </WelcomeWrapper>
    </ThemeProvider>
  );
}

export default App;
