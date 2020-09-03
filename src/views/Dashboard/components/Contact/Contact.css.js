import styled from "styled-components";

const StyledContact = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const StyledList = styled.ul`
  list-style-type: none;
  font-size: ${({ theme }) => theme.fontSize.l};
  width: 90%;
  padding: 15px 0;
  margin-top: ${({ theme }) => theme.marginContent};
  border-top: 2px solid ${({ theme }) => theme.bColor};
`;

const StyledSocials = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 2px solid ${({ theme }) => theme.bColor};
  border-bottom: 2px solid ${({ theme }) => theme.bColor};
  width: 90%;
  padding-bottom: 15px;
`;

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const StyledLink = styled.a`
  display: block;
  color: black;
  text-decoration: underline;
  ${({ flexEnd }) => (flexEnd ? "align-self: flex-end" : "")}
  transition: 0.5s;
  &:hover:nth-of-type(even) {
    transform: translateX(-30px);
  }
  &:hover:nth-of-type(odd) {
    transform: translateX(30px);
  }
`;

export { StyledContact, StyledLi, StyledList, StyledSocials, StyledLink };
