import React from "react";
import { Link } from "react-router-dom";
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
          {" "}
          <Icon>
            <a target={"_blank"} href={props.linkRepo}>
              {logoRepo}
            </a>
          </Icon>
          <Icon>
            <a target={"_blank"} href={props.linkProject}>
              {logoExternalLink}
            </a>
          </Icon>
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
