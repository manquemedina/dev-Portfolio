import React from "react";
import { CardTitle, PDescripcion, ArtImg, ArtCardWrapper } from "../styles";
const ArtCard = (props) => {
  return (
    <ArtCardWrapper>
      <CardTitle>{props.cardTitle}</CardTitle>
      <ArtImg src={props.imgSrc} />
      <PDescripcion>{props.artInfo}</PDescripcion>
    </ArtCardWrapper>
  );
};

export { ArtCard };
