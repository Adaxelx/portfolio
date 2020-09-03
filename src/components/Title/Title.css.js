import styled from "styled-components";

const StyledCon = styled.section`
  width: 95%;
  margin-left: 2.5%;
  display: flex;
  flex-direction: ${({ dir }) => (dir ? "row-reverse" : "row")};
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.marginContent};
`;

const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: white;
  text-transform: uppercase;
  opacity: 0;
  margin-right: 20px;
  transform: ${({ dir }) => (dir ? "translateX(100%);" : "translateX(-100%);")}
    ${({ theme }) => theme.devicePort.tablet} {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
  ${({ theme }) => theme.devicePort.laptop} {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
`;

const StyledRectCon = styled.div`
  height: 5rem;
  width: 5rem;
  transform-origin: top right;
  overflow: hidden;
  position: relative;
  ${({ dir }) =>
    dir
      ? "clip-path: polygon(100% 0, 0% 100%, 0 0);"
      : "clip-path: polygon(100% 0, 0% 100%, 100% 100%);"}
  background-color: ${({ theme }) => theme.bColor}
    ${({ theme }) =>
    theme.devicePort.tablet} {
    height: 6rem;
    width: 6rem;
  }
  ${({ theme }) => theme.devicePort.laptop} {
    height: 7rem;
    width: 7rem;
  }
`;

export { StyledCon, StyledH1, StyledRectCon };
