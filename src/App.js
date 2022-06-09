import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Navbar } from "./Components/Navbar";
import { PajarrakoWelcome } from "./Components/PajarrakoWelcome";
import { About } from "./Components/About";
import { Modal } from "./Components/Modal";
import { themes } from "./themes";
import { shake, slideInNube } from "./animations";

//WRAPPERS

const PageWrapper = styled.div`
  margin: 0 auto;
  /*   background-color: ${(props) => props.theme.colorSecundario};
  color: ${(props) => props.theme.colorFuente}; */
  font-family: "Bungee Shade", cursive;
  font-size: 1em;
  height: fit-content;
`;

const NubeGrande = styled.img`
  z-index: 2;
  width: 24em;
  position: absolute;
  top: 23%;
  left: 12%;
  transition: all 0.5s ease;
  animation: ${shake} 7s infinite ease-in-out;
`;
const NubeChica = styled.img`
  z-index: 2;
  width: 20em;
  position: absolute;
  top: 13%;
  right: 18%;
  transition: all 0.5s ease;
  animation: ${slideInNube} 7s 1 forwards;
`;
/* const Sol = styled.img`
  z-index: 2;
  width: 11em;
  position: absolute;
  top: 21%;
  left: 32%;
  transition: all 0.3s ease;
  animation: ${slideInNube} 2s ease 1 forwards;
`; */

const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colorPrimario};
  /* background-image: url("https://github.com/manquemedina/img/blob/master/nubeGrande.png?raw=true"); */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
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
          <NubeGrande
            src={
              "https://github.com/manquemedina/img/blob/master/nubeGrande.png?raw=true"
            }
          />
          {/*           <Sol
            src={
              "https://github.com/manquemedina/img/blob/master/sol.png?raw=true"
            }
          /> */}
          <NubeChica
            src={
              "https://github.com/manquemedina/img/blob/master/nubeChica.png?raw=true"
            }
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
