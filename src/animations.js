import { keyframes } from "styled-components";

//Animaciones
const textBlur = keyframes`
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
  100% { transform: translate(-1px, -2px) rotate(-1deg); }
`;
const shakeAlt = keyframes`
0% {transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg);}
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -50px) rotate(1deg); opacity:0.8}
  85% { transform: translate(-25px, -100px) rotate(22deg); opacity:0.4}
  90% { transform: translate(-25px, -350px) rotate(-45deg);opacity:0.2 }
  100% { transform: translate(-25px, -650px) rotate(-90deg);opacity:0 }
 `;

const slideIn = keyframes`
0% {
    position: relative;
    right: -600px;
    /* opacity: 0; */
  }
100% {
    position: relative;
    right: 0px;
    opacity:1;
  }
`;
const slideInNube = keyframes`
0% {
  top: 23%;
    right: -600px;
    
  }
100% {
  top: 23%;
  right: 18%;
  }
`;

const floating = keyframes`
0% { top: 33%}
  
100% {
   top: 11%
  }

`;

export { textBlur, shake, shakeAlt, slideIn, floating, slideInNube };
