import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Navbar } from "./Components/Navbar";
import { Modal } from "./Components/Modal";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Tecnologias } from "./Components/Tecnologias";
import { ProyectCard } from "./Components/ProyectCard";
import { ArtCard } from "./Components/ArtCard";
import { Arte } from "./Components/Arte";
import { Contacto } from "./Components/Contacto";

import { themes } from "./themes";
//import styles
import {
  PageWrapper,
  RoutesWrapper,
  SectionWrapper,
  SectionTitle,
} from "./styles";

function App() {
  const [theme, setTheme] = useState("light");
  const [openModal, setOpenModal] = useState(false);

  return (
    <ThemeProvider theme={themes[theme]}>
      {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal} />}
      <PageWrapper>
        {
          <Navbar
            theme={theme}
            setTheme={setTheme}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        }
        <RoutesWrapper>
          <Routes>
            <Route
              path="/"
              element={
                <SectionWrapper>
                  <Home theme={theme} />
                </SectionWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <SectionWrapper>
                  <About setOpenModal={setOpenModal} />
                </SectionWrapper>
              }
            />
            <Route
              path="/tecnologias"
              element={
                <SectionWrapper>
                  <Tecnologias />
                </SectionWrapper>
              }
            />
            <Route
              path="/proyectos"
              element={
                <SectionWrapper>
                  <SectionTitle>Projectos</SectionTitle>
                  <ProyectCard
                    title={"ToDo List"}
                    img={
                      "https://github.com/manquemedina/img/blob/master/AppNotasScreenshot.jpeg?raw=true"
                    }
                    descripcion={
                      "Clásica app tipo block de notas, permite crear tareas, buscar entre ellas, eliminarlas o marcarlas como completadas. Desarrollada con React y estilada con styledComponents."
                    }
                    linkProject={"https://manquemedina.github.io/TodoMachine/"}
                    linkRepo={"https://github.com/manquemedina/TodoMachine"}
                  />
                </SectionWrapper>
              }
            />
            <Route
              path="/arte"
              element={
                <Arte>
                  <ArtCard
                    cardTitle={"DummieKoi"}
                    imgSrc={
                      "https://github.com/manquemedina/ImgsGaleria/blob/master/Dummie.png?raw=true"
                    }
                    artInfo={"DummieKoi - disponible"}
                  />
                  <ArtCard
                    cardTitle={"DummieKoi - 2"}
                    imgSrc={
                      "https://github.com/manquemedina/ImgsGaleria/blob/master/Dummie2.png?raw=true"
                    }
                    artInfo={"DummieKoi/2 disponible"}
                  />
                  <ArtCard
                    cardTitle={"Chacal - 1"}
                    imgSrc={
                      "https://github.com/manquemedina/ImgsGaleria/blob/master/Chacal1.png?raw=true"
                    }
                    artInfo={"Chacal/1 - disponible"}
                  />{" "}
                  <ArtCard
                    cardTitle={"Chacal - 2"}
                    imgSrc={
                      "https://github.com/manquemedina/ImgsGaleria/blob/master/Chacal2.png?raw=true"
                    }
                    artInfo={"Chacal/2 - disponible"}
                  />{" "}
                  <ArtCard
                    cardTitle={"Chacal - 3"}
                    imgSrc={
                      "https://github.com/manquemedina/ImgsGaleria/blob/master/Chacal3.png?raw=true"
                    }
                    artInfo={"Chacal/3 - disponible"}
                  />{" "}
                  <ArtCard
                    cardTitle={"Chacal/Sakura - 1"}
                    imgSrc={
                      "https://github.com/manquemedina/ImgsGaleria/blob/master/ChacalSakura1.png?raw=true"
                    }
                    artInfo={"Chacal-Sakuras/1 - disponible"}
                  />{" "}
                  <ArtCard
                    cardTitle={"Chacal/Sakura - 2"}
                    imgSrc={
                      "https://github.com/manquemedina/ImgsGaleria/blob/master/ChacalSakura2.png?raw=true"
                    }
                    artInfo={"Chacal-Sakuras/2 - disponible"}
                  />{" "}
                  <ArtCard
                    cardTitle={"Chacal/Sakura - 3"}
                    imgSrc={
                      "https://github.com/manquemedina/ImgsGaleria/blob/master/ChacalSakura3.png?raw=true"
                    }
                    artInfo={"Chacal-Sakuras/3 - disponible"}
                  />{" "}
                  <ArtCard
                    cardTitle={"Cuchillo"}
                    imgSrc={
                      "https://github.com/manquemedina/ImgsGaleria/blob/master/Cuchillo.png?raw=true"
                    }
                    artInfo={"Cuchillo - disponible"}
                  />{" "}
                  <ArtCard
                    cardTitle={"Cuchillo/Calaca"}
                    imgSrc={
                      "https://github.com/manquemedina/ImgsGaleria/blob/master/CuchilloCalaca.png?raw=true"
                    }
                    artInfo={"Cuchillo/Calaca - disponible"}
                  />{" "}
                  <ArtCard
                    cardTitle={"Cuchillo/Calaca/Corazón"}
                    imgSrc={
                      "https://github.com/manquemedina/ImgsGaleria/blob/master/CuchilloCalacaGeom.png?raw=true"
                    }
                    artInfo={"Cuchillo/Calaca/Corazón - disponible"}
                  />{" "}
                  <ArtCard
                    cardTitle={"Zorro"}
                    imgSrc={
                      "https://github.com/manquemedina/ImgsGaleria/blob/master/ZorroByN.png?raw=true"
                    }
                    artInfo={"Zorro - disponible"}
                  />
                  <ArtCard
                    cardTitle={"Zorro"}
                    imgSrc={
                      "https://github.com/manquemedina/ImgsGaleria/blob/master/ZorroColor.png?raw=true"
                    }
                    artInfo={"Zorro Color - disponible"}
                  />
                </Arte>
              }
            />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </RoutesWrapper>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
