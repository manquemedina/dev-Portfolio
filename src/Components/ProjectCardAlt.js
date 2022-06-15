import React from "react";
import { logoExternalLink, logoRepo } from "./tecnologias";
import {
  CardWrapper,
  Card,
  CardTitle,
  ProjectImg,
  IconDiv,
  Icon,
  Descripcion,
  PDescripcion,
} from "./ProyectCard";

const ProyectCardAlt = (props) => {
  return (
    <CardWrapper>
      <Descripcion>
        <PDescripcion>{props.descripcion}</PDescripcion>
      </Descripcion>
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
    </CardWrapper>
  );
};
export { ProyectCardAlt };
