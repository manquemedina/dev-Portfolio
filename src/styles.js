import styled from "styled-components";
import {
  slideIn,
  slideInLeft,
  slideInBottom,
  slideInTop,
  shakeAlt,
  bounce,
  shake,
} from "./animations";

//WRAPPERSs

export const PageWrapper = styled.div`
  display: flex;
  background-image: url("https://www.transparenttextures.com/patterns/axiom-pattern.png");
  background-color: ${(props) => props.theme.colorPrimario};
  color: ${(props) => props.theme.colorFuente};
`;

export const RoutesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  color: ${(props) => props.theme.colorPrimario};
  background-color: ${(props) => props.theme.colorSecundario};
  background-image: url("https://www.transparenttextures.com/patterns/cartographer.png");
  /* background-image: url("https://www.transparenttextures.com/patterns/axiom-pattern.png"); */
  background-attachment: fixed;
  /* animation: ${slideIn} 1s 1 ease-in-out; */
`;
export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  width: 100%;
  /*  height: 100%; */
  font-family: "Bungee", cursive;
  background-image: url("https://www.transparenttextures.com/patterns/axiom-pattern.png");
  background-attachment: fixed;
  background-color: ${(props) => props.theme.colorPrimario};
  color: ${(props) => props.theme.colorFuente};
`;

export const TecnologiasWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
export const ProyectosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  /*  background-image: url("https://www.transparenttextures.com/patterns/axiom-pattern.png"); */
`;

//NAVBAR

export const Nav = styled.nav`
  z-index: 2;
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colorPrimario};
  color: ${(props) => props.theme.colorFuente};
  font-family: "Bungee", cursive;
  font-size: 1.2em;
  box-shadow: ${(props) => props.theme.BoxShadow};
  /* background-image: url("https://www.transparenttextures.com/patterns/concrete-wall-2.png"); */
  @media (max-width: 565px) {
    display: none;
  }
`;
export const Navlink = styled.div`
  padding: 0.25rem;
  border-radius: 10px;
  color: ${(props) => props.theme.colorFuente};
  transition: all 1s ease;
  :hover {
    color: ${(props) => props.theme.colorPrimario};
    background-color: ${(props) => props.theme.colorHover};
    /*     animation: ${shakeAlt} 0.7s ease forwards;
    animation: ${bounce} 2s infinite forwards ease-in-out;
    animation-iteration-count: 1; */
  }
  @media (max-width: 43em) {
    /* display: none; */
  }
`;
export const Toggle = styled.button`
  cursor: pointer;
  border-radius: 10px;
  border: none;
  /* padding: 0.5rem;
  padding: 0.5rem; */
  position: fixed;
  right: 3rem;
  background-color: ${(props) => props.theme.colorPrimario};
  color: ${(props) => props.theme.colorFuente};
  transition: all 0.5s ease;
  @media (max-width: 685px) {
    display: none;
  }
`;

export const A = styled.a`
  /*   margin: 0.5rem;
  padding: 0.5 1rem; */
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
  color: ${(props) => props.theme.colorFuente};
  transition: all 0.5s ease;
  :hover {
    color: ${(props) => props.theme.colorPrimario};
    background-color: ${(props) => props.theme.colorHover};
  }
  @media (max-width: 565px) {
    display: flex;
    position: fixed;
    margin: 0.5rem;
    top: 0;
    right: 2rem;
    font-size: 5rem;
  }
`;

//HOME

export const HomeTitle = styled.div`
  margin: 1rem;
  font-size: 5.2rem;
  color: ${(props) => props.theme.colorPrimario};
  animation: ${slideIn} 1s 1 ease-in-out;
`;
export const HomeWindow = styled.div`
  margin: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: 80vh;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.BoxShadow};
  background-color: ${(props) => props.theme.colorHover};
  background-attachment: fixed;
  background-image: url("https://www.transparenttextures.com/patterns/cartographer.png");
  animation: ${slideInBottom} 1s 1 ease-in-out;
`;

//ABOUT

export const Title = styled.div`
  font-family: "Bungee Shade", cursive;
  font-size: 1.5em;
  margin: 1em;
`;
export const AboutTitle = styled.div`
  font-family: "Bungee Shade", cursive;
  font-size: 4rem;
  text-align: center;
  margin-top: 3rem;
  animation: ${slideInTop} 1s forwards ease-out;
  @media (max-width: 420px) {
    font-size: 3rem;
  }
`;
export const AboutImg = styled.img`
  object-fit: contain;
  max-height: 10rem;
  margin: 1em;
  border-radius: 30px;
  transition: all 0.5s ease;
  @media (max-width: 430px) {
    max-height: 28rem;
  }
`;
export const AboutText = styled.div`
  font-family: "Bungee Hairline";
  font-size: 3em;
  font-weight: bolder;
  width: 66%;
  padding: 4rem;
  border-radius: 10px;
  color: ${(props) => props.theme.colorFuente};
  background-color: ${(props) => props.theme.colorSecundario};
  background-attachment: fixed;
  box-shadow: ${(props) => props.theme.BoxShadow};
  background-image: url("https://www.transparenttextures.com/patterns/cartographer.png");
  animation: ${slideInLeft} 1s forwards ease-out;
  transition: all ease-in-out;
  @media (max-width: 470px) {
    /* word-break: break-all; */
    font-size: 2em;
  }
`;
export const AboutTextAlt = styled.div`
  font-family: "Bungee Hairline";
  font-size: 3em;
  font-weight: bolder;
  width: 66%;
  margin: 1em;
  padding: 4rem;
  border-radius: 10px;
  color: ${(props) => props.theme.colorFuente};
  background-color: ${(props) => props.theme.colorSecundario};
  background-attachment: fixed;
  box-shadow: ${(props) => props.theme.BoxShadow};
  background-image: url("https://www.transparenttextures.com/patterns/cartographer.png");
  animation: ${slideIn} 1s forwards ease-out;
  transition: all ease-in-out;
  @media (max-width: 470px) {
    /*  word-break: break-all; */
    font-size: 2em;
  }
`;
export const AboutContactBox = styled.div`
  font-family: "Bungee Hairline";
  font-size: 3em;
  font-weight: bolder;
  width: 66%;
  height: min-content;
  margin: 1em;
  padding: 4rem;
  text-align: center;
  justify-content: space-around;
  border-radius: 10px;
  color: ${(props) => props.theme.colorFuente};
  background-color: ${(props) => props.theme.colorSecundario};
  background-attachment: fixed;
  box-shadow: ${(props) => props.theme.BoxShadow};
  background-image: url("https://www.transparenttextures.com/patterns/cartographer.png");
  animation: ${slideIn} 1s forwards ease-out;
  transition: all ease-in-out;
  @media (max-width: 470px) {
    /* word-break: break-all; */
    font-size: 2em;
  }
`;
export const AboutLink = styled.h4`
  display: inline-flex;
  border-radius: 10px;
  padding: 0 0.5rem;
  /*   color: ${(props) => props.theme.colorFuente};
  background-color: ${(props) => props.theme.colorHover};
  box-shadow: ${(props) => props.theme.BoxShadow}; */
  color: ${(props) => props.theme.colorHover};
  background-color: ${(props) => props.theme.colorFuente};
  background-image: url("https://www.transparenttextures.com/patterns/axiom-pattern.png");
  background-attachment: fixed;
  box-shadow: ${(props) => props.theme.BoxShadow};
  :hover {
    animation: ${shake} 0.5s 1 forwards ease-in-out;
    color: ${(props) => props.theme.colorPrimario};
    background-color: ${(props) => props.theme.colorTerciario};
  }
`;

//ABOUT BLOBS
export const Blob1 = styled.div`
  display: flex;
  padding: 2rem;
  color: ${(props) => props.theme.colorFuente};
  background-color: ${(props) => props.theme.colorHover};
  background-image: url("https://www.transparenttextures.com/patterns/axiom-pattern.png");
  background-attachment: fixed;
  box-shadow: ${(props) => props.theme.BoxShadow};
`;
export const Blob2 = styled.div`
  display: flex;
  padding: 2rem;
  color: ${(props) => props.theme.colorHover};
  background-color: ${(props) => props.theme.colorFuente};
  background-image: url("https://www.transparenttextures.com/patterns/axiom-pattern.png");
  background-attachment: fixed;
  box-shadow: ${(props) => props.theme.BoxShadow};
`;
export const Blob3 = styled.div`
  /* display: flex; */
  padding: 2rem;
  color: ${(props) => props.theme.colorFuente};
  background-color: ${(props) => props.theme.colorHover};
  background-image: url("https://www.transparenttextures.com/patterns/axiom-pattern.png");
  background-attachment: fixed;
  box-shadow: ${(props) => props.theme.BoxShadow};
  animation: ${slideInBottom} 1s forwards ease-out;
`;

//ICONOS TECNOLOGIAS

export const LogoImg = styled.img`
  width: 7em;
  margin: 2rem;
  transition: all 0.5s ease;
  :hover {
    animation: ${bounce} 4s infinite forwards ease-in-out;
  }
  @media (max-width: 470px) {
    width: 5em;
    margin: 1rem;
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
  height: 100%;
  /*   width: 100vw; */
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
export const MLink = styled.div`
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
  margin: 1rem;
  height: 100%;
  @media (max-width: 43em) {
    flex-direction: column;
  }
`;
export const Card = styled.div`
  /* width: 45%; */
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
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.BoxShadow};
  background-color: ${(props) => props.theme.colorPrimario};
  color: ${(props) => props.theme.colorFuente};
  transition: all 0.5s ease-in-out;
`;
export const ProjectImg = styled.img`
  object-fit: contain;
  height: 30rem;
  border-radius: 10px;
  @media (max-width: 500px) {
    width: 27rem;
  }
  @media (max-width: 415px) {
    width: 21.2rem;
  }
`;
export const IconDiv = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.colorSecundario};
  padding: 1rem;
  margin-top: 1rem;
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
export const ArtInfo = styled.p`
  font-family: "Bungee Hairline";
  font-size: 1rem;
  font-weight: bold;
`;
export const Logo = styled.img`
  width: 2em;
  margin: 1rem;
`;

//TECNOLOGIAS

/* export const TecnologiasTitle = styled.div`
  font-family: "Bungee Shade", cursive;
  font-size: 1.5em;
  text-align: center;
  animation: ${slideIn} 1s forwards ease-out;
`; */
export const SectionTitle = styled.div`
  font-family: "Bungee Shade", cursive;
  font-size: 4rem;
  text-align: center;
  margin-top: 3rem;
  animation: ${slideIn} 1s forwards ease-out;
  @media (max-width: 420px) {
    font-size: 3rem;
  }
`;
export const BackgroundDiv = styled.div`
  display: flex;
  flex-direction: column;
  /*  padding: 1em; */
  /* width: 100%; */
  border-radius: 10px;
  color: ${(props) => props.theme.colorFuente};
  background-color: ${(props) => props.theme.colorSecundario};
  box-shadow: ${(props) => props.theme.BoxShadow};
  transition: all 0.5s ease;
`;
export const GridTecnologías = styled.div`
  display: grid;
  grid-auto-rows: auto;
  align-items: center;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fit, minmax(70px, 100px));
  grid-auto-rows: minmax(70px, 100px);
  grid-gap: 1rem;
  margin: 6em 0;
  @media (max-width: 470px) {
    grid-template-columns: repeat(auto-fit, minmax(30px, 55px));
    grid-auto-rows: minmax(30px, 100px);
  }
`;

export const CardLinks = styled.img`
  width: 3em;
  height: 3em;
`;

//ARTE Y DISEÑO

export const GridArte = styled.div`
  display: grid;
  /* width: 100%; */
  //DEFINIR GRID!!!!
  /* grid-template-columns: 50% 50%; */
  grid-template-columns: 33% 33% 33%;
  /* grid-template-rows: 2fr; */
  /* align-items: center; */
  /* align-content: space-around; */
  justify-content: center;
  grid-template-rows: repeat(auto-fit, minmax(1fr, 3fr));
  grid-auto-columns: repeat(auto-fit, minmax(1fr, 3fr));
  grid-gap: 3rem;
  /* margin: 6em 0; */
  @media (max-width: 780px) {
    grid-template-columns: 50% 50%;
    /*   grid-auto-rows: minmax(30px, 100px); */
  }
  @media (max-width: 620px) {
    grid-template-columns: 100%;
    /*   grid-auto-rows: minmax(30px, 100px); */
  }
`;

export const ArtCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  /* background-image: unset; */
  background: url("https://www.transparenttextures.com/patterns/cartographer.png");
  background-attachment: fixed;
  box-shadow: ${(props) => props.theme.BoxShadow};
  transition: all 0.35s ease;
  //hover de toda la card
  @media (min-width: 770px) {
    /*     :hover {
      transform: scale(1.8);
      z-index: 1;
      background-color: ${(props) => props.theme.colorHover};
    } */
  }
`;

export const ArtCardTitle = styled.h3`
  width: fit-content;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.BoxShadow};
  background-color: ${(props) => props.theme.colorHover};
  color: ${(props) => props.theme.colorFuente};
`;
//acá hay tela para cortar con el tamaño de img, grid, y el fondo que se chinguea
export const ArtImg = styled.img`
  /* max-height: 35rem; */
  //avel que onda ésto del object-fit!
  object-fit: scale-down;
  /* object-fit: cover; */
  max-height: 32rem;
  margin-top: 1.5rem;
  border-radius: 10px;
  transition: all 0.35s ease;
  //hover solo img
  :hover {
    transform: scale(1.7);
    z-index: 1;
    /*  background-color: ${(props) => props.theme.colorHover}; */
    margin: 0 auto;
  }
`;

//CONTACTO
export const ContactoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  width: 100%;
  height: 100%;
  background-image: url("https://www.transparenttextures.com/patterns/axiom-pattern.png");
  background-attachment: fixed;
  background-color: ${(props) => props.theme.colorPrimario};
  color: ${(props) => props.theme.colorFuente};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const FormBg = styled.div`
  background-image: url("https://www.transparenttextures.com/patterns/cartographer.png");
  margin: 4rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colorHover};
  box-shadow: ${(props) => props.theme.BoxShadow};
`;
export const Input = styled.input`
  width: 85%;
  margin: 2rem;
  height: 3rem;
  font-size: large;
  font-family: "Bungee", cursive;
  box-shadow: ${(props) => props.theme.BoxShadow};
`;
export const TextArea = styled.textarea`
  margin: 2rem;
  width: 85%;
  height: 12rem;
  font-size: large;
  font-family: "Bungee", cursive;
  box-shadow: ${(props) => props.theme.BoxShadow};
`;
export const ContactButton = styled.button`
  font-size: x-large;
  font-family: "Bungee", cursive;
  margin: 1rem;
  padding: 1rem;
  background-image: url("https://www.transparenttextures.com/patterns/axiom-pattern.png");
  background-attachment: fixed;
  background-color: ${(props) => props.theme.colorPrimario};
  color: ${(props) => props.theme.colorFuente};
  :hover {
    color: ${(props) => props.theme.colorPrimario};
    background-color: ${(props) => props.theme.colorFuente};
    animation: ${shake} 0.3s 1 ease-in-out;
  }
`;
