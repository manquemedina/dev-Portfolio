import React from "react";
import { ArtCardTitle, PDescripcion, ArtImg, ArtCardWrapper } from "../styles";
const ArtCard = (props) => {
  return (
    <ArtCardWrapper>
      <ArtCardTitle>{props.cardTitle}</ArtCardTitle>
      <ArtImg src={props.imgSrc} />
      <PDescripcion>{props.artInfo}</PDescripcion>
    </ArtCardWrapper>
  );
};

export { ArtCard };
