import styled, { keyframes } from "styled-components";

const showText = keyframes`
  20% { opacity: 1}
  50% { opacity: 1; }
  70% {opacity: 0;}
  100% { opacity: 0; }
`;

const StyledCircle = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  position: absolute;
  background-color: ${({ theme }) => theme.gColor}
    ${({ side }) => (side === "l" ? "left: 50%;" : "right: 50%;")};
`;

const StyledLine = styled.div`
  height: 200%;
  transform-origin: center;
  ${({ theme, orientation }) =>
    `transform: translate(-50%,-50%) ${
      orientation === "v" ? "" : "rotate(90deg)"
    };border: 1px solid ${theme.gColor};`};
  position: absolute;
  top: 50%;
  left: 50%;
`;

const StyledSquare = styled.div`
  height: 60%;
  width: 60%;
  background-color: ${({ theme }) => theme.gColor};
`;

const StyledP = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  background-color: ${({ color, theme }) =>
    color === "w" ? theme.bColor : "white"};
  color: ${({ color, theme }) => (color !== "w" ? theme.bColor : theme.gColor)};
  animation: ${showText} 10s ${({ delay }) => (delay ? "5s" : "")} infinite;
`;

const StyledHome = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media (orientation: landscape) {
    height: 150vh;
  }
`;

const StyledGrid = styled.div`
  width: 80%;
  min-height: 90vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(7, 1fr);
  gap: 10px;
  ${({ theme }) => theme.devicePort.tablet} {
    width: 60%;
  }
  @media (orientation: landscape) {
    min-height: 140vh;
    width: 40%;
  }
  ${({ theme }) => theme.deviceLand.tablet} {
    width: 30%;
  }
  ${({ theme }) => theme.deviceLand.laptop} {
    width: 50%;
  }
  ${({ theme }) => theme.deviceLand.laptopL} {
    width: 40%;
  }
`;

export {
  StyledCircle,
  StyledGrid,
  StyledHome,
  StyledLine,
  StyledP,
  StyledSquare,
};
