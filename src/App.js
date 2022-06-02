import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Navbar } from "./Components/Navbar";
import { themes } from "./themes";

const TestImg = (
  <img
    style={{ width: "25rem"}}
    src="https://lh3.googleusercontent.com/BFk95NR9KyxScJRVkNVsk2brDrfaO03Fngd4QbNMhY1PSNhhd6ARzuErIvL8NKteTdxz5kzULSFK7m_css6G0LoqU4ROYlZvd-NZGrcIVTsUFZYPgpTA9bfQm_bjRk718IKUOQP1I9cQ15eBDOAVurXbGO-w_lbV-7nbvDiUOarDEdgkIU3BeFN3TjRZ7wbjkNyGncdIst4hpn78VSM9lphUE-RJnUmcNFwUfaQjBX51LhbegxVEtj4ng7Tiuq5fxsxP121rQ7vsAeBxCt5PFe6SWqVuFvEBPdWQOB592HW8bGAQ6uXdUdP-TBdn_Xow_SjH5cmUHMyDpg90t3WQceT9R7FJHobbq6-wAw2wUApla_l1yEUcHzwW3i-K8CtARH4U8-8W58717HHDURcCoIJKCq0TWxB0iZbXcu5iwDbVrbliBb6ZCvKMV55VJlGFjX3HcJqhN-WysarWvPwYLKGcvvXRgIVajEEzLL6EIPbUnlIXoLqHUDM9cQ1SZsD8xrXeySgzvL3ki0nM_f71DUjBoLoloriQgwNns8iMAFAInY4dr2SkMM8a-oEVxeYyR7nz73NM-XWNmrs-nyuliBVykxrQU3rtwDaRMtIYlxb-hb4mfEC_dywbIc5_tjEvpt-OdG7EmLQee6YF_if2BL0wrXeSWj7FYFV4Rn4CaNF5irrb6W1SAIyQ6SVbZ1GP2UiJ9zIQ6fWUigGjxeAki9k-U8VN3T5k3RijYGtZvmGrd3QbKz-cvMZCIuA=w474-h757-no?authuser=0"
    alt=""
  />
);

const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colorPrimario};
  color: ${(props) => props.theme.colorPrimario};
`;

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={themes[theme]}>
      <WelcomeWrapper>
        <Navbar theme={theme} setTheme={setTheme} />
        {TestImg}
      </WelcomeWrapper>
    </ThemeProvider>
  );
}

export default App;
