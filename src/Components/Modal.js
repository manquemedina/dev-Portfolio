import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { ModalDiv, ModalWindowBtn, ModalWindow, MLink } from "../styles";

const Modal = (props) => {
  const handleClick = () => {
    props.setOpenModal(false);
  };
  return ReactDOM.createPortal(
    <ModalDiv>
      <ModalWindow>
        {/*         <MLink href="#" alt="">
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
        </MLink> */}
        <Link
          to={"/about"}
          style={{ margin: "0 0.75rem", textDecoration: "none" }}
        >
          <MLink>Acerca de</MLink>
        </Link>
        <Link
          to={"/tecnologias"}
          style={{ margin: "0 0.75rem", textDecoration: "none" }}
        >
          <MLink>Tecnologias</MLink>
        </Link>
        <Link
          to={"/proyectos"}
          style={{ margin: "0 0.75rem", textDecoration: "none" }}
        >
          <MLink>Proyectos</MLink>
        </Link>
        <Link
          to={"/arte"}
          style={{ margin: "0 0.75rem", textDecoration: "none" }}
        >
          <MLink>Arte/Diseño</MLink>
        </Link>
        <Link
          to={"/contacto"}
          style={{ margin: "0 0.75rem", textDecoration: "none" }}
        >
          <MLink>Contacto</MLink>
        </Link>
        <ModalWindowBtn onClick={handleClick}>※</ModalWindowBtn>
      </ModalWindow>
    </ModalDiv>,
    document.getElementById("modal")
  );
};

export { Modal };
