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
          <span>E-mail:</span>a.k.mostowski@gmail.com
        </StyledLi>
      </StyledList>
      <StyledSocials>
        <StyledLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Adaxelx"
        >
          <Text fontS="4rem">Github</Text>
        </StyledLink>
        <StyledLink
          target="_blank"
          rel="noopener noreferrer"
          flexEnd
          href="https://linkedin.com/in/adrian-mostowski-712b28192/"
        >
          <Text fontS="4rem">Linked In</Text>
        </StyledLink>
      </StyledSocials>
    </StyledContact>
  );
};

export default Contact;
