import styled from "styled-components";

const StyledProject = styled.div`
  margin-top: ${({ theme }) => theme.marginContent};
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(${({ transform }) => transform});
  opacity: 0;
  background-color: ${({ color, theme }) =>
    color === "w" ? "white" : theme.bColor};
  @media (orientation: landscape) {
    width: 48%;
  }
`;

const StyledCon = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: linear-gradient(
      155deg,
      rgba(2, 0, 36, 1) 71%,
      rgba(255, 255, 255, 1) 94%
    );
    opacity: 0.5;
  }
`;

const StyledTitle = styled.h2`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  width: 100%;
  text-align: center;
  transform: translate(-50%, -50%);
  color: white;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledButton = styled.a`
  display: block;
  background-color: ${({ theme }) => theme.gColor};
  margin-right: 5px;
  padding: 10px;
  color: black;
  font-size: ${({ theme }) => theme.fontSize.xs};
  &:hover {
    background-color: #face5c;
    transition: 0.5s;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;
export {
  StyledCon,
  StyledImage,
  StyledProject,
  StyledTitle,
  StyledButton,
  StyledButtonContainer,
};
