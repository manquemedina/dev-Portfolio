import React from "react";
import styled from "styled-components";

const WelcomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: space-around;
  justify-content: center;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Bungee Shade", cursive;
  font-size: 2em;
  justify-content: center;
  padding: 1em;
  margin: 1em;
  border-radius: 10px;
  color: ${(props) => props.theme.colorFuente};
  background-color: ${(props) => props.theme.colorSecundario};
  box-shadow: ${(props) => props.theme.BoxShadow};
  transition: all 0.5s ease;
  :hover {
    color: ${(props) => props.theme.colorPrimario};
    background-color: ${(props) => props.theme.colorHover};
  }
`;
const WelcomeTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Bungee Shade", cursive;
  font-size: 1.8em;
  height: fit-content;
  justify-content: center;
  padding: 1em;
  margin: 1em;
  border-radius: 10px;
  color: ${(props) => props.theme.colorFuente};
  background-color: ${(props) => props.theme.colorSecundario};
  box-shadow: ${(props) => props.theme.BoxShadow};
  transition: all 0.5s ease;
  :hover {
    color: ${(props) => props.theme.colorPrimario};
    background-color: ${(props) => props.theme.colorHover};
  }
`;

const PajarrakoWelcome = (props) => {
  const pajarrako =
    props.theme === "light" ? (
      <img
        style={{ width: "13em" }}
        src="https://github.com/manquemedina/img/blob/master/sketch1653311245669.png?raw=true"
        alt=""
      />
    ) : (
      <img
        style={{ width: "13em" }}
        src="https://github.com/manquemedina/img/blob/master/pajarrakoInverti2.png?raw=true"
        alt=""
      />
    );
  return (
    <WelcomeDiv>
      <Title>Hola, soy Manque{pajarrako}</Title>

      <WelcomeTitle>Y hago desarrollo web</WelcomeTitle>
    </WelcomeDiv>
  );
};
export { PajarrakoWelcome };
