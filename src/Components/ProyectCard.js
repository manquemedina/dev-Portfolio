import React from "react";
import {
  ProyectosWrapper,
  Card,
  CardTitle,
  ProjectImg,
  IconDiv,
  Icon,
  Descripcion,
  PDescripcion,
} from "../styles";
import { logoExternalLink, logoRepo } from "./logos";

const ProyectCard = (props) => {
  return (
    <ProyectosWrapper>
      <Card>
        <CardTitle>{props.title}</CardTitle>
        <ProjectImg src={props.img} />
        <IconDiv>
          <Icon href={props.linkProject} target={"blank"}>
            {logoExternalLink}
          </Icon>
          <Icon href={props.linkRepo}>{logoRepo}</Icon>
        </IconDiv>
      </Card>
      <Descripcion>
        <PDescripcion>{props.descripcion}</PDescripcion>
      </Descripcion>
    </ProyectosWrapper>
  );
};
export {
  ProyectCard,
  /* CardWrapper, */
  Card,
  ProjectImg,
  IconDiv,
  Icon,
  Descripcion,
  PDescripcion,
};
