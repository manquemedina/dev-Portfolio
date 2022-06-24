import React from "react";
import { SectionTitle, GridTecnologías, TecnologiasWrapper } from "../styles";
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
    <TecnologiasWrapper>
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
    </TecnologiasWrapper>
  );
};

export { Tecnologias };
