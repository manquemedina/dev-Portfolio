import React from "react";
import { SectionWrapper, SectionTitle, GridArte } from "../styles";

const Arte = (children) => {
  return (
    <SectionWrapper>
      <SectionTitle>Arte y Diseño</SectionTitle>
      <GridArte>{children}</GridArte>
    </SectionWrapper>
  );
};

export { Arte };
