import React from "react";
import { StyledCon, StyledFooter } from "./Footer.css";
import { Text } from "../";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledCon>
        <Text fontS="3rem">
          Created and designed by Adrian Mostowski in 2019
        </Text>
      </StyledCon>
    </StyledFooter>
  );
};

export default Footer;
