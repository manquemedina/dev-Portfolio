import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
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
  RoutesWrapper,
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
      {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal} />}
      <Navbar
        theme={theme}
        setTheme={setTheme}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <RoutesWrapper>
        <Routes>
          <Route
            path="/"
            element={
              <WelcomeWrapper>
                <PajarrakoWelcome theme={theme} setTheme={setTheme} />
              </WelcomeWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <AboutWrapper>
                <About />
              </AboutWrapper>
            }
          />
          <Route
            path="/tecnologias"
            element={
              <TecnologíasWrapper>
                <Tecnologias />
              </TecnologíasWrapper>
            }
          />
          <Route
            path="/proyectos"
            element={
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
            }
          />
          {/*         <Route path="/arte-diseño" element={<ArteDiseño />} />
        <Route path="/contacto" element={<Contacto />} /> */}
        </Routes>
      </RoutesWrapper>
    </ThemeProvider>
  );
}

export default App;
