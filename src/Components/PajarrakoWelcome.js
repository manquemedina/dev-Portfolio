import React from "react";

const PajarrakoWelcome = (props) => {
  function changeTheme() {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  }

  const pajarrako =
    props.theme === "light" ? (
      <img
        style={{ width: "22rem" }}
        src="https://github.com/manquemedina/img/blob/master/sketch1653311245669.png?raw=true"
        alt=""
      />
    ) : (
      <img
        style={{ width: "22rem" }}
        src="https://github.com/manquemedina/img/blob/master/pajarrakoInverti2.png?raw=true"
        alt=""
      />
    );
  return <div>{pajarrako}</div>;
};
export { PajarrakoWelcome };
