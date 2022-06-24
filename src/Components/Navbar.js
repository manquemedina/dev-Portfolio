import React from "react";
import { Link } from "react-router-dom";
import { Nav, Toggle, A, ModalBtn } from "../styles";

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
      <Link to={"/"}>※</Link>
      <Link to={"/about"}>Acerca de</Link>
      <Link to={"/tecnologias"}>Tecnologias</Link>
      <Link to={"/proyectos"}>Proyectos</Link>
      <Link to={"/arte-diseño"}>Arte/Diseño</Link>
      <Link to={"/contacto"}>Contacto</Link>
      <ModalBtn onClick={handleClick}>※</ModalBtn>
      <Toggle onClick={changeTheme}>{icon}</Toggle>
    </Nav>
  );
};
export { Navbar };
