import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 7rem;
  background-color: ${(props) => props.theme.colorSecundario};
  color: ${(props) => props.theme.colorFuente};
  font-family: "Bungee Shade", cursive;
  font-size: 2em;
  box-shadow: ${(props) => props.theme.BoxShadow};
  @media (max-width: 40em) {
    flex-direction: column;
    height: fit-content;
  }
`;

const Toggle = styled.button`
  cursor: pointer;
  height: min-content;
  width: min-content;
  margin: 2rem;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.colorSecundario};
  color: ${(props) => props.theme.colorFuente};
  transition: all 1s ease;
`;
const A = styled.a`
  margin: 0.5rem;
  padding: 0 1rem;
  /* width: 100%; */
  border-radius: 10px;
  text-decoration: none;
  cursor: cell;
  color: ${(props) => props.theme.colorFuente};
  transition: all 0.5s ease;
  :hover {
    color: ${(props) => props.theme.colorPrimario};
    background-color: ${(props) => props.theme.colorHover};
  }
`;

/* const TestImg = (
  <img
    style={{ height: "14rem", margin: "3rem auto 1.5rem auto" }}
    src="https://raw.githubusercontent.com/manquemedina/img/3941266383af06713d2a071681e164e17e070a3a/sketch1653050411022.png"
    alt=""
  />
); */

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
        style={{ width: 55 }}
        src="https://github.com/manquemedina/img/blob/master/fuegoLight.png?raw=true"
        alt=""
      />
    ) : (
      <img
        style={{ width: 55 }}
        src="https://github.com/manquemedina/img/blob/master/fuegoDark.png?raw=true"
        alt=""
      />
    );
  return (
    <Nav>
      {/*       <A href="#" alt="">
        {TestImg}
      </A> */}
      <A href="#" alt="">
        Acerca de
      </A>
      <A href="#" alt="">
        Proyectos
      </A>
      <A href="#" alt="">
        Arte/Diseño
      </A>
      <Toggle onClick={changeTheme}>{icon}</Toggle>
    </Nav>
  );
};
export { Navbar };
