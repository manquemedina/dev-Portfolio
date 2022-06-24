import React from "react";
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
