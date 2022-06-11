import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { shakeAlt } from "../animations";

const ModalDiv = styled.div`
  z-index: 5;
  height: 100%;
  position: fixed;
  flex-direction: column;
  top: 0px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  margin: 0 auto;
  transition: all 0.5s ease;
`;
const ModalWindow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
  background-color: #888;
  background-image: url("https://www.transparenttextures.com/patterns/axiom-pattern.png");
  color: black;
  font-family: "Bungee Shade", cursive;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 2em;
`;
/* const ModalLink = styled.a`
  margin: 1rem;
  text-decoration: none;
`; */

const ModalWindowBtn = styled.div`
  color: ${(props) => props.theme.colorFuente};
  border-radius: 10px;
  font-size: 2em;
  transition: all 0.5s ease;
  :hover {
    color: ${(props) => props.theme.colorPrimario};
    background-color: ${(props) => props.theme.colorHover};
  }
`;
const MLink = styled.a`
  margin: 0.5rem;
  padding: 0.5 1rem;
  width: 100%;
  border-radius: 10px;
  text-decoration: none;
  color: ${(props) => props.theme.colorFuente};
  transition: all 0.5s ease;
  :hover {
    color: ${(props) => props.theme.colorPrimario};
    background-color: ${(props) => props.theme.colorHover};
    animation: ${shakeAlt} 0.7s ease forwards;
    animation-iteration-count: 1;
  }
`;

function Modal(props) {
  const handleClick = () => {
    props.setOpenModal(false);
  };
  return ReactDOM.createPortal(
    <ModalDiv>
      <ModalWindow>
        <MLink href="#" alt="">
          Acerca de
        </MLink>
        <MLink href="#" alt="">
          Tecnologias
        </MLink>
        <MLink href="#" alt="">
          Proyectos
        </MLink>
        <MLink href="#" alt="">
          Arte/Diseño
        </MLink>
        <MLink href="#" alt="">
          Contacto
        </MLink>
        <ModalWindowBtn onClick={handleClick}>※</ModalWindowBtn>
      </ModalWindow>
    </ModalDiv>,
    document.getElementById("modal")
  );
}

export { Modal };
