import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Navbar } from "./Components/Navbar";
import { PajarrakoWelcome } from "./Components/PajarrakoWelcome";
import { About } from "./Components/About";
import { Modal } from "./Components/Modal";
import { Tecnologias, Title } from "./Components/tecnologias";
import { ProyectCard } from "./Components/ProyectCard";
import { ProyectCardAlt } from "./Components/ProjectCardAlt";
import { themes } from "./themes";
import { slideIn } from "./animations";

//WRAPPERS

const PageWrapper = styled.div`
  /*   margin: 0;
  font-family: "Bungee Shade", cursive;
  font-size: 1em; */
  animation: ${slideIn} 1s 1 ease-in-out;
`;

const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  color: ${(props) => props.theme.colorPrimario};
  background-color: ${(props) => props.theme.colorPrimario};
  /* background-image: url("https://www.transparenttextures.com/patterns/concrete-wall-2.png"); */
  /* background-image: url("https://www.transparenttextures.com/patterns/light-wool.png"); */
  background-image: url("https://www.transparenttextures.com/patterns/axiom-pattern.png");
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
  /* background-image: url("https://www.transparenttextures.com/patterns/light-wool.png"); */
  background-image: url("https://www.transparenttextures.com/patterns/axiom-pattern.png");
  background-color: ${(props) => props.theme.colorPrimario};
  color: ${(props) => props.theme.colorFuente};
`;
const TecnologíasWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding: 1em;
  font-size: 2em;
  background-image: url("https://www.transparenttextures.com/patterns/axiom-pattern.png");
  background-color: ${(props) => props.theme.colorPrimario};
  color: ${(props) => props.theme.colorFuente};
`;
const ProjectsWrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  /* margin: 1rem; */
  padding: 1rem;
  font-size: 2em;
  background-image: url("https://www.transparenttextures.com/patterns/axiom-pattern.png");
  background-color: ${(props) => props.theme.colorPrimario};
  color: ${(props) => props.theme.colorFuente};
  @media (max-width: 980px) {
    flex-direction: column;
  }
`;

function App() {
  const [theme, setTheme] = useState("light");
  const [openModal, setOpenModal] = useState(false);

  return (
    <ThemeProvider theme={themes[theme]}>
      <PageWrapper>
        {openModal && (
          <Modal openModal={openModal} setOpenModal={setOpenModal} />
        )}
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
        <TecnologíasWrapper>
          <Tecnologias />
        </TecnologíasWrapper>
        <ProjectsWrapper>
        <Title>Projectos</Title>
          <ProyectCard
            title={"ToDo List"}
            img={
              "https://github.com/manquemedina/img/blob/master/sketch1653311245669.png?raw=true"
            }
            descripcion={
              "Clásica app para anotar tareas. Manejo de estado, hooks y persistencia de datos en LocalStorage. Desarrollada con React y estilada con styledComponents"
            }
            linkProject={"#"}
            linkRepo={"#"}
          />
          <ProyectCardAlt
            title={"ToDo List"}
            img={
              "https://github.com/manquemedina/img/blob/master/sketch1653311245669.png?raw=true"
            }
            descripcion={
              "Clásica app para anotar tareas. Manejo de estado, hooks y persistencia de datos en LocalStorage. Desarrollada con React y estilada con styledComponents"
            }
            linkProject={"#"}
            linkRepo={"#"}
          />
        </ProjectsWrapper>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
