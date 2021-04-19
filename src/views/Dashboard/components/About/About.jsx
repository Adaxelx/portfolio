import React from "react";
import { Title, Text } from "../../../../components";
import { StyledAbout, StyledCon, StyledImg, StyledTxtCon } from "./About.css";
import img from "assets/zdjęcie_cv.png";

const About = () => {
  return (
    <StyledAbout>
      <Title>Who am I?</Title>
      <StyledCon>
        <StyledImg src={img} />
        <StyledTxtCon>
          <Text>
            I'm Adrian, I'm 20 and I'm passionate of web development and desing.
          </Text>
          <Text>
            As web developer I'm trying to keep my code clean and readable for
            every developer. Mainly I work with React and hooks. Recently every
            bigger project contains unit tests created with Jest and
            @testing-library
          </Text>
          <Text>
            I study Applied Computer Science at Warsaw University of Technology.
          </Text>
        </StyledTxtCon>
      </StyledCon>
    </StyledAbout>
  );
};

export default About;
