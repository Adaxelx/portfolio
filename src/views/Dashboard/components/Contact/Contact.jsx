import React from "react";
import { Title, Text } from "../../../../components";
import {
  StyledContact,
  StyledLi,
  StyledLink,
  StyledList,
  StyledSocials,
} from "./Contact.css";

const Contact = () => {
  return (
    <StyledContact>
      <Title content="Contact" />
      <StyledList>
        <StyledLi>
          <span>Author:</span>
          <span>Adrian Mostowski</span>
        </StyledLi>
        <StyledLi>
          <span>E-mail:</span>adaxelx@o2.pl
        </StyledLi>
      </StyledList>
      <StyledSocials>
        <StyledLink href="https://github.com">
          <Text content="Github" fontS="4rem" />
        </StyledLink>
        <StyledLink al="true" href="https://github.com">
          <Text content="Facebook" fontS="4rem" />
        </StyledLink>
        <StyledLink href="https://github.com">
          <Text content="Instagram" fontS="4rem" />
        </StyledLink>
      </StyledSocials>
    </StyledContact>
  );
};

export default Contact;
