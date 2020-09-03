import React from "react";
import styled from "styled-components";

const StyledLines = styled.div`
  height: 100%;
  position: absolute;
  ${({ theme }) =>
    `border-left: 2px solid ${theme.bColor}; border-right: 2px solid ${theme.bColor}`};
  width: 10px;
  top: 0;
  ${({ side }) =>
    side === "l" ? "left: calc(5% - 10px)" : "right: calc(5% - 10px)"}
`;

const Lines = ({ side }) => {
  return <StyledLines side={side} />;
};

export default Lines;
