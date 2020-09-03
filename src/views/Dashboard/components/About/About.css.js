import styled from "styled-components";

const StyledAbout = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.marginBox} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledCon = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (orientation: landscape) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    align-items: center;
    width: 90%;
  }
`;

const StyledTxtCon = styled.section`
  width: 90%;

  @media (orientation: landscape) {
    width: 50%;
  }
  ${({ theme }) => theme.deviceLand.laptopL} {
    width: 68%;
  }
`;

const StyledImg = styled.img`
  width: 90%;
  ${({ theme }) => theme.devicePort.tablet} {
    width: 60%;
  }
  @media (orientation: landscape) {
    width: 48%;
  }
  ${({ theme }) => theme.deviceLand.laptopL} {
    width: 30%;
  }
`;

export { StyledAbout, StyledCon, StyledImg, StyledTxtCon };
