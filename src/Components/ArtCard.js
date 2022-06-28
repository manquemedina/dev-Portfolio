import React from "react";
import { CardTitle, PDescripcion, ArtImg } from "../styles";
const ArtCard = (props) => {
  return (
    <><h1>dsadsad</h1>
      <CardTitle>{props.cardTitle}</CardTitle>
      <ArtImg src={props.imgSrc} />
      <PDescripcion>{props.artInfo}</PDescripcion>
    </>
  );
};

export { ArtCard };
