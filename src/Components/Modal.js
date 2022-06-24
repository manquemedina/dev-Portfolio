import React from "react";
import ReactDOM from "react-dom";
import { ModalDiv, ModalWindowBtn, ModalWindow, MLink } from "../styles";

function Modal(props) {
  const handleClick = () => {
    props.setOpenModal(false);
  };
  return ReactDOM.createPortal(
    <ModalDiv>
      <ModalWindow>
        <MLink href="#" alt="">
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
        </MLink>
        <ModalWindowBtn onClick={handleClick}>※</ModalWindowBtn>
      </ModalWindow>
    </ModalDiv>,
    document.getElementById("modal")
  );
}

export { Modal };
