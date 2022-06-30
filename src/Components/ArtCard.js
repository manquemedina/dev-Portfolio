import React from "react";
import { /* ArtCardTitle, */ ArtInfo, ArtImg, ArtCardWrapper } from "../styles";
const ArtCard = (props) => {
  return (
    <ArtCardWrapper>
      {/* <ArtCardTitle>{props.cardTitle}</ArtCardTitle> */}
      <ArtImg src={props.imgSrc} />
      <ArtInfo>{props.artInfo}</ArtInfo>
    </ArtCardWrapper>
  );
};

export { ArtCard };
