import React from "react";
import { WelcomeDiv, WelcomeTitle } from "../styles";

const PajarrakoWelcome = (props) => {
  const pajarrako =
    props.theme === "light" ? (
      <img
        style={{ width: "11em" }}
        src="https://github.com/manquemedina/img/blob/master/sketch1653311245669.png?raw=true"
        alt=""
      />
    ) : (
      <img
        style={{ width: "11em" }}
        src="https://github.com/manquemedina/img/blob/master/pajarrakoInverti2.png?raw=true"
        alt=""
      />
    );
  return (
    <WelcomeDiv>
      <WelcomeTitle>Manque Medina{pajarrako}</WelcomeTitle>
      <WelcomeTitle style={{ fontSize: "1.72em" }}>
        WEB DEVELOPER Front-End
      </WelcomeTitle>
    </WelcomeDiv>
  );
};
export { PajarrakoWelcome };
