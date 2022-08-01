import React from "react";
import { Link } from "react-router-dom";
import {
  AboutTitle,
  /* AboutImg, */
  AboutText,
  AboutLink,
  Blob1,
  Blob2,
  Blob3,
  AboutTextAlt,
  AboutContactBox,
} from "../styles";

const About = (props) => {
  return (
    <>
      <AboutTitle>Acerca de: </AboutTitle>
      {/*  <AboutImg src="https://github.com/manquemedina/ImgsGaleria/blob/master/manosEstrella%201.png?raw=true" /> */}
      <AboutText>
        <Blob1>
          Hola! Soy Manque, desarrollador web front-end, músico y artista
          plástico.
        </Blob1>
      </AboutText>

      <AboutTextAlt>
        <Blob2>
          Vivo en Córdoba, Argentina. Me encuentro en costante formación,
          asimilando nuevas tecnologías, conocimientos y desafíos, y me gustaría
          aportar mis habilidades a otros proyectos.
        </Blob2>
      </AboutTextAlt>
      <AboutContactBox>
        <Blob3>
          Si creés que el tuyo puede ser uno de ésos, pongámonos en
          <Link
            to={"/contacto"}
            style={{ margin: "0 0.75rem", textDecoration: "none" }}
          >
            <AboutLink>contacto!</AboutLink>
          </Link>
        </Blob3>
      </AboutContactBox>
    </>
  );
};

export { About };
