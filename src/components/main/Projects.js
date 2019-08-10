import React from 'react'
import styled from 'styled-components'

import Title from '../aside/Title';
import Project from '../aside/Project';

/* images */

import windows from '../../images/projects/windows.png'
import salon from '../../images/projects/salon.png'
import router from '../../images/projects/react-router-2.png'
import reactImg from '../../images/skills/React.png'

const data = [
    {
        title: 'Windows',
        color: 'w',
        img: windows,
        tech: [
            {
                title: 'Styled - components',
                img: reactImg
            },
            {
                title: 'React',
                img: reactImg
            },
            {
                title: 'React',
                img: reactImg
            },
            {
                title: 'React',
                img: reactImg
            },
        ]
    },
    {
        title: 'Hair salon',
        color: 'b',
        img: salon,
        tech: [
            {
                title: 'Styled - components',
                img: reactImg
            },
            {
                title: 'React',
                img: reactImg
            },
            {
                title: 'React',
                img: reactImg
            },
            {
                title: 'React',
                img: reactImg
            },
        ]
    },
    {
        title: 'Business website',
        color: 'w',
        img: router,
        tech: [
            {
                title: 'Styled - components',
                img: reactImg
            },
            {
                title: 'React',
                img: reactImg
            },
            {
                title: 'React',
                img: reactImg
            },
            {
                title: 'React',
                img: reactImg
            },
        ]
    }
]

const StyledProjects = styled.section`
    width: 100%;
    display: flex
    flex-direction: column;
    align-items: center;
    padding: ${({theme}) => theme.marginBox} 0;
`

const Projects = () => {
    const projects = data.map((dt,i) => <Project key={i} title={dt.title} color={dt.color} img={dt.img} tech={dt.tech}/>)
    return(
        <StyledProjects>
            <Title content="Projects" direction="true"/>
            {projects}
        </StyledProjects>
    )
}

export default Projects;