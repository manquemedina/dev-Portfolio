const NubeGrande = styled.img`
  z-index: 2;
  width: 24em;
  position: absolute;
  top: 23%;
  left: 12%;
  transition: all 0.5s ease;
  animation: ${shake} 7s infinite ease-in-out;
`;
const NubeChica = styled.img`
  z-index: 2;
  width: 20em;
  position: absolute;
  top: 13%;
  right: 18%;
  transition: all 0.5s ease;
  animation: ${slideInNube} 7s 1 forwards;
`;
const Sol = styled.img`
  z-index: 2;
  width: 11em;
  position: absolute;
  top: 21%;
  left: 32%;
  transition: all 0.3s ease;
  animation: ${slideInNube} 2s ease 1 forwards;
`;

const nubesSol = (
  <>
    <NubeGrande
      src={
        "https://github.com/manquemedina/img/blob/master/nubeGrande.png?raw=true"
      }
      style={{ width: "34em" }}
    />
    <Sol
      src={"https://github.com/manquemedina/img/blob/master/sol.png?raw=true"}
    />
    <NubeChica
      src={
        "https://github.com/manquemedina/img/blob/master/nubeChica.png?raw=true"
      }
    />
  </>
);
