import React from "react";
import { SectionTitle, AboutImg, AboutText } from "../styles";

const About = () => {
  return (
    <>
      <SectionTitle>Acerca de: </SectionTitle>
      <AboutImg src="https://github.com/manquemedina/ImgsGaleria/blob/master/manosEstrella%201.png?raw=true" />
      <AboutText>
        Hola! Soy Manque, desarrollador web front-end, músico y artista
        plástico. Vivo en Córdoba, Argentina. Me encuentro en costante
        formación, asimilando nuevas tecnologías, conocimientos y desafíos, y me
        gustaría que mis habilidades sean de utilidad en otros proyectos. Si
        creés que el tuyo puede ser uno de ésos pongámonos en
        {/* <a href="#"> */} contacto!{/* </a> */}
      </AboutText>
    </>
  );
};

export { About };
