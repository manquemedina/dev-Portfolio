import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { ModalDiv, ModalWindow, MLink } from "../styles";

const Modal = (props) => {
  const handleClick = () => {
    props.setOpenModal(false);
  };
  return ReactDOM.createPortal(
    <ModalDiv>
      <ModalWindow>
        <Link
          to={"/about"}
          style={{ margin: "0 0.75rem", textDecoration: "none" }}
          onClick={handleClick}
        >
          <MLink>Acerca de</MLink>
        </Link>
        <Link
          to={"/tecnologias"}
          style={{ margin: "0 0.75rem", textDecoration: "none" }}
          onClick={handleClick}
        >
          <MLink>Tecnologias</MLink>
        </Link>
        <Link
          to={"/proyectos"}
          style={{ margin: "0 0.75rem", textDecoration: "none" }}
          onClick={handleClick}
        >
          <MLink>Proyectos</MLink>
        </Link>
        <Link
          to={"/arte"}
          style={{ margin: "0 0.75rem", textDecoration: "none" }}
          onClick={handleClick}
        >
          <MLink>Arte/Diseño</MLink>
        </Link>
        <Link
          to={"/contacto"}
          style={{ margin: "0 0.75rem", textDecoration: "none" }}
          onClick={handleClick}
        >
          <MLink>Contacto</MLink>
        </Link>
      </ModalWindow>
    </ModalDiv>,
    document.getElementById("modal")
  );
};

export { Modal };
