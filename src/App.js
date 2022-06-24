import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Navbar } from "./Components/Navbar";
import { PajarrakoWelcome } from "./Components/PajarrakoWelcome";
import { About } from "./Components/About";
import { Modal } from "./Components/Modal";
import { Tecnologias } from "./Components/tecnologias";
import { ProyectCard } from "./Components/ProyectCard";
import { Home } from "./Components/Home";
import { themes } from "./themes";
//import styles
import { RoutesWrapper, SectionTitle } from "./styles";
import { SectionWrapper } from "./Components/Home";

function App() {
  const [theme, setTheme] = useState("light");
  const [openModal, setOpenModal] = useState(false);

  return (
    <ThemeProvider theme={themes[theme]}>
      {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal} />}

      <RoutesWrapper>
        <Routes>
          <Route
            path="/"
            element={
              <SectionWrapper>
                <Navbar
                  theme={theme}
                  setTheme={setTheme}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
                <Home />
              </SectionWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <SectionWrapper>
                <Navbar
                  theme={theme}
                  setTheme={setTheme}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
                <About />
              </SectionWrapper>
            }
          />
          <Route
            path="/tecnologias"
            element={
              <SectionWrapper>
                <Navbar
                  theme={theme}
                  setTheme={setTheme}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
                <Tecnologias />
              </SectionWrapper>
            }
          />
          <Route
            path="/proyectos"
            element={
              <SectionWrapper>
                <Navbar
                  theme={theme}
                  setTheme={setTheme}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
                <SectionTitle>Projectos</SectionTitle>
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
              </SectionWrapper>
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
