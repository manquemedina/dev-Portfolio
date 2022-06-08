import { keyframes } from "styled-components";

const LightTheme = {
  colorPrimario: "#fff",
  colorSecundario: "#999",
  colorTerciario: "#666",
  colorFuente: "#000",
  colorHover: "#FF7600",
  BoxShadow:
    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
};
const DarkTheme = {
  colorPrimario: "#000",
  colorSecundario: "#444",
  colorTerciario: "#777",
  colorFuente: "#fff",
  colorHover: "#A44CFF",
  BoxShadow: "0px 3px 2px 0px rgba(250,250,250,0.42)",
};
//Animaciones
const textDrop = keyframes`
from {
    text-shadow: 1px 0px 0px #555;
  }
  
  to {
    text-shadow: 2px 6px 3px #555;
  }
  to {
    text-shadow: -4px 0px 6px #555;
  }
`;

const shake = keyframes`
0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

//Paleta 1 violetas
/* const LightTheme = {
  colorPrimario: "#DFC3F7",
  colorSecundario: "#AAAEFC",
  colorTerciario: "#475291",
  colorFuente: "#000",
};
const DarkTheme = {
  colorPrimario: "#475291",
  colorSecundario: "#AAAEFC",
  colorTerciario: "#DFC3F7",
  colorFuente: "#fff",
}; */

//Paleta 2
/* const LightTheme = {
  colorPrimario: "#024059",
  colorSecundario: "#AAAEFC",
  colorTerciario: "#04BF8A",
  colorFuente: "#000",
};
const DarkTheme = {
  colorPrimario: "#04BF8A",
  colorSecundario: "#AAAEFC",
  colorTerciario: "#024059",
  colorFuente: "#fff",
}; */

const themes = { light: LightTheme, dark: DarkTheme };

export { LightTheme, DarkTheme, themes, textDrop, shake };
