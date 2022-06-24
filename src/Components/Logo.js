import React from "react";

import { LogoImg } from "../styles";

const Logo = (props) => {
  return <LogoImg src={props.imgSrc} />;
};

export { Logo };
