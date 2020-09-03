import React from "react";
import { Title, Project, Text } from "../../../../components";
import projectsData from "constants/projectsData";
import { StyledCon, StyledProjects } from "./Projects.css";

const Projects = () => {
  const projects = projectsData.map(({ link, transform, title, img }) => (
    <Project
      key={title}
      link={link}
      transform={transform}
      title={title}
      img={img}
    />
  ));
  return (
    <StyledProjects>
      <Title direction>Projects</Title>
      <StyledCon>{projects}</StyledCon>
      <Text fontS="3rem">
        And much more on: <a href="https://github.com/Adaxelx">github</a>
      </Text>
    </StyledProjects>
  );
};

export default Projects;
