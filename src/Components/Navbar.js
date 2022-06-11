import React from "react";
/* import { useState } from "react"; */
import styled from "styled-components";
import { shakeAlt, bounce } from "../animations";

const Nav = styled.nav`
  z-index: 2;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: min-content;
  background-color: ${(props) => props.theme.colorSecundario};
  color: ${(props) => props.theme.colorFuente};
  font-family: "Bungee Shade", cursive;
  font-size: 1.5em;
  box-shadow: ${(props) => props.theme.BoxShadow};
  /* background-image: url("https://www.transparenttextures.com/patterns/concrete-wall-2.png"); */

  @media (max-width: 43em) {
  }
`;

const Toggle = styled.button`
  cursor: pointer;
  height: min-content;
  width: min-content;
  margin: 1rem;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.colorSecundario};
  color: ${(props) => props.theme.colorFuente};
  transition: all 0.5s ease;
  @media (max-width: 43em) {
    display: none;
  }
`;

const A = styled.a`
  margin: 0.5rem;
  padding: 0.5 1rem;
  width: 100%;
  border-radius: 10px;
  text-decoration: none;
  color: ${(props) => props.theme.colorFuente};
  transition: all 1s ease;
  :hover {
    color: ${(props) => props.theme.colorPrimario};
    background-color: ${(props) => props.theme.colorHover};
    /* animation: ${shakeAlt} 0.7s ease forwards; */
    animation: ${bounce} 2s infinite forwards ease-in-out;
    animation-iteration-count: 1;
  }

  @media (max-width: 43em) {
    display: none;
  }
`;

const ModalBtn = styled.div`
  display: none;
  border-radius: 10px;
  font-size: 3em;

  transition: all 0.5s ease;
  :hover {
    color: ${(props) => props.theme.colorPrimario};
    background-color: ${(props) => props.theme.colorHover};
  }
  @media (max-width: 43em) {
    display: flex;
    position: fixed;
    top: -18px;
    right: 1rem;
  }
`;

const Navbar = (props) => {
  function changeTheme() {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  }
  function handleClick() {
    props.setOpenModal(true);
  }

  const icon =
    props.theme === "light" ? (
      <img
        style={{ width: 40 }}
        src="https://github.com/manquemedina/img/blob/master/fuegoLight.png?raw=true"
        alt=""
      />
    ) : (
      <img
        style={{ width: 40 }}
        src="https://github.com/manquemedina/img/blob/master/fuegoDark.png?raw=true"
        alt=""
      />
    );
  return (
    <Nav>
      <A href="#" alt="">
        Acerca de
      </A>
      <A href="#" alt="">
        Tecnologias
      </A>
      <A href="#" alt="">
        Proyectos
      </A>
      <A href="#" alt="">
        Arte/Diseño
      </A>
      <A href="#" alt="">
        Contacto
      </A>
      <ModalBtn onClick={handleClick}>※</ModalBtn>
      <Toggle onClick={changeTheme}>{icon}</Toggle>
    </Nav>
  );
};
export { Navbar };
export { ModalBtn, A };
