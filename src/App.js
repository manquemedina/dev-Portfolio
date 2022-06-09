import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Navbar } from "./Components/Navbar";
import { PajarrakoWelcome } from "./Components/PajarrakoWelcome";
import { About } from "./Components/About";
import { Modal } from "./Components/Modal";
import { themes } from "./themes";

//WRAPPERS

const PageWrapper = styled.div`
  margin: 0 auto;
  /*   background-color: ${(props) => props.theme.colorSecundario};
  color: ${(props) => props.theme.colorFuente}; */
  font-family: "Bungee Shade", cursive;
  font-size: 1em;
  height: fit-content;
`;

const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colorPrimario};
  color: ${(props) => props.theme.colorPrimario};
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  font-family: "Rubik", sans-serif;
  font-size: 2em;
  background-color: ${(props) => props.theme.colorPrimario};
  color: ${(props) => props.theme.colorFuente};
`;

function App() {
  const [theme, setTheme] = useState("light");
  const [openModal, setOpenModal] = useState(false);

  return (
    <ThemeProvider theme={themes[theme]}>
      <PageWrapper>
        <WelcomeWrapper>
          <Navbar
            theme={theme}
            setTheme={setTheme}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
          <PajarrakoWelcome theme={theme} setTheme={setTheme} />
        </WelcomeWrapper>
        <AboutWrapper>
          <About />
        </AboutWrapper>
        {/* una vez que tena el estado ésto de abajo va a andar */}
        {openModal && (
          <Modal openModal={openModal} setOpenModal={setOpenModal} />
        )}
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
