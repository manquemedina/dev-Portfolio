import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { WelcomeSection } from "./Components/WelcomeSection";
import { Navbar } from "./Components/Navbar";
import { themes/* , LighTheme, DarkTheme */ } from "./themes";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={themes[theme]}>
      <PageWrapper>
        <Navbar theme={theme} setTheme={setTheme} />
        <WelcomeSection />
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
