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
  font-family: "Bungee Shade", cursive;
  font-size: 1.8rem;
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
  transition: all 2s ease;
`;
const A = styled.a`
  margin: 0.5rem;
  text-decoration: none;
  color: ${(props) => props.theme.colorFuente};
  :hover {
    color: ${(props) => props.theme.colorPrimario};
  }
`;

const TestImg = (
  <img
    style={{ height: "14rem", margin: "3rem auto 1.5rem auto" }}
    src="https://raw.githubusercontent.com/manquemedina/img/3941266383af06713d2a071681e164e17e070a3a/sketch1653050411022.png"
    alt=""
  />
);

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
      <A href="#" alt="">
        {TestImg}
      </A>
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
