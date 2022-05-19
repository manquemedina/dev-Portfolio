import React from "react";
import styled from "styled-components";
import { themes, LightTheme, DarkTheme } from "../themes";
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 6rem;
  background-color: ${(props) => props.theme.colorSecundario};
  color: ${(props) => props.theme.colorPrimario};
`;
/* const SunIcon = (
  <img
    style={{ width: 40 }}
    src="https://icons.veryicon.com/png/o/miscellaneous/unicons/sun-34.png"
  />
); */
/* const MoonIcon = (
  <img
    style={{ width: 40 }}
    src="https://www.pngfind.com/pngs/m/223-2232869_png-file-svg-moon-icon-circle-png-transparent.png"
  />
); */
const Toggle = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.colorSecundario};
  color: ${(props) => props.theme.colorPrimario};
  transition: all 0.5s ease;
`;

const Navbar = (props) => {
  function changeTheme() {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  }
  const icon =
    props.theme === "light" ? (
      <img
        style={{ width: 40 }}
        src="https://icons.veryicon.com/png/o/miscellaneous/unicons/sun-34.png"
      />
    ) : (
      <img
        style={{ width: 40 }}
        src="https://www.pngfind.com/pngs/m/223-2232869_png-file-svg-moon-icon-circle-png-transparent.png"
      />
    );
  return (
    <Nav>
      <a href="#">Acerca de</a>
      <a>Proyectos</a>
      <a>Arte/Diseño</a>
      <Toggle onClick={changeTheme}>{icon}</Toggle>
    </Nav>
  );
};
export { Navbar };
