import React from "react";
import { Link } from "react-router-dom";
import { SectionTitle, AboutImg, AboutText, AboutLink } from "../styles";

const About = (props) => {
  return (
    <>
      <SectionTitle>Acerca de: </SectionTitle>
      <AboutImg src="https://github.com/manquemedina/ImgsGaleria/blob/master/manosEstrella%201.png?raw=true" />
      <AboutText>
        Hola! Soy Manque, desarrollador web front-end, músico y artista
        plástico. Vivo en Córdoba, Argentina. Me encuentro en costante
        formación, asimilando nuevas tecnologías, conocimientos y desafíos, y me
        gustaría aportar mis habilidades a otros proyectos. Si creés que el tuyo
        puede ser uno de ésos, pongámonos en
        <Link
          to={"/contacto"}
          style={{ margin: "0 0.75rem", textDecoration: "none" }}
          onClick={props.setOpenModal(false)}
        >
          <AboutLink>contacto!</AboutLink>
        </Link>
      </AboutText>
    </>
  );
};

export { About };
