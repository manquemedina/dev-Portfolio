import React from "react";
import { BackgroundDiv, TecnologiasTitle, GridTecnologías } from "../styles";
import {
  logoHTML,
  logoCSS,
  logoJS,
  logoReact,
  logoSASS,
  logoStyled,
  logoGit,
  logoGitHub,
  logoFigma,
} from "./logos";
//COMPONENTE
const Tecnologias = () => {
  return (
    <BackgroundDiv>
      <TecnologiasTitle>Tecnologías:</TecnologiasTitle>
      <GridTecnologías>
        {logoHTML}
        {logoCSS}
        {logoJS}
        {logoReact}
        {logoSASS}
        {logoStyled}
        {logoGit}
        {logoGitHub}
        {logoFigma}
      </GridTecnologías>
    </BackgroundDiv>
  );
};

export { Tecnologias };
