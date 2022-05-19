import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 6rem;
  background-color: ${(props) => props.theme.colorSecundario};
  color: ${(props) => props.theme.colorFuente};
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
    src="https://cdn.iconscout.com/icon/premium/png-256-thumb/moon-1062679-1193901.png"
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
        alt=""
      />
    ) : (
      <img
        style={{ width: 40 }}
        src="https://cdn.iconscout.com/icon/premium/png-256-thumb/moon-1062679-1193901.png"
        alt=""
      />
    );
  return (
    <Nav>
      <a>Acerca de</a>
      <a>Proyectos</a>
      <a>Arte/Diseño</a>
      <Toggle onClick={changeTheme}>{icon}</Toggle>
    </Nav>
  );
};
export { Navbar };
