import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Navbar } from "./Components/Navbar";
import { PajarrakoWelcome } from "./Components/PajarrakoWelcome";
import { About } from "./Components/About";
import { Modal } from "./Components/Modal";
import { Tecnologias } from "./Components/tecnologias";
import { ProyectCard } from "./Components/ProyectCard";
import { themes } from "./themes";
//import styles
import {
  PageWrapper,
  WelcomeWrapper,
  AboutWrapper,
  TecnologíasWrapper,
  TecnologiasTitle,
  ProjectsWrapper,
} from "./styles";

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
          <TecnologiasTitle>Projectos</TecnologiasTitle>
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
        </ProjectsWrapper>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
