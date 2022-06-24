import styled from "styled-components";
import { slideIn, shakeAlt, bounce, shake } from "./animations";

//WRAPPERS

export const PageWrapper = styled.div`
  /*   margin: 0;
  font-family: "Bungee Shade", cursive;
  font-size: 1em; */
  animation: ${slideIn} 1s 1 ease-in-out;
`;
export const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  color: ${(props) => props.theme.colorPrimario};
  background-color: ${(props) => props.theme.colorPrimario};
  /* background-image: url("https://www.transparenttextures.com/patterns/concrete-wall-2.png"); */
  /* background-image: url("https://www.transparenttextures.com/patterns/light-wool.png"); */
  background-image: url("https://www.transparenttextures.com/patterns/axiom-pattern.png");
  background-attachment: fixed;
`;
export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  font-family: "Rubik", sans-serif;
  font-size: 2em;
  /* background-image: url("https://www.transparenttextures.com/patterns/light-wool.png"); */
  background-image: url("https://www.transparenttextures.com/patterns/axiom-pattern.png");
  background-color: ${(props) => props.theme.colorPrimario};
  background-attachment: fixed;
  color: ${(props) => props.theme.colorFuente};
`;
export const TecnologíasWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding: 1em;
  font-size: 2em;
  background-image: url("https://www.transparenttextures.com/patterns/axiom-pattern.png");
  background-color: ${(props) => props.theme.colorPrimario};
  background-attachment: fixed;
  color: ${(props) => props.theme.colorFuente};
`;
export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  margin: 1rem;
  padding: 1rem;
  font-size: 2em;
  background-image: url("https://www.transparenttextures.com/patterns/axiom-pattern.png");
  background-color: ${(props) => props.theme.colorPrimario};
  background-attachment: fixed;
  color: ${(props) => props.theme.colorFuente};
  @media (max-width: 980px) {
    flex-direction: column;
  }
`;

//NAVBAR

export const Nav = styled.nav`
  z-index: 2;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: min-content;
  background-color: ${(props) => props.theme.colorSecundario};
  color: ${(props) => props.theme.colorFuente};
  font-family: "Bungee Shade", cursive;
  font-size: 1.5em;
  box-shadow: ${(props) => props.theme.BoxShadow};
  /* background-image: url("https://www.transparenttextures.com/patterns/concrete-wall-2.png"); */

  @media (max-width: 43em) {
  }
`;

export const Toggle = styled.button`
  cursor: pointer;
  height: min-content;
  width: min-content;
  margin: 1rem;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.colorSecundario};
  color: ${(props) => props.theme.colorFuente};
  transition: all 0.5s ease;
  @media (max-width: 43em) {
    display: none;
  }
`;

export const A = styled.a`
  margin: 0.5rem;
  padding: 0.5 1rem;
  width: 100%;
  border-radius: 10px;
  text-decoration: none;
  color: ${(props) => props.theme.colorFuente};
  transition: all 1s ease;
  :hover {
    color: ${(props) => props.theme.colorPrimario};
    background-color: ${(props) => props.theme.colorHover};
    /* animation: ${shakeAlt} 0.7s ease forwards; */
    animation: ${bounce} 2s infinite forwards ease-in-out;
    animation-iteration-count: 1;
  }

  @media (max-width: 43em) {
    display: none;
  }
`;

export const ModalBtn = styled.div`
  display: none;
  border-radius: 10px;
  font-size: 3em;

  transition: all 0.5s ease;
  :hover {
    color: ${(props) => props.theme.colorPrimario};
    background-color: ${(props) => props.theme.colorHover};
  }
  @media (max-width: 43em) {
    display: flex;
    position: fixed;
    top: -18px;
    right: 1rem;
  }
`;

//ABOUT

export const Title = styled.div`
  font-family: "Bungee Shade", cursive;
  font-size: 1.5em;
  margin: 1em;
`;
export const AboutImg = styled.img`
  margin: 1em;
`;
export const AboutText = styled.div`
  font-family: "Bungee Hairline";
  font-size: 1em;
  font-weight: bolder;
  margin: 4em;
`;

//ICONOS TECNOLOGIAS

export const LogoImg = styled.img`
  width: 3.3em;
  transition: all 0.5s ease;
  :hover {
    animation: ${bounce} 4s infinite forwards ease-in-out;
  }
`;

//MODAL

export const ModalDiv = styled.div`
  z-index: 5;
  height: 100%;
  position: fixed;
  flex-direction: column;
  top: 0px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  margin: 0 auto;
  transition: all 0.5s ease;
`;
export const ModalWindow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
  background-color: #888;
  background-image: url("https://www.transparenttextures.com/patterns/axiom-pattern.png");
  color: black;
  font-family: "Bungee Shade", cursive;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 2em;
`;
export const ModalWindowBtn = styled.div`
  color: ${(props) => props.theme.colorFuente};
  border-radius: 10px;
  font-size: 2em;
  transition: all 0.5s ease;
  :hover {
    color: ${(props) => props.theme.colorPrimario};
    background-color: ${(props) => props.theme.colorHover};
  }
`;
export const MLink = styled.a`
  margin: 0.5rem;
  padding: 0.5 1rem;
  width: 100%;
  border-radius: 10px;
  text-decoration: none;
  color: ${(props) => props.theme.colorFuente};
  transition: all 0.5s ease;
  :hover {
    color: ${(props) => props.theme.colorPrimario};
    background-color: ${(props) => props.theme.colorHover};
    animation: ${shakeAlt} 0.7s ease forwards;
    animation-iteration-count: 1;
  }
`;

//PAJARRAKO WELCOME

export const WelcomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: space-around;
  justify-content: center;
  margin: 1em;
  margin-top: 100px;
  animation: ${slideIn} 1.2s ease-out;
  animation-iteration-count: 1;
  @media (max-width: 43em) {
    margin-top: 3.2em;
  }
`;

export const WelcomeTitle = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  font-family: "Bungee Shade", cursive;
  font-size: 2.6em;
  align-items: center;
  padding: 0.5em;
  margin: 0.5em;
  width: fit-content;
  border-radius: 10px;
  color: ${(props) => props.theme.colorFuente};
  background-color: ${(props) => props.theme.colorSecundario};
  /* background-image: url("https://www.transparenttextures.com/patterns/concrete-wall-2.png"); */
  box-shadow: ${(props) => props.theme.BoxShadow};
  transition: all 0.5s ease;
  :hover {
    color: ${(props) => props.theme.colorPrimario};
    background-color: ${(props) => props.theme.colorHover};
    /* animation: ${shake} 2s infinite ease-in-out; */
  }
`;

//PROJECT CARD

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 43em) {
    flex-direction: column;
  }
`;
export const Card = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;
  font-family: "Bungee Shade", cursive;
  font-size: 2rem;
  background-color: ${(props) => props.theme.colorHover};
  color: ${(props) => props.theme.colorFuente};
  box-shadow: ${(props) => props.theme.BoxShadow};
  @media (max-width: 43em) {
    width: auto;
    margin: auto;
  }
  @media (max-width: 688px) {
    width: 60vw;
  }
`;
export const CardTitle = styled.h3`
  padding: 1rem;
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.BoxShadow};
  background-color: ${(props) => props.theme.colorPrimario};
  color: ${(props) => props.theme.colorFuente};
`;
export const ProjectImg = styled.img`
  width: 14rem;
`;
export const IconDiv = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.colorSecundario};
  padding: 1rem;
  width: 100%;
  height: fit-content;
`;
export const Icon = styled.button`
  border-radius: 10px;
  border: solid 1px ${(props) => props.theme.colorFuente};
  box-shadow: ${(props) => props.theme.BoxShadow};
  background-color: whitesmoke;
  color: ${(props) => props.theme.colorFuente};
`;
export const Descripcion = styled.div`
  width: 45%;
  height: min-content;
  background-color: ${(props) => props.theme.colorPrimario};
  box-shadow: ${(props) => props.theme.BoxShadow};
  text-align: center;
  align-items: center;
  justify-content: space-around;
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;
  font-family: "Bungee Shade", cursive;
  font-size: 2rem;
  background-color: ${(props) => props.theme.colorSecundario};
  color: ${(props) => props.theme.colorFuente};
  @media (max-width: 43em) {
    width: auto;
    margin: 1em auto;
  }
`;
export const PDescripcion = styled.p`
  font-family: "Bungee Hairline";
  font-size: 1.5rem;
  font-weight: bolder;
`;
export const Logo = styled.img`
  width: 2em;
  margin: 1rem;
`;

//TECNOLOGIAS

export const TecnologiasTitle = styled.div`
  font-family: "Bungee Shade", cursive;
  font-size: 1.5em;
  /*   margin: 1em;
 */
  animation: ${slideIn} 1s forwards ease-out;
`;
export const BackgroundDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  width: 100%;
  border-radius: 10px;
  color: ${(props) => props.theme.colorFuente};
  background-color: ${(props) => props.theme.colorSecundario};
  box-shadow: ${(props) => props.theme.BoxShadow};
  transition: all 0.5s ease;
`;
export const GridTecnologías = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(2.5em, 1fr));
  grid-auto-rows: minmax(2rem, 2fr);
  grid-gap: 3rem;
  width: 100%;
  margin: 6em auto;
`;

export const CardLinks = styled.img`
  width: 3em;
  height: 3em;
`;
