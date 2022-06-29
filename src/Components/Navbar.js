import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navlink, Toggle, ModalBtn } from "../styles";

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
        src="https://github.com/manquemedina/img/blob/master/toggleLight.png?raw=true"
        alt=""
      />
    ) : (
      <img
        style={{ width: 40 }}
        src="https://github.com/manquemedina/img/blob/master/toggleDark.png?raw=true"
        alt=""
      />
    );
  return (
    <>
      {" "}
      <Nav>
        {" "}
        <Link to={"/"} style={{ margin: "0 0.75rem", textDecoration: "none" }}>
          <Navlink>※</Navlink>
        </Link>
        <Link
          to={"/about"}
          style={{ margin: "0 0.75rem", textDecoration: "none" }}
        >
          <Navlink>Acerca de</Navlink>
        </Link>
        <Link
          to={"/tecnologias"}
          style={{ margin: "0 0.75rem", textDecoration: "none" }}
        >
          <Navlink>Tecnologías</Navlink>
        </Link>
        <Link
          to={"/proyectos"}
          style={{ margin: "0 0.75rem", textDecoration: "none" }}
        >
          <Navlink>Proyectos</Navlink>
        </Link>
        <Link
          to={"/arte"}
          style={{ margin: "0 0.75rem", textDecoration: "none" }}
        >
          <Navlink>Arte/Diseño</Navlink>
        </Link>
        <Link
          to={"/contacto"}
          style={{ margin: "0 0.75rem", textDecoration: "none" }}
        >
          <Navlink>Contacto</Navlink>
        </Link>{" "}
        <Toggle onClick={changeTheme}>{icon}</Toggle>
      </Nav>{" "}
      <ModalBtn onClick={handleClick}>※</ModalBtn>
    </>
  );
};
export { Navbar };
