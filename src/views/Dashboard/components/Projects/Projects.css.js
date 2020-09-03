import styled from "styled-components";

const StyledProjects = styled.section`
  width: 90%;
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.marginBox} 0;
`;

const StyledCon = styled.section`
  width: 100%;

  @media (orientation: landscape) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export { StyledCon, StyledProjects };
