import React from "react";
import { Title, Text } from "../../../../components";
import { StyledAbout, StyledCon, StyledImg, StyledTxtCon } from "./About.css";
import img from "assets/mostoski.png";

const About = () => {
  return (
    <StyledAbout>
      <Title>Who am I?</Title>
      <StyledCon>
        <StyledImg src={img} />
        <StyledTxtCon>
          <Text>
            I'm Adrian, i'm 19 and i'm passionate of webdevelopment and desing.
            Doing this since '18, however I had tried earlier some other things
            like C++. For something completely different I can say that I'm
            training Taekwon-Do since 2008(almost 11 years)
          </Text>
          <Text>
            As webdeveloper i'm trying to keep my code clean and readable for
            every developer. For most of my projects I'm using React (It's my
            favourite tool) but I have good knowlege of typical JS, HTML and
            CSS. "
          </Text>
          <Text>
            Actually my plan for the future is doing more courses and keep
            trying to create better and better websites. I'm also starting soon
            studies on Politechnika Warszawska on Informatic profile.
          </Text>
        </StyledTxtCon>
      </StyledCon>
    </StyledAbout>
  );
};

export default About;
