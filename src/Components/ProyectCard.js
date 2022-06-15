import React from "react";
import styled from "styled-components";
import { logoExternalLink, logoRepo } from "./tecnologias";

const CardWrapper = styled.div`
  display: flex;

  width: 100%;
  @media (max-width: 43em) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;
  font-family: "Bungee Shade", cursive;
  font-size: 2rem;
  background-color: ${(props) => props.theme.colorHover};
  color: ${(props) => props.theme.colorFuente};
  box-shadow: ${(props) => props.theme.BoxShadow};
  @media (max-width: 43em) {
    width: auto;
    margin: auto;
  }
  @media (max-width: 688px) {
    width: 60vw;
  }
`;
const CardTitle = styled.h3`
  padding: 1rem;
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.BoxShadow};
  background-color: ${(props) => props.theme.colorPrimario};
  color: ${(props) => props.theme.colorFuente};
`;
const ProjectImg = styled.img`
  width: 14rem;
`;
const IconDiv = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.colorSecundario};
  padding: 1rem;
  width: 100%;
  height: fit-content;
`;
const Icon = styled.button`
  border-radius: 10px;
  border: solid 1px ${(props) => props.theme.colorFuente};
  box-shadow: ${(props) => props.theme.BoxShadow};
  background-color: whitesmoke;
  color: ${(props) => props.theme.colorFuente};
`;
const Descripcion = styled.div`
  width: 50%;
  height: min-content;
  background-color: ${(props) => props.theme.colorPrimario};
  box-shadow: ${(props) => props.theme.BoxShadow};
  text-align: center;
  align-items: center;
  justify-content: space-around;
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;
  font-family: "Bungee Shade", cursive;
  font-size: 2rem;
  background-color: ${(props) => props.theme.colorSecundario};
  color: ${(props) => props.theme.colorFuente};
  @media (max-width: 43em) {
    width: auto;
    margin: 1em auto;
  }
`;
const PDescripcion = styled.p`
  font-family: "Bungee Hairline";
  font-size: 1.5rem;
  font-weight: bolder;
`;

const ProyectCard = (props) => {
  return (
    <CardWrapper>
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
    </CardWrapper>
  );
};
export {
  ProyectCard,
  CardWrapper,
  Card,
  CardTitle,
  ProjectImg,
  IconDiv,
  Icon,
  Descripcion,
  PDescripcion,
};
