import React from "react";
import { BackgroundDiv, SectionTitle, GridTecnologías } from "../styles";
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
      <SectionTitle>Tecnologías:</SectionTitle>
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
