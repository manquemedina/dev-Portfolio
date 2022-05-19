import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { Navbar } from "./Components/Navbar";
import { themes } from "./themes";

const TestImg = (
  <img
    style={{ width: "12rem", margin: "2rem" }}
    src="https://lh3.googleusercontent.com/-eeqkSrxO2PI/YXN0Pi_DM_I/AAAAAAAADWk/XVOf652QnSMQFGPhBFweDlEPMdA5jmkJwCLcBGAsYHQ/s1600/1634956346637639-1.png"
  />
);

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
        {TestImg}
      </WelcomeWrapper>
    </ThemeProvider>
  );
}

export default App;
