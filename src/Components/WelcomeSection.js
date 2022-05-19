import React from "react";
import styled from "styled-components";


const WelcomeWrapper = styled.div`
  display: flex;
  margin: 0 auto;
`;
const TestImg = (
  <img
    style={{ width: "12rem" }}
    src="https://lh3.googleusercontent.com/-eeqkSrxO2PI/YXN0Pi_DM_I/AAAAAAAADWk/XVOf652QnSMQFGPhBFweDlEPMdA5jmkJwCLcBGAsYHQ/s1600/1634956346637639-1.png"
  />
);
export const WelcomeSection = () => {
  return <WelcomeWrapper>{TestImg}</WelcomeWrapper>;
};
