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
      <Title>Contact</Title>
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
          <Text fontS="4rem">Github</Text>
        </StyledLink>
        <StyledLink flexEnd href="https://github.com">
          <Text fontS="4rem">Linked In</Text>
        </StyledLink>
      </StyledSocials>
    </StyledContact>
  );
};

export default Contact;
