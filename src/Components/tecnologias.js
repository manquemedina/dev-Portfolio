import React from "react";
import styled from "styled-components";
import { Logo } from "./iconosTecnologías";
import { slideIn } from "../animations";

//LAYOUT
const Title = styled.div`
  font-family: "Bungee Shade", cursive;
  font-size: 1.5em;
  margin: 1em;
  animation: ${slideIn} 1s forwards ease-out;
`;
const GridTecnologías = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(2.5em, 1fr));
  grid-auto-rows: minmax(2rem, 2fr);
  grid-gap: 2rem;
  width: 100%;
`;
const CardLinks = styled.img`
  width: 3em;
  height: 3em;
`;
//LOGOS CARD
const logoExternalLink = (
  <CardLinks src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxLjQxNDIxOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyZWN0IGhlaWdodD0iMTI4IiBpZD0iRXh0ZXJuYWwtTGluayIgc3R5bGU9ImZpbGw6bm9uZTsiIHdpZHRoPSIxMjgiIHg9IjAuMTc2IiB5PSIwLjkxNyIvPjxwYXRoIGQ9Ik0xMTIuODQ2LDYzLjAzMmMxLjE2MiwwLjUwNSAxLjI0OSwwLjcwOCAxLjMzLDEuODg1YzAsOS40MjUgMC4wODksMTguODUgLTAuMDAyLDI4LjI3NGMtMC4xNzcsMTEuMjUgLTkuOTIxLDIxLjYxNCAtMjEuODYxLDIxLjcyNmMtMTguODA0LDAuMDU2IC0zNy42MDgsMC4xNzQgLTU2LjQxLC0wLjAwMmMtMTEuMjMyLC0wLjE3MyAtMjEuNTM5LC05LjgzMSAtMjEuNzI1LC0yMS43MjVjLTAuMTcxLC0xOC44NDggLTAuMTcxLC0zNy42OTggMCwtNTYuNTQ2YzAuMTc3LC0xMS4yODkgOS45NjIsLTIxLjYxNSAyMS44NjEsLTIxLjcyN2MwLDAgMjguMTM3LDAgMjguMTM3LDBjMCwwIDEuMzEyLDAuMTg0IDEuNzc2LDEuMDhjMC42MjQsMS4yMDQgLTAuMzM1LDIuODIxIC0xLjc3NiwyLjkyYy05LjQwOCwwIC0xOC44MTYsLTAuMDg3IC0yOC4yMjQsMC4wMDFjLTkuMjA3LDAuMTQyIC0xNy42ODYsOC4wMzMgLTE3Ljc3NiwxNy44ODdjLTAuMDU2LDE4Ljc3OCAtMC4xNjksMzcuNTU4IDAuMDAxLDU2LjMzNmMwLjE0Niw5LjI0MyA4LjExNiwxNy42ODQgMTcuODg3LDE3Ljc3NmMxOC43NzksMC4wNTYgMzcuNTU4LDAuMTc0IDU2LjMzNiwtMC4wMDFjOS4yMTMsLTAuMTQyIDE3LjY4MSwtOC4xMTcgMTcuNzc2LC0xNy44ODdjMCwwIDAsLTI4LjExMiAwLC0yOC4xMTJjMCwwIDAuNTMzLC0yLjQ4MyAyLjY3LC0xLjg4NVptLTAuOTMsLTQ4LjExNWMwLjAzOSwtMC4wMDEgMC4wODIsLTAuMDAxIDAuMTI3LDBsMC4xMzMsMGwwLjExMywwLjAwNGwwLjAzLDAuMDAxbDAuMDA1LDAuMDAxbDAuMDA5LDBjMS4wMTYsMC4xMiAxLjgwMywwLjk2OCAxLjg0MywxLjk5NGwwLDMyYy0wLjA4MSwyLjA2MiAtMy44ODYsMi45MDMgLTQsMGwwLC0yNy4xNzJsLTQ0LjU4Niw0NC41ODZjLTEuNzE4LDEuNTYyIC0yLjY1NiwwLjM5IC0zLjEyMiwtMC4zNzNjLTAuNDY1LC0wLjc2NCAtMC4zMTYsLTEuNzg1IDAuMjk0LC0yLjQ1NWw0NC41ODYsLTQ0LjU4N2wtMjcuMzI5LC0wLjAwNWMtMS40NzcsLTAuMTc1IC0xLjQyNSwtMC41ODYgLTEuNjkxLC0xLjIyOWMtMC41LC0xLjIwNyAwLjQzNCwtMi43MSAxLjg0OCwtMi43NjVsMzEuNzQsMFoiIHN0eWxlPSJmaWxsLXJ1bGU6bm9uemVybzsiLz48L3N2Zz4=" />
);
const logoRepo = (
  <CardLinks src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWwoJLnN0MHtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDt9Cl1dPjwvc3R5bGU+PGc+PHBhdGggY2xhc3M9InN0MCIgZD0iTTI1NiwzMkMxMzIuMywzMiwzMiwxMzQuOCwzMiwyNjEuN2MwLDEwMS41LDY0LjIsMTg3LjUsMTUzLjIsMjE3LjljMTEuMiwyLjEsMTUuMy01LDE1LjMtMTEuMSAgIGMwLTUuNS0wLjItMTkuOS0wLjMtMzkuMWMtNjIuMywxMy45LTc1LjUtMzAuOC03NS41LTMwLjhjLTEwLjItMjYuNS0yNC45LTMzLjYtMjQuOS0zMy42Yy0yMC4zLTE0LjMsMS41LTE0LDEuNS0xNCAgIGMyMi41LDEuNiwzNC4zLDIzLjcsMzQuMywyMy43YzIwLDM1LjEsNTIuNCwyNSw2NS4yLDE5LjFjMi0xNC44LDcuOC0yNSwxNC4yLTMwLjdjLTQ5LjctNS44LTEwMi0yNS41LTEwMi0xMTMuNSAgIGMwLTI1LjEsOC43LTQ1LjYsMjMtNjEuNmMtMi4zLTUuOC0xMC0yOS4yLDIuMi02MC44YzAsMCwxOC44LTYuMiw2MS42LDIzLjVjMTcuOS01LjEsMzctNy42LDU2LjEtNy43YzE5LDAuMSwzOC4yLDIuNiw1Ni4xLDcuNyAgIGM0Mi44LTI5LjcsNjEuNS0yMy41LDYxLjUtMjMuNWMxMi4yLDMxLjYsNC41LDU1LDIuMiw2MC44YzE0LjMsMTYuMSwyMywzNi42LDIzLDYxLjZjMCw4OC4yLTUyLjQsMTA3LjYtMTAyLjMsMTEzLjMgICBjOCw3LjEsMTUuMiwyMS4xLDE1LjIsNDIuNWMwLDMwLjctMC4zLDU1LjUtMC4zLDYzYzAsNi4xLDQsMTMuMywxNS40LDExQzQxNS45LDQ0OS4xLDQ4MCwzNjMuMSw0ODAsMjYxLjcgICBDNDgwLDEzNC44LDM3OS43LDMyLDI1NiwzMnoiLz48L2c+PC9zdmc+" />
);

//LOGOS TECNOLOGIAS
const logoHTML = (
  <Logo imgSrc="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwb2x5bGluZSBmaWxsPSIjRTQ0RTI1IiBwb2ludHM9IjAsNTEyIDUxMiw1MTIgNTEyLDAgMCwwIDAsNTEyICAiLz48cGF0aCBkPSJNNTEyLDM2NC42NDVjLTM4LjU4LTM5LjYwNC0xNjAuMzA5LTE4OS4zMDEtMTYwLjMwOS0xODkuMzAxSDE1NS4wODZsMTcuNzkzLDE5NC43MjlMMzE1LjM5NSw1MTJINTEyICAgVjM2NC42NDUiIG9wYWNpdHk9IjAuMSIvPjxwb2x5bGluZSBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjE2MS4zMTgsMTEwLjM5NSAxNzQuNjU4LDExMC4zOTUgMTc0LjY1OCwxMjUuMTk0IDE4OS44MTQsMTI1LjE5NCAxODkuODE0LDExMC4zOTUgICAgMjAzLjE1MiwxMTAuMzk1IDIwMy4xNTIsMTUzLjAxOCAxODkuODE0LDE1My4wMTggMTg5LjgxNCwxMzUuODUxIDE3NC42NTgsMTM1Ljg1MSAxNzQuNjU4LDE1My4wMTggMTYxLjMxOCwxNTMuMDE4ICAgIDE2MS4zMTgsMTEwLjM5NSAgIi8+PHBvbHlsaW5lIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMjA4LjYwOCwxMTAuMzk1IDI0OS44MzQsMTEwLjM5NSAyNDkuODM0LDEyMC40NTggMjM1Ljg5LDEyMC40NTggMjM1Ljg5LDE1My4wMTggMjIyLjU1MiwxNTMuMDE4ICAgIDIyMi41NTIsMTIwLjQ1OCAyMDguNjA4LDEyMC40NTggMjA4LjYwOCwxMTAuMzk1ICAiLz48cG9seWxpbmUgZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIyNTUuMjkyLDExMC4zOTUgMjcyLjg3MywxMTAuMzk1IDI3OS41NywxMzYuNDI1IDI4Ni4yLDExMC4zOTUgMzAzLjc5NCwxMTAuMzk1IDMwMy43OTQsMTUzLjAxOCAgICAyOTIuODgsMTUzLjAxOCAyOTIuODgsMTIwLjcwMSAyODQuNjQ3LDE1My4wMTggMjc0LjUyMSwxNTMuMDE4IDI2Ni4yMDUsMTIwLjcwMSAyNjYuMjA1LDE1My4wMTggMjU1LjI5MiwxNTMuMDE4IDI1NS4yOTIsMTEwLjM5NSAgICAgIi8+PHBvbHlsaW5lIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMzEyLjI4MSwxMTAuMzk1IDMyNS42MTcsMTEwLjM5NSAzMjUuNjE3LDE0Mi4zNjMgMzQ2LjgzOSwxNDIuMzYzIDM0Ni44MzksMTUzLjAxOCAgICAzMTIuMjgxLDE1My4wMTggMzEyLjI4MSwxMTAuMzk1ICAiLz48cG9seWxpbmUgZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIyNTMuMjUzLDI5MC45MzggMjUzLjExOCwyOTAuOTM4IDE2NS42NDUsMjkwLjkzOCAxNTYuMDIzLDE4NS41OTkgMTU1LjA4NiwxNzUuMzQ0ICAgIDI1My4xMTgsMTc1LjM0NCAyNTMuMjUzLDE3NS4zNDQgMzUxLjE4NiwxNzUuMzQ0IDM1MC4yNTEsMTg1LjU5OSAzNDguNDY3LDIwNC45NzggMzQ3LjY4MSwyMTMuNTcgMzQ3LjU1NiwyMTMuNTcgMjUzLjI1MywyMTMuNTcgICAgMjUzLjExOCwyMTMuNTcgMTk3Ljg3MSwyMTMuNTcgMjAxLjQ0OSwyNTIuNzE0IDI1My4xMTgsMjUyLjcxNCAyNTMuMjUzLDI1Mi43MTQgMzMzLjU2OCwyNTIuNzE0IDM0NC4xMTgsMjUyLjcxNCAzNDMuMTYyLDI2Mi45NzkgICAgMzMzLjk2NCwzNjMuNjE0IDMzMy4zNzUsMzcwLjA3MyAyNTMuMjU0LDM5MS43NTUgMjUzLjI1NCwzOTEuNzYxIDI1My4wNzIsMzkxLjgxMSAxNzIuODc5LDM3MC4wNzMgMTY3LjM5NiwzMTAuMDUzICAgIDE4NS41MDgsMzEwLjA1MyAyMDYuNjk1LDMxMC4wNTMgMjA5LjQ4MywzNDAuNTM5IDI1My4wODIsMzUyLjAzNSAyNTMuMTE4LDM1Mi4wMjYgMjUzLjExOCwzNTIuMDIxIDI5Ni43NzksMzQwLjUxNiAgICAzMDEuMzI2LDI5MC45MzggMjUzLjI1MywyOTAuOTM4ICAiLz48L2c+PC9zdmc+" />
);
const logoCSS = (
  <Logo imgSrc="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBvbHlnb24gZmlsbD0iIzFGNjJBRSIgcG9pbnRzPSIyNy4zNzcsMjguODg5IDE2LjAwMSwzMiA0LjYyNSwyOC44ODkgMiwwIDMwLjAwMiwwICAiLz48cG9seWdvbiBmaWxsPSIjMzQ3REM2IiBwb2ludHM9IjE2LDIgMTYsMjkuNzUgMjUuMjMyLDI3LjAwOCAyNy42ODgsMiAgIi8+PHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIyNC4zNjMsNiA3LjYwNyw2IDgsMTAgMTYsMTAgOC4yNSwxMi45OSA4LjYxOSwxNyAxOS41MDIsMTcgMTkuMTU4LDIxIDE2LDIxLjk5IDEyLjg2MSwyMC45ODQgICAgMTIuNTMzLDE5IDguODAzLDE5IDkuMjYyLDIzLjk4NyAxNiwyNS45OSAyMi43MjgsMjMuOTg2IDIzLjcxOSwxMi45OSAxNi4wMjYsMTIuOTkgMjQsMTAgICIvPjwvZz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=" />
);
const logoJS = (
  <Logo imgSrc="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJfeDMxXzg3LWpzIj48Zz48cmVjdCBoZWlnaHQ9IjQ1OS45OTgiIHN0eWxlPSJmaWxsOiNGMERCNEY7IiB3aWR0aD0iNDU5Ljk5NiIgeD0iMjYuMDAyIiB5PSIyNi4wMDEiLz48cGF0aCBkPSJNMjc2LjMzMSwzODQuNzU5YzAsNDQuNzY3LTI2LjI4Niw2NS4yLTY0LjU4Niw2NS4yYy0zNC42MDEsMC01NC42MjMtMTcuODY1LTY0Ljg5Mi0zOS41MjkgICAgbDM1LjIxOC0yMS4yNTVjNi43NzcsMTIuMDEzLDEyLjkzOCwyMi4xNzcsMjcuODI2LDIyLjE3N2MxNC4xNjksMCwyMy4yMDctNS41NDQsMjMuMjA3LTI3LjIwOFYyMzcuMjFoNDMuMjI3VjM4NC43NTkgICAgTDI3Ni4zMzEsMzg0Ljc1OXoiIHN0eWxlPSJmaWxsOiMzMjMzMzA7Ii8+PHBhdGggZD0iTTM3OC41OTgsNDQ5Ljk1OWMtNDAuMTQ3LDAtNjYuMTI0LTE5LjA5OS03OC43NTQtNDQuMTUxbDM1LjIxOS0yMC4zMzIgICAgYzkuMjQxLDE1LjA5NSwyMS4zNTYsMjYuMjg2LDQyLjYxMSwyNi4yODZjMTcuODY2LDAsMjkuMzY0LTguOTMyLDI5LjM2NC0yMS4zNTVjMC0xNC43ODctMTEuNzA0LTIwLjAyMS0zMS41Mi0yOC43NWwtMTAuNzgxLTQuNjIgICAgYy0zMS4yMTQtMTMuMjQ2LTUxLjg1My0yOS45ODMtNTEuODUzLTY1LjJjMC0zMi40NDcsMjQuNzQ1LTU3LjA5LDYzLjI0OC01Ny4wOWMyNy41MTgsMCw0Ny4yMzIsOS41NDksNjEuNDAyLDM0LjYwMyAgICBsLTMzLjY3OSwyMS41NjJjLTcuMzkyLTEzLjI0Ni0xNS40MDEtMTguNDgxLTI3LjgyNS0xOC40ODFjLTEyLjYzLDAtMjAuNjM5LDguMDEtMjAuNjM5LDE4LjQ4MSAgICBjMCwxMi45MzgsOC4wMDksMTguMTc2LDI2LjU5NCwyNi4yODVsMTAuNzgsNC42MjFjMzYuNzU5LDE1LjcxLDU3LjM5NywzMS44MzIsNTcuMzk3LDY3Ljk3NCAgICBDNDUwLjE2NCw0MjguNjAyLDQxOS41NjUsNDQ5Ljk1OSwzNzguNTk4LDQ0OS45NTlMMzc4LjU5OCw0NDkuOTU5eiIgc3R5bGU9ImZpbGw6IzMyMzMzMDsiLz48L2c+PC9nPjxnIGlkPSJMYXllcl8xIi8+PC9zdmc+" />
);
const logoReact = (
  <Logo imgSrc="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTI4IDEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzYxREFGQiI+PGNpcmNsZSBjeD0iNjQiIGN5PSI0Ny41IiByPSI5LjMiLz48cGF0aCBkPSJNNjQgODEuN2M3LjMgNy4xIDE0LjUgMTEuMyAyMC4zIDExLjMgMS45IDAgMy43LS40IDUuMi0xLjMgNS4yLTMgNy4xLTEwLjUgNS4zLTIxLjItLjMtMS45LS43LTMuOC0xLjItNS44IDItLjYgMy44LTEuMiA1LjYtMS44IDEwLjEtMy45IDE1LjctOS4zIDE1LjctMTUuMiAwLTYtNS42LTExLjQtMTUuNy0xNS4yLTEuOC0uNy0zLjYtMS4zLTUuNi0xLjguNS0yIC45LTMuOSAxLjItNS44IDEuNy0xMC45LS4yLTE4LjUtNS40LTIxLjUtMS41LS45LTMuMy0xLjMtNS4yLTEuMy01LjcgMC0xMyA0LjItMjAuMyAxMS4zLTcuMi03LjEtMTQuNC0xMS4zLTIwLjItMTEuMy0xLjkgMC0zLjcuNC01LjIgMS4zLTUuMiAzLTcuMSAxMC41LTUuMyAyMS4yLjMgMS45LjcgMy44IDEuMiA1LjgtMiAuNi0zLjggMS4yLTUuNiAxLjgtMTAuMSAzLjktMTUuNyA5LjMtMTUuNyAxNS4yIDAgNiA1LjYgMTEuNCAxNS43IDE1LjIgMS44LjcgMy42IDEuMyA1LjYgMS44LS41IDItLjkgMy45LTEuMiA1LjgtMS43IDEwLjcuMiAxOC4zIDUuMyAyMS4yIDEuNS45IDMuMyAxLjMgNS4yIDEuMyA1LjguMiAxMy00IDIwLjMtMTF6bS01LjYtMTMuNWMxLjguMSAzLjcuMSA1LjYuMSAxLjkgMCAzLjggMCA1LjYtLjEtMS44IDIuNC0zLjcgNC42LTUuNiA2LjctMS45LTIuMS0zLjgtNC4zLTUuNi02Ljd6bS0xMi40LTEwLjNjMSAxLjcgMS45IDMuMyAzIDQuOS0zLjEtLjQtNi0uOS04LjgtMS41LjktMi43IDEuOS01LjUgMy4xLTguMy44IDEuNiAxLjcgMy4zIDIuNyA0Ljl6bS01LjgtMjQuMWMyLjgtLjYgNS43LTEuMSA4LjgtMS41LTEgMS42LTIgMy4yLTMgNC45LTEgMS43LTEuOSAzLjMtMi43IDUtMS4zLTIuOS0yLjMtNS43LTMuMS04LjR6bTUuNSAxMy43YzEuMy0yLjcgMi43LTUuNCA0LjMtOC4xIDEuNS0yLjYgMy4yLTUuMiA0LjktNy44IDMtLjIgNi0uMyA5LjEtLjMgMy4yIDAgNi4yLjEgOS4xLjMgMS44IDIuNiAzLjQgNS4yIDQuOSA3LjggMS42IDIuNyAzIDUuNCA0LjMgOC4xLTEuMyAyLjctMi43IDUuNC00LjMgOC4xLTEuNSAyLjYtMy4yIDUuMi00LjkgNy44LTMgLjItNiAuMy05LjEuMy0zLjIgMC02LjItLjEtOS4xLS4zLTEuOC0yLjYtMy40LTUuMi00LjktNy44LTEuNi0yLjctMy01LjQtNC4zLTguMXptMzkuMS01LjRsLTIuNy01Yy0xLTEuNy0xLjktMy4zLTMtNC45IDMuMS40IDYgLjkgOC44IDEuNS0uOSAyLjgtMS45IDUuNi0zLjEgOC40em0wIDEwLjhjMS4yIDIuOCAyLjIgNS42IDMuMSA4LjMtMi44LjYtNS43IDEuMS04LjggMS41IDEtMS42IDItMy4yIDMtNC45LjktMS41IDEuOC0zLjIgMi43LTQuOXptMi4zIDM0LjdjLS44LjUtMS44LjctMi45LjctNC45IDAtMTEtNC0xNy0xMCAyLjktMy4xIDUuNy02LjYgOC41LTEwLjUgNC43LS40IDkuMi0xLjEgMTMuNC0yLjEuNSAxLjguOCAzLjYgMS4xIDUuNCAxLjQgOC41LjMgMTQuNi0zLjEgMTYuNXptNS4yLTUyLjdjMTEuMiAzLjIgMTcuOSA4LjEgMTcuOSAxMi42IDAgMy45LTQuNiA3LjgtMTIuNyAxMC45LTEuNi42LTMuNCAxLjItNS4yIDEuNy0xLjMtNC4xLTIuOS04LjMtNC45LTEyLjYgMi00LjMgMy43LTguNSA0LjktMTIuNnptLTgtMjguMmMxLjEgMCAyIC4yIDIuOS43IDMuMyAxLjkgNC41IDcuOSAzLjEgMTYuNS0uMyAxLjctLjcgMy41LTEuMSA1LjQtNC4yLS45LTguNy0xLjYtMTMuNC0yLjEtMi43LTMuOS01LjYtNy40LTguNS0xMC41IDYtNS45IDEyLjEtMTAgMTctMTB6bS0xNC43IDIwLjFjLTEuOC0uMS0zLjctLjEtNS42LS4xcy0zLjggMC01LjYuMWMxLjgtMi40IDMuNy00LjYgNS42LTYuNyAxLjkgMi4xIDMuOCA0LjQgNS42IDYuN3ptLTI4LjctMTkuNGMuOC0uNSAxLjgtLjcgMi45LS43IDQuOSAwIDExIDQgMTcgMTAtMi45IDMuMS01LjcgNi42LTguNSAxMC41LTQuNy40LTkuMiAxLjEtMTMuNCAyLjEtLjUtMS44LS44LTMuNi0xLjEtNS40LTEuNC04LjUtLjMtMTQuNSAzLjEtMTYuNXptLTUuMiA1Mi43Yy0xMS4yLTMuMi0xNy45LTguMS0xNy45LTEyLjYgMC0zLjkgNC42LTcuOCAxMi43LTEwLjkgMS42LS42IDMuNC0xLjIgNS4yLTEuNyAxLjMgNC4xIDIuOSA4LjMgNC45IDEyLjYtMiA0LjMtMy43IDguNi00LjkgMTIuNnptMi4xIDExYy4zLTEuNy43LTMuNSAxLjEtNS40IDQuMi45IDguNyAxLjYgMTMuNCAyLjEgMi43IDMuOSA1LjYgNy40IDguNSAxMC41LTYgNS45LTEyLjEgMTAtMTcgMTAtMS4xIDAtMi0uMi0yLjktLjctMy40LTEuOS00LjUtOC0zLjEtMTYuNXpNMzMuNiAxMTIuM2MyLjItMi43IDIuMy01LjcgMS4xLTguNy0xLjItMy0zLjctNC40LTYuOC00LjUtMy43LS4xLTcuNSAwLTExLjIgMGgtLjd2MjUuOWgzdi05LjhoNC43Yy42IDAgMS4xLjIgMS40LjdsNiA5LjNjLjEuMi40LjUuNi41aDMuOWMtMi40LTMuNy00LjctNy4yLTcuMS0xMC44IDIuMS0uMyAzLjktMSA1LjEtMi42em0tMTQuNi0uMnYtOS45aDEuMWMyLjMgMCA0LjctLjEgNyAuMSAyLjcuMSA0LjYgMi4yIDQuNiA0LjlzLTIuMiA0LjgtNC45IDQuOWMtMi40LjEtNC44IDAtNy44IDB6TTU3LjcgMTEzLjRjLTEuNi03LTgtOC44LTEyLjktNi42LTMuOCAxLjctNS41IDUtNS42IDkuMS0uMSAzLjEuOCA1LjkgMy4yIDggMi43IDIuNCA2IDIuNyA5LjQgMi4xIDEuOS0uNCAzLjYtMS4zIDQuOS0yLjctLjUtLjctMS0xLjQtMS41LTItMi44IDIuNC01LjkgMy4yLTkuMyAxLjYtMi4yLTEuMS0zLjMtMy44LTMuNS01LjhoMTUuNXYtMS4zYy4xLS45IDAtMS43LS4yLTIuNHptLTE1LjEgMS42Yy0uMy0zIDIuNy02LjIgNi02LjIgMy44LS4xIDYuMiAyLjIgNi4zIDYuMmgtMTIuM3pNNzMuMyAxMDYuM2MtMS41LS4zLTMuMS0uNC00LjYtLjMtMi40LjItNC41IDEuMy02LjIgMy4xLjUuNy45IDEuNCAxLjUgMi4yLjItLjIuNC0uNC42LS41IDEuNi0xLjUgMy41LTIuMyA1LjgtMi4xIDEuOC4xIDMuNS43IDQgMi41LjQgMS40LjMgMi45LjQgNC40LS4zIDAtLjQtLjEtLjUtLjItMi40LTItNS4xLTIuNC04LTEuNy0yLjcuNy00LjQgMi44LTQuNiA1LjUtLjIgMy4xIDEuMiA1LjQgMy45IDYuNSAxLjcuNyAzLjYuNyA1LjQuMyAxLjQtLjMgMi0xLjEgNC0yLjJ2MS4zaDIuOGMwLTQgLjEtOC45IDAtMTMuNSAwLTIuOS0xLjctNC43LTQuNS01LjN6bTEuNCAxMi42Yy0uMS4zIDAgLjYgMCAuOSAwIDIuMS0uNSAyLjgtMi41IDMuNi0xLjQuNS0yLjkuNy00LjQuMi0xLjctLjUtMi45LTItMi45LTMuNy0uMS0xLjcgMS0zLjQgMi43LTMuOSAyLjMtLjggNC40LS4zIDYuMyAxLjEuNi41IDEgMSAuOCAxLjh6TTkwLjMgMTA5YzIuNi0uOCA1LS4zIDYuOCAxLjlsLjMuMmMuNy0uNiAxLjMtMS4yIDIuMS0xLjktLjMtLjMtLjQtLjUtLjYtLjgtMi45LTMuMS04LjYtMy41LTEyLjEtMS00LjkgMy42LTQuOCAxMC42LTIuNCAxNC4zIDIuMyAzLjUgNS42IDQuNyA5LjUgNC4yIDIuMy0uMyA0LjItMS40IDUuNy0zLjMtLjctLjYtMS40LTEuMi0yLjEtMS45LS4yLjItLjMuMy0uNC41LTIuNyAzLTcuMiAyLjctOS42LS41LTEuNC0xLjktMS43LTQuMS0xLjMtNi4zLjItMi41IDEuNS00LjUgNC4xLTUuNHpNMTExLjEgMTIyLjZjLS4yLjEtLjMuMi0uMy4yLS44LjYtMS42LjctMi41LjQtLjktLjQtMS0xLjItMS4xLTJ2LTExLjRjMC0uMiAwIC4yLjEtLjhoMy44di0zaC00di01aC0zdjUuNGgtMi42Yy0uMiAwLS41LjItLjUuNC0uMS43IDAgMS4yIDAgMi4yaDMuMnYxMi43OTk5OTk5OTk5OTk5OTljMCAxLjYuNCAzIDEuOCAzLjggMS41LjkgNC40LjcgNS43LS40LjItLjEuMy0uNS4zLS42LS4zLS42LS42LTEuMy0uOS0yeiIvPjwvZz48L3N2Zz4=" />
);
const logoSASS = (
  <Logo imgSrc="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJfeDMyXzg4LXNhc3MiPjxnPjxnPjxwYXRoIGQ9Ik00MjIuMDA5LDI4MS43OTNjLTE2LjA5NiwwLjA3MS0zMC4wMzUsMy45NTItNDEuNjc1LDkuNzAxYy00LjI0LTguNTUzLTguNjI0LTE2LjAyNS05LjM0My0yMS42MjkgICAgIGMtMC44Ni02LjU0LTEuNzk2LTEwLjQxOS0wLjc4OS0xOC4xNzljMS4wMDctNy43NjIsNS41MzItMTguNzU2LDUuNDYxLTE5LjU0NWMtMC4wNzEtMC43OS0xLjAwNi00Ljc0My0xMC4yNzUtNC44MTUgICAgIGMtOS4yNjktMC4wNzEtMTcuMjQ0LDEuNzk2LTE4LjE3OSw0LjIzOWMtMC45MzYsMi40NDMtMi43Myw3Ljk3Ny0zLjgwOCwxMy43MjVjLTEuNjUzLDguNDA3LTE4LjU0LDM4LjQ0My0yOC4wOTcsNTQuMTA3ICAgICBjLTMuMTYxLTYuMTA2LTUuODE5LTExLjQ5Ny02LjM5NS0xNS44MDhjLTAuODYyLTYuNTQtMS43OTYtMTAuNDE5LTAuNzktMTguMTc5YzEuMDA2LTcuNzYyLDUuNTMyLTE4Ljc1Niw1LjQ2LTE5LjU0NSAgICAgYy0wLjA3Mi0wLjc5LTEuMDA2LTQuNzQzLTEwLjI3NC00LjgxNWMtOS4yNy0wLjA3MS0xNy4yNDQsMS43OTYtMTguMTgsNC4yNGMtMC45MzQsMi40NDItMS45NCw4LjE5MS0zLjgwOCwxMy43MjYgICAgIGMtMS44NjcsNS41My0yNC4zNTksNTUuNTQxLTMwLjI1MSw2OC41NDhjLTMuMDE5LDYuNjA5LTUuNjA0LDExLjkyNy03LjQ3MywxNS41MjFjLTAuMjg2LDAuNTc0LTAuNTAyLDAuOTM0LTAuNjQ2LDEuMjIyICAgICBjMC4yMTUtMC4zNTksMC4zNi0wLjcyLDAuMzYtMC41NzRjLTEuNTgxLDMuMDg4LTIuNTE2LDQuODEzLTIuNTE2LDQuODEzdjAuMDcxYy0xLjIyMiwyLjI5OS0yLjU4Nyw0LjM4Mi0zLjIzMyw0LjM4MiAgICAgYy0wLjQzMiwwLTEuMzY1LTYuMDM0LDAuMjE2LTE0LjI5OGMzLjM3Ni0xNy4zODksMTEuMzUyLTQ0LjQwNCwxMS4yOC00NS4zNGMtMC4wNzItMC41MDMsMS41MDgtNS4xNzMtNS4yNDYtNy42ODkgICAgIGMtNi41MzgtMi4zNzEtOC45MSwxLjU4Mi05LjQ4NCwxLjU4MnMtMS4wMDYsMS40MzgtMS4wMDYsMS40MzhzNy4yNTgtMzAuNDY3LTEzLjk0LTMwLjQ2NyAgICAgYy0xMy4yMjEsMC0zMS42MTUsMTQuNTE2LTQwLjY2OCwyNy42NjVjLTUuNjc3LDMuMDktMTcuOTY1LDkuNzcyLTMwLjg5OCwxNi44ODVjLTQuOTU4LDIuNzMxLTEwLjA2LDUuNTMyLTE0Ljg3NCw4LjE5MiAgICAgYy0wLjM1OS0wLjM2MS0wLjY0Ny0wLjcyLTEuMDA2LTEuMDc5Yy0yNS43MjQtMjcuNDQ3LTczLjIyLTQ2Ljg0OC03MS4yMDctODMuNzExYzAuNzE4LTEzLjQzNyw1LjM4OS00OC43MTYsOTEuMzI3LTkxLjU0MiAgICAgYzcwLjQxOC0zNS4wNjUsMTI2Ljc1MS0yNS40MzYsMTM2LjQ1My00LjAyNGMxMy45MzgsMzAuNTM5LTMwLjEwOSw4Ny4zNzYtMTAzLjI1Niw5NS41NjYgICAgIGMtMjcuODgsMy4wOS00Mi41MzctNy42ODgtNDYuMjAyLTExLjcxMWMtMy44MDktNC4yMzktNC4zODQtNC40NTYtNS44MjEtMy42NjVjLTIuMzcyLDEuMjkzLTAuODYyLDUuMDMsMCw3LjI1NyAgICAgYzIuMTU2LDUuNjc2LDExLjEzNywxNS43MzYsMjYuNDQzLDIwLjc2NmMxMy40MzUsNC4zODMsNDYuMTMsNi44MjcsODUuNjQ5LTguNDc5YzQ0LjQwNi0xNy4xMDIsNzguOTY5LTY0Ljc0Miw2OC44MzctMTA0LjYyICAgICBDMzAzLjgwOSw4NS4yLDIzNi42MjUsNzEuOTA2LDE3My4wMzQsOTQuNDY4Yy0zNy44NjcsMTMuNDM3LTc4LjgyNCwzNC41NjMtMTA4LjI4NSw2Mi4wODIgICAgIGMtMzQuOTkzLDMyLjc2Ny00MC41OTcsNjEuMjkyLTM4LjI5OSw3My4yMjFjOC4xOTIsNDIuMzIxLDY2LjUzNyw2OS45MTQsODkuODksOTAuMzJjLTEuMTUsMC42NDctMi4yMjgsMS4yMjItMy4yMzMsMS43OTcgICAgIGMtMTEuNzEyLDUuODE5LTU2LjE5LDI5LjEtNjcuMzI4LDUzLjY3N2MtMTIuNTczLDI3Ljg3OSwyLjA4Myw0Ny44NTMsMTEuNzEyLDUwLjU4NWMzMC4wMzUsOC4zMzQsNjAuNzg5LTYuNjgzLDc3LjMxNi0zMS4zMyAgICAgYzE2LjUyNS0yNC42NDUsMTQuNTE0LTU2LjgzNiw2Ljg5OC03MS40OTVjLTAuMDczLTAuMjE1LTAuMjE2LTAuMzU3LTAuMjg3LTAuNTc1YzMuMDE3LTEuNzk1LDYuMTA2LTMuNTkyLDkuMTk3LTUuMzg4ICAgICBjNS45NjMtMy41MjEsMTEuNzg0LTYuNzU2LDE2Ljg4NS05LjU1NmMtMi44NzUsNy43NjEtNC45NTgsMTcuMDk4LTYuMDM2LDMwLjYwOWMtMS4yOTMsMTUuODA3LDUuMjQ2LDM2LjI4NiwxMy43MjUsNDQuMzM0ICAgICBjMy43MzUsMy41MjEsOC4yNjIsMy41OTQsMTEuMDY1LDMuNTk0YzkuOTE2LDAsMTQuMzctOC4xOTMsMTkuMzI4LTE3Ljk2NWM2LjEwOC0xMS45MywxMS40OTctMjUuNzk4LDExLjQ5Ny0yNS43OTggICAgIHMtNi43NTQsMzcuNTExLDExLjcxMiwzNy41MTFjNi43NTQsMCwxMy41MS04LjY5NSwxNi41MjYtMTMuMTV2MC4wNzFjMCwwLDAuMTQ1LTAuMjg2LDAuNTA0LTAuODYgICAgIGMwLjcxOC0xLjA3OSwxLjA3Ny0xLjcyNiwxLjA3Ny0xLjcyNnYtMC4yMTdjMi43My00LjY3LDguNjk1LTE1LjM3NywxNy42NzUtMzMuMDUyYzExLjY0Mi0yMi44NTEsMjIuNzc4LTUxLjM3OCwyMi43NzgtNTEuMzc4ICAgICBzMS4wMDYsNi45NzIsNC40NTcsMTguNTRjMi4wMTEsNi44MjYsNi4yNSwxNC4yOTksOS42MjcsMjEuNTU3Yy0yLjcyOSwzLjczNi00LjM4Myw1Ljg5Mi00LjM4Myw1Ljg5MnMwLDAuMDcxLDAuMDcsMC4xNDMgICAgIGMtMi4xNTUsMi44NzYtNC41OTcsNS45NjYtNy4xMTIsOC45ODRjLTkuMTk4LDEwLjkyMS0yMC4xMiwyMy40MjUtMjEuNTU2LDI3LjAxN2MtMS43MjYsNC4yNC0xLjI5NCw3LjM5OSwyLjAxMiw5Ljg0NCAgICAgYzIuNDQyLDEuODY5LDYuNzU0LDIuMTU1LDExLjI4LDEuNzk3YzguMjY0LTAuNTc3LDE0LjA4NC0yLjU4NywxNi44ODYtMy44ODNjNC40NTQtMS41NzgsOS42MjktNC4wOTUsMTQuNTE1LTcuNjE1ICAgICBjOC45ODItNi42MDksMTQuNDQ0LTE2LjA5NCwxMy45MzktMjguNTk3Yy0wLjI4Ny02Ljg5OC0yLjUxNi0xMy43OTctNS4yNDYtMjAuMjYyYzAuNzkxLTEuMTUxLDEuNjU0LTIuMzc0LDIuNDQ0LTMuNTkzICAgICBjMTQuMjI5LTIwLjc2OSwyNS4yMjItNDMuNTQ0LDI1LjIyMi00My41NDRzMS4wMDYsNi45NjgsNC40NTQsMTguNTM3YzEuNzI1LDUuODIxLDUuMTAyLDEyLjIxNiw4LjE5MSwxOC40NjYgICAgIGMtMTMuMzY1LDEwLjg1MS0yMS42MjcsMjMuNDI3LTI0LjUwMiwzMS42ODhjLTUuMzE4LDE1LjMwNi0xLjE1LDIyLjIwMiw2LjY4MiwyMy43ODZjMy41MjEsMC43MTgsOC41NTEtMC45MzYsMTIuMjg4LTIuNTE3ICAgICBjNC42Ny0xLjU4MSwxMC4yNzUtNC4wOTYsMTUuNTItNy45NzZjOC45ODItNi42MDksMTcuNjc3LTE1Ljg4LDE3LjEwMy0yOC40NTRjLTAuMjE3LTUuNjc3LTEuNzk3LTExLjM1My0zLjg4MS0xNi44MTQgICAgIGMxMS4yOC00Ljc0MSwyNS45NDEtNy4zMyw0NC42MjItNS4xNzNjNDAuMDIzLDQuNjcsNDcuODU0LDI5LjY3NSw0Ni4zNDUsNDAuMDkzYy0xLjUwNywxMC40OTItOS45MTQsMTYuMjQxLTEyLjcxNywxNy45NjUgICAgIGMtMi44MDQsMS43MjUtMy42NjUsMi4zNzItMy40NDgsMy42NjVjMC4zNTgsMS44NjgsMS42NTEsMS43OTcsNC4wMjIsMS4zNjRjMy4zMDctMC41NzQsMjAuOTgyLTguNDc5LDIxLjc3MS0yNy44MDggICAgIEM0ODcuMTA4LDMwOC40NSw0NjMuNjEzLDI4MS41NzgsNDIyLjAwOSwyODEuNzkzTDQyMi4wMDksMjgxLjc5M3ogTTExMy41MzgsMzg1Ljc2NmMtMTMuMjIsMTQuNDQzLTMxLjc1OSwxOS45MDQtMzkuNzM0LDE1LjMwNSAgICAgYy04LjU1MS00Ljk1Ni01LjE3NC0yNi4yMjYsMTEuMTM3LTQxLjYwNGM5LjkxNi05LjM0LDIyLjcwNi0xNy45NjIsMzEuMTg1LTIzLjI3OWMxLjk0LTEuMTQ5LDQuNzQzLTIuODc0LDguMTkyLTQuOTU4ICAgICBjMC41NzUtMC4zNTcsMC44NjItMC41MDIsMC44NjItMC41MDJjMC42NDYtMC40MzMsMS4zNjUtMC43OTEsMi4wODQtMS4yMjNDMTMzLjIyNiwzNTEuMzQ5LDEyNy40NzgsMzcwLjYwNSwxMTMuNTM4LDM4NS43NjYgICAgIEwxMTMuNTM4LDM4NS43NjZ6IE0yMTAuMTExLDMyMC4wOTFjLTQuNTk5LDExLjI4LTE0LjMsNDAuMDIzLTIwLjE5LDM4LjUxNGMtNS4wMy0xLjI5NC04LjEyMS0yMy4yMDktMS4wMDYtNDQuNzY0ICAgICBjMy41OTItMTAuODUxLDExLjIwOC0yMy43ODQsMTUuNzM2LTI4LjgxM2M3LjI1Ni04LjEyMSwxNS4yMzItMTAuNzA4LDE3LjEwMS03LjQ3NCAgICAgQzIyNC4yNjYsMjgxLjc5MywyMTIuOTg0LDMxMy4wNSwyMTAuMTExLDMyMC4wOTFMMjEwLjExMSwzMjAuMDkxeiBNMjg5Ljg2OCwzNTguMTc2Yy0xLjkzOSwxLjAwNS0zLjczNiwxLjY1MS00LjU5OCwxLjE0OCAgICAgYy0wLjY0Ni0wLjM1OSwwLjc5MS0xLjcyNSwwLjc5MS0xLjcyNXM5Ljk4Ni0xMC43MDYsMTMuOTM5LTE1LjU5NGMyLjI5OS0yLjg3Myw0Ljk1Ny02LjI1MSw3LjgzMi05Ljk4NiAgICAgYzAsMC4zNTcsMC4wNywwLjcxOSwwLjA3LDEuMTQ4QzMwNy44MzMsMzQ2LjAzMSwyOTUuNDc0LDM1NC43MjcsMjg5Ljg2OCwzNTguMTc2eiBNMzUxLjM3NywzNDQuMTYzICAgICBjLTEuNDM3LTEuMDA2LTEuMjIzLTQuMzgzLDMuNTkyLTE0Ljg3NWMxLjg2OS00LjA5Niw2LjE4MS0xMC45OTMsMTMuNjUyLTE3LjYwNGMwLjg2MywyLjczLDEuMzY1LDUuMzE2LDEuMzY1LDcuNzU5ICAgICBDMzY5LjkxMywzMzUuNjExLDM1OC4zNDYsMzQxLjY0NywzNTEuMzc3LDM0NC4xNjNMMzUxLjM3NywzNDQuMTYzeiIgc3R5bGU9ImZpbGw6I0NGNjQ5QTsiLz48L2c+PC9nPjwvZz48ZyBpZD0iTGF5ZXJfMSIvPjwvc3ZnPg==" />
);
const logoStyled = (
  <Logo imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV5On7TXQvm_rbLfJCToERwnVNp-AghQZPOg&usqp=CAU" />
);
const logoGit = (
  <Logo imgSrc="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTIzLjU2MTUyMzQsMTAuOTMyMDIyMWMtMC4wMDA5NzY2LDAtMC4wMDA5NzY2LTAuMDAwNDg4My0wLjAwMDk3NjYtMC4wMDA0ODgzTDEzLjA2MTUyMzQsMC40MjU2NzQ0ICAgYy0wLjU2NjQwNjMtMC41Njc3NDktMS41NTc2MTcyLTAuNTY3MjYwNy0yLjEyMjA3MDMtMC4wMDA0ODgzTDAuNDM4NDc2NiwxMC45MzIwMjIxQzAuMTU2MjUsMTEuMjE1ODk2NiwwLDExLjU5MjYwNTYsMCwxMS45OTI3NTIxICAgYzAsMC40MDA2MzQ4LDAuMTU2MjUsMC43Nzc3NzEsMC40Mzk0NTMxLDEuMDYxMTU3MmwxMC40OTkwMjM0LDEwLjUwNTg1OTQgICBDMTEuMjIxNjc5NywyMy44NDM2NDMyLDExLjU5ODYzMjgsMjQuMDAwMDE1MywxMiwyNC4wMDAwMTUzczAuNzc4MzIwMy0wLjE1NjM3MjEsMS4wNjA1NDY5LTAuNDM5NzU4M2wxMC41LTEwLjUwNjM0NzcgICBDMjMuODQzNzUsMTIuNzcwNTIzMSwyNCwxMi4zOTMzODY4LDI0LDExLjk5Mjc1MjFDMjQsMTEuNTkyNjA1NiwyMy44NDM3NSwxMS4yMTU4OTY2LDIzLjU2MTUyMzQsMTAuOTMyMDIyMXoiIGZpbGw9IiNFRjQ3M0IiLz48cGF0aCBkPSJNMjMuNjgwOTY5MiwxMi42ODk4OTU2bC0xMC42MDkzNzUsMTAuNjE1NzgzNyAgIEMxMi43ODY0MzgsMjMuNTkxOTk1MiwxMi40MDU1MTc2LDIzLjc1MDAxNTMsMTIsMjMuNzUwMDE1M3MtMC43ODY0MzgtMC4xNTgwMi0xLjA3MjU3MDgtMC40NDQ4MjQyTDAuMzE5MDMwOCwxMi42ODk4OTU2ICAgYy0wLjEyMzk2MjQtMC4xMjQwODQ1LTAuMjE4Njg5LTAuMjY4MzcxNi0wLjI5MjExNDMtMC40MjIyNDEyYzAuMDU0NTY1NCwwLjI5NTk1OTUsMC4xOTUzMTI1LDAuNTY4OTA4NywwLjQxMjUzNjYsMC43ODYyNTQ5ICAgbDEwLjQ5OTAyMzQsMTAuNTA1ODU5NEMxMS4yMjE2Nzk3LDIzLjg0MzY0MzIsMTEuNTk4NjMyOCwyNC4wMDAwMTUzLDEyLDI0LjAwMDAxNTNzMC43NzgzMjAzLTAuMTU2MzcyMSwxLjA2MDU0NjktMC40Mzk3NTgzICAgbDEwLjUtMTAuNTA2MzQ3N2MwLjIxNzIyNDEtMC4yMTczNDYyLDAuMzU4MDMyMi0wLjQ5MDI5NTQsMC40MTI1OTc3LTAuNzg2MjU0OSAgIEMyMy44OTk3MTkyLDEyLjQyMTUyNCwyMy44MDQ5MzE2LDEyLjU2NTgxMTIsMjMuNjgwOTY5MiwxMi42ODk4OTU2eiIgZmlsbD0iIzAxMDEwMSIgb3BhY2l0eT0iMC4xIi8+PHBhdGggZD0iTTE3LDEwLjAwMDAxNTNjLTAuMzc0ODc3OSwwLTAuNzIxOTg0OSwwLjExMDA0NjQtMS4wMjIyMTY4LDAuMjkwMjgzMmwtMi4yNjgwNjY0LTIuMjY4MDY2NCAgIEMxMy44ODk4OTI2LDcuNzIyMDYxMiwxNCw3LjM3NDk1NDIsMTQsNy4wMDAwMTUzYzAtMS4xMDMwMjczLTAuODk3NDYwOS0yLTItMiAgIGMtMC4zNjk4NzMsMC0wLjcxMjI4MDMsMC4xMDc3ODgxLTEuMDA5ODI2NywwLjI4MzU2OTNMOC41MzY0MzgsMi44Mjk1NDQxTDcuODI5NTg5OCwzLjUzNjc1ODRsMi40NTM2NzQzLDIuNDUzOTc5NSAgIEMxMC4xMDc3MjcxLDYuMjg4MTAxMiwxMCw2LjYzMDMyNTMsMTAsNy4wMDAwMTUzYzAsMC45MjkzMjEzLDAuNjQwMDE0NiwxLjcwNTM4MzMsMS41LDEuOTI4OTU1MXY2LjE0MjA4OTggICBDMTAuNjQwMDE0NiwxNS4yOTQ2MzIsMTAsMTYuMDcwNjk0LDEwLDE3LjAwMDAxNTNjMCwxLjEwMzAyNzMsMC44OTc0NjA5LDIsMiwyczItMC44OTY5NzI3LDItMiAgIGMwLTAuOTI5MzIxMy0wLjY0MDAxNDYtMS43MDUzODMzLTEuNS0xLjkyODk1NTFWOC45Mjg5NzAzYzAuMTc2NzU3OC0wLjA0NTk1OTUsMC4zNDI1MjkzLTAuMTE1ODQ0NywwLjQ5Njg4NzItMC4yMDU1MDU0ICAgbDIuMjc5NjYzMSwyLjI3OTY2MzFDMTUuMTA1MzQ2NywxMS4yOTc4MDU4LDE1LDExLjYzNTMzMDIsMTUsMTIuMDAwMDE1M2MwLDEuMTAzMDI3MywwLjg5NzQ2MDksMiwyLDJzMi0wLjg5Njk3MjcsMi0yICAgUzE4LjEwMjUzOTEsMTAuMDAwMDE1MywxNywxMC4wMDAwMTUzeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0wLjQzODQ3NjYsMTEuMTgyMDIyMUwxMC45Mzk0NTMxLDAuNjc1MTg2MiAgIGMwLjU2NDQ1MzEtMC41NjY3NzI1LDEuNTU1NjY0MS0wLjU2NzI2MDcsMi4xMjIwNzAzLDAuMDAwNDg4M2wxMC40OTkwMjM0LDEwLjUwNTg1OTRjMCwwLDAsMC4wMDA0ODgzLDAuMDAwOTc2NiwwLjAwMDQ4ODMgICBjMC4yNTIzMTkzLDAuMjUzNzg0MiwwLjM5Njk3MjcsMC41ODMyNTIsMC40MjYyNjk1LDAuOTM1NzkxQzIzLjk5MTI3MiwxMi4wNzU5NDMsMjQsMTIuMDM1MjMyNSwyNCwxMS45OTI3NTIxICAgYzAtMC40MDAxNDY1LTAuMTU2MjUtMC43NzY4NTU1LTAuNDM4NDc2Ni0xLjA2MDczYy0wLjAwMDk3NjYsMC0wLjAwMDk3NjYtMC4wMDA0ODgzLTAuMDAwOTc2Ni0wLjAwMDQ4ODNMMTMuMDYxNTIzNCwwLjQyNTY3NDQgICBjLTAuNTY2NDA2My0wLjU2Nzc0OS0xLjU1NzYxNzItMC41NjcyNjA3LTIuMTIyMDcwMy0wLjAwMDQ4ODNMMC40Mzg0NzY2LDEwLjkzMjAyMjFDMC4xNTYyNSwxMS4yMTU4OTY2LDAsMTEuNTkyNjA1NiwwLDExLjk5Mjc1MjEgICBjMCwwLjA0MjQxOTQsMC4wMDg3MjgsMC4wODMxMjk5LDAuMDEyMjA3LDAuMTI0OTM5QzAuMDQxNTY0OSwxMS43NjUxNTIsMC4xODYyMTgzLDExLjQzNTc0NTIsMC40Mzg0NzY2LDExLjE4MjAyMjF6IiBmaWxsPSIjRkZGRkZGIiBvcGFjaXR5PSIwLjIiLz48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJTVkdJRF8xXyIgeDE9IjkuNjY5MjY1NyIgeDI9IjE4LjMwNjU5NDgiIHkxPSI5LjY3NjA4NjQiIHkyPSIxOC4zMTM0MTU1Ij48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMTAxMDE7c3RvcC1vcGFjaXR5OjAuMSIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzAxMDEwMTtzdG9wLW9wYWNpdHk6MCIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0iTTE4LjU0ODgyODEsMTAuNzUwMzgxNUMxOC44MjY1MzgxLDExLjA5MzgyNjMsMTksMTEuNTI0ODU2NiwxOSwxMi4wMDAwMTUzICAgYzAsMS4xMDMwMjczLTAuODk3NDYwOSwyLTIsMnMtMi0wLjg5Njk3MjctMi0yYzAtMC4zNjQ2ODUxLDAuMTA1MzQ2Ny0wLjcwMjIwOTUsMC4yNzY1NTAzLTAuOTk2ODg3MkwxMi45OTY4ODcyLDguNzIzNDY1ICAgQzEyLjg0MjUyOTMsOC44MTMxMjU2LDEyLjY3Njc1NzgsOC44ODMwMTA5LDEyLjUsOC45Mjg5NzAzdjYuMTQyMDg5OGMwLjg1OTk4NTQsMC4yMjM1NzE4LDEuNSwwLjk5OTYzMzgsMS41LDEuOTI4OTU1MSAgIGMwLDEuMTAzMDI3My0wLjg5NzQ2MDksMi0yLDJjLTAuNTExNDc0NiwwLTAuOTczODE1OS0wLjE5ODY2OTQtMS4zMjc4ODA5LTAuNTE1NzQ3MWwzLjczMTgxMTUsMy43MzE4MTE1bDcuODAyOTE3NS03LjgwNzY3ODIgICBMMTguNTQ4ODI4MSwxMC43NTAzODE1eiBNMTMuNzA5NzE2OCw4LjAyMjIzMjFsMi4yNjgwNjY0LDIuMjY4MDY2NEMxNi4yNzgwMTUxLDEwLjExMDA2MTYsMTYuNjI1MTIyMSwxMC4wMDAwMTUzLDE3LDEwLjAwMDAxNTMgICBjMC40NzUwOTc3LDAsMC45MDYyNSwwLjE3MzUyMjksMS4yNDk4MTY5LDAuNDUxMzU1bC00LjY3NzY3MzMtNC42Nzc3MzQ0TDEzLjU2OTcwMjEsNS43NzU2NSAgIEMxMy44MzUxNDQsNi4xMTUwNjY1LDE0LDYuNTM2NjM2NCwxNCw3LjAwMDAxNTNDMTQsNy4zNzQ5NTQyLDEzLjg4OTg5MjYsNy43MjIwNjEyLDEzLjcwOTcxNjgsOC4wMjIyMzIxeiIgZmlsbD0idXJsKCNTVkdJRF8xXykiLz48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJTVkdJRF8yXyIgeDE9IjIuMDEzODE4NSIgeDI9IjIxLjk4MzM2NiIgeTE9IjcuMzM5OTIwNSIgeTI9IjE2LjY1MTg3MjYiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRjtzdG9wLW9wYWNpdHk6MC4yIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGO3N0b3Atb3BhY2l0eTowIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJNMjMuNTYxNTIzNCwxMC45MzIwMjIxYy0wLjAwMDk3NjYsMC0wLjAwMDk3NjYtMC4wMDA0ODgzLTAuMDAwOTc2Ni0wLjAwMDQ4ODNMMTMuMDYxNTIzNCwwLjQyNTY3NDQgICBjLTAuNTY2NDA2My0wLjU2Nzc0OS0xLjU1NzYxNzItMC41NjcyNjA3LTIuMTIyMDcwMy0wLjAwMDQ4ODNMMC40Mzg0NzY2LDEwLjkzMjAyMjFDMC4xNTYyNSwxMS4yMTU4OTY2LDAsMTEuNTkyNjA1NiwwLDExLjk5Mjc1MjEgICBjMCwwLjQwMDYzNDgsMC4xNTYyNSwwLjc3Nzc3MSwwLjQzOTQ1MzEsMS4wNjExNTcybDEwLjQ5OTAyMzQsMTAuNTA1ODU5NCAgIEMxMS4yMjE2Nzk3LDIzLjg0MzY0MzIsMTEuNTk4NjMyOCwyNC4wMDAwMTUzLDEyLDI0LjAwMDAxNTNzMC43NzgzMjAzLTAuMTU2MzcyMSwxLjA2MDU0NjktMC40Mzk3NTgzbDEwLjUtMTAuNTA2MzQ3NyAgIEMyMy44NDM3NSwxMi43NzA1MjMxLDI0LDEyLjM5MzM4NjgsMjQsMTEuOTkyNzUyMUMyNCwxMS41OTI2MDU2LDIzLjg0Mzc1LDExLjIxNTg5NjYsMjMuNTYxNTIzNCwxMC45MzIwMjIxeiIgZmlsbD0idXJsKCNTVkdJRF8yXykiLz48L2c+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+" />
);
const logoGitHub = (
  <Logo imgSrc="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyOCAxMjgiIGlkPSJTb2NpYWxfSWNvbnMiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJfeDMxX19zdHJva2UiPjxnIGlkPSJHaXRodWJfMV8iPjxyZWN0IGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBoZWlnaHQ9IjEyOCIgd2lkdGg9IjEyOCIvPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYzLjk5NiwxLjMzM0MyOC42NTYsMS4zMzMsMCwzMC4wOTksMCw2NS41OTEgICAgYzAsMjguMzg0LDE4LjMzNiw1Mi40NjcsNDMuNzcyLDYwLjk2NWMzLjIsMC41OSw0LjM2OC0xLjM5NCw0LjM2OC0zLjA5NmMwLTEuNTI2LTAuMDU2LTUuNTY2LTAuMDg4LTEwLjkyNyAgICBjLTE3LjgwNCwzLjg4My0yMS41Ni04LjYxNC0yMS41Ni04LjYxNGMtMi45MDgtNy40MjEtNy4xMDQtOS4zOTctNy4xMDQtOS4zOTdjLTUuODEyLTMuOTg4LDAuNDQtMy45MDcsMC40NC0zLjkwNyAgICBjNi40MiwwLjQ1NCw5LjgsNi42MjIsOS44LDYuNjIyYzUuNzEyLDkuODE5LDE0Ljk4LDYuOTg0LDE4LjYyOCw1LjMzN2MwLjU4LTQuMTUyLDIuMjM2LTYuOTg0LDQuMDY0LTguNTkgICAgYy0xNC4yMTItMS42MjItMjkuMTUyLTcuMTMyLTI5LjE1Mi0zMS43NTNjMC03LjAxNiwyLjQ5Mi0xMi43NSw2LjU4OC0xNy4yNDRjLTAuNjYtMS42MjYtMi44NTYtOC4xNTYsMC42MjQtMTcuMDAzICAgIGMwLDAsNS4zNzYtMS43MjcsMTcuNiw2LjU4NmM1LjEwOC0xLjQyNiwxMC41OC0yLjEzNiwxNi4wMjQtMi4xNjVjNS40MzYsMC4wMjgsMTAuOTEyLDAuNzM5LDE2LjAyNCwyLjE2NSAgICBjMTIuMjE2LTguMzEzLDE3LjU4LTYuNTg2LDE3LjU4LTYuNTg2YzMuNDkyLDguODQ3LDEuMjk2LDE1LjM3NywwLjYzNiwxNy4wMDNjNC4xMDQsNC40OTQsNi41OCwxMC4yMjgsNi41OCwxNy4yNDQgICAgYzAsMjQuNjgxLTE0Ljk2NCwzMC4xMTUtMjkuMjIsMzEuNzA1YzIuMjk2LDEuOTg0LDQuMzQ0LDUuOTAzLDQuMzQ0LDExLjg5OWMwLDguNTktMC4wOCwxNS41MTctMC4wOCwxNy42MjYgICAgYzAsMS43MTksMS4xNTIsMy43MTksNC40LDMuMDg4QzEwOS42OCwxMTguMDM0LDEyOCw5My45NjcsMTI4LDY1LjU5MUMxMjgsMzAuMDk5LDk5LjM0NCwxLjMzMyw2My45OTYsMS4zMzMiIGZpbGw9IiMzRTc1QzMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IkdpdGh1YiIvPjwvZz48L2c+PC9zdmc+" />
);
const logoFigma = (
  <Logo imgSrc="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwMDAgMzAwMDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMwMDAgMzAwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMEFDRjgzO30KCS5zdDF7ZmlsbDojQTI1OUZGO30KCS5zdDJ7ZmlsbDojRjI0RTFFO30KCS5zdDN7ZmlsbDojRkY3MjYyO30KCS5zdDR7ZmlsbDojMUFCQ0ZFO30KPC9zdHlsZT48dGl0bGUvPjxkZXNjLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTA4My4zMzMzNzQsMjc1MGMyMzAsMCw0MTYuNjY2NjI2LTE4Ni42NjY3NDgsNDE2LjY2NjYyNi00MTYuNjY2NzQ4di00MTYuNjY2NjI2aC00MTYuNjY2NjI2ICBjLTIzMC4wMDAwNjEsMC00MTYuNjY2Njg3LDE4Ni42NjY2MjYtNDE2LjY2NjY4Nyw0MTYuNjY2NjI2Uzg1My4zMzMzMTMsMjc1MCwxMDgzLjMzMzM3NCwyNzUweiIgaWQ9InBhdGgwX2ZpbGwiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjY2LjY2NjY4NywxNTAwYzAtMjMwLDE4Ni42NjY2MjYtNDE2LjY2Njc0OCw0MTYuNjY2Njg3LTQxNi42NjY3NDhIMTUwMHY4MzMuMzMzMzc0ICBoLTQxNi42NjY2MjZDODUzLjMzMzMxMywxOTE2LjY2NjYyNiw2NjYuNjY2Njg3LDE3MzAsNjY2LjY2NjY4NywxNTAweiIgaWQ9InBhdGgxX2ZpbGwiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNNjY2LjY2NjY4Nyw2NjYuNjY2NjI2QzY2Ni42NjY2ODcsNDM2LjY2NjY1Niw4NTMuMzMzMzEzLDI1MCwxMDgzLjMzMzM3NCwyNTBIMTUwMCAgdjgzMy4zMzMyNTJoLTQxNi42NjY2MjZDODUzLjMzMzMxMywxMDgzLjMzMzI1Miw2NjYuNjY2Njg3LDg5Ni42NjY2MjYsNjY2LjY2NjY4Nyw2NjYuNjY2NjI2eiIgaWQ9InBhdGgxX2ZpbGxfMV8iLz48cGF0aCBjbGFzcz0ic3QzIiBkPSJNMTUwMCwyNTBoNDE2LjY2NjYyNmMyMzAuMDAwMTIyLDAsNDE2LjY2NjYyNiwxODYuNjY2NjU2LDQxNi42NjY2MjYsNDE2LjY2NjYyNiAgcy0xODYuNjY2NTA0LDQxNi42NjY2MjYtNDE2LjY2NjYyNiw0MTYuNjY2NjI2SDE1MDBWMjUweiIgaWQ9InBhdGgyX2ZpbGwiLz48cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMjMzMy4zMzMyNTIsMTUwMGMwLDIzMC0xODYuNjY2NTA0LDQxNi42NjY2MjYtNDE2LjY2NjYyNiw0MTYuNjY2NjI2UzE1MDAsMTczMCwxNTAwLDE1MDAgIHMxODYuNjY2NjI2LTQxNi42NjY3NDgsNDE2LjY2NjYyNi00MTYuNjY2NzQ4UzIzMzMuMzMzMjUyLDEyNzAsMjMzMy4zMzMyNTIsMTUwMHoiIGlkPSJwYXRoM19maWxsIi8+PC9zdmc+" />
);

//COMPONENTE
const Tecnologias = () => {
  return (
    <>
      <Title>Tecnologías:</Title>
      <GridTecnologías>
        {logoHTML}
        {logoCSS}
        {logoJS}
        {logoReact}
        {logoSASS}
        {logoStyled}
        {logoGit}
        {logoGitHub}
        {logoFigma}
      </GridTecnologías>
    </>
  );
};

export { Tecnologias, logoExternalLink, logoRepo };
