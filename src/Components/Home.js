import React from "react";
import styled from "styled-components";
import { slideIn } from "../animations";
//estilos (después refactorizar)
import { SectionWrapper } from "../styles";
const HomeTitle = styled.div`
  margin: 1rem;
  font-size: 5.2rem;
  animation: ${slideIn} 1s 1 ease-in-out;
`;

const Home = (props) => {
  const homeImg =
    props.theme === "light" ? (
      <img
        style={{ width: "35rem" }}
        src="https://github.com/manquemedina/img/blob/master/manosGalaxia.png?raw=true"
        alt=""
      />
    ) : (
      <img
        style={{ width: "35rem" }}
        src="https://github.com/manquemedina/img/blob/master/manosGalaxia.png?raw=true"
        alt=""
      />
    );
  return (
    <SectionWrapper>
      <HomeTitle>MANQUE MEDINA</HomeTitle>
      <HomeTitle style={{ fontSize: "1.72rem" }}>
        WEB DEVELOPER Front-End
      </HomeTitle>
      {homeImg}
    </SectionWrapper>
  );
};
export { Home };
