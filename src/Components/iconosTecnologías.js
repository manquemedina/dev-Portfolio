import React from "react";
import styled from "styled-components";
import { bounce } from "../animations";

const LogoImg = styled.img`
  width: 3.3em;
  transition: all 0.5s ease;
  :hover {
    animation: ${bounce} 4s infinite forwards ease-in-out;
  }
`;
const Logo = (props) => {
  return <LogoImg src={props.imgSrc} />;
};

export { Logo };
