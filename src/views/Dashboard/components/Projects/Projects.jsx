import React from "react";
import { Title, Project } from "../../../../components";
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
    </StyledProjects>
  );
};

export default Projects;
