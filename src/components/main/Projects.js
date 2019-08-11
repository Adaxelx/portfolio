import React from 'react'
import styled from 'styled-components'

import Title from '../aside/Title';
import Project from '../aside/Project';

/* images */

import windows from '../../images/projects/windows.png'
import salon from '../../images/projects/salon.png'
import router from '../../images/projects/react-router-2.png'

const data = [
    {
        title: 'Windows',
        img: windows,
        transform: '-100%',
        link: 'https://github.com/Adaxelx'
    },
    {
        title: 'Business website',
        img: router,
        transform: '-200%',
        link: 'https://github.com/Adaxelx'
    },
    {
        title: 'Hair salon',
        img: salon,
        transform: '-300%',
        link: 'https://github.com/Adaxelx'
    },
    {
        title: 'Hair salon',
        img: salon,
        transform: '-400%',
        link: 'https://github.com/Adaxelx'
    },
]

const StyledProjects = styled.section`
    width: 100%;
    display: flex
    flex-direction: column;
    align-items: center;
    padding: ${({theme}) => theme.marginBox} 0;
`

const StyledCon = styled.section`
    width: 90%;
    @media (orientation: landscape){
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    } 
`

const Projects = () => {
    const projects = data.map((dt,i) => <Project key={i} link={dt.link} transform={dt.transform} title={dt.title} color={dt.color} img={dt.img} tech={dt.tech}/>)
    return(
        <StyledProjects>
            <Title content="Projects" direction="true"/>
            <StyledCon>
                {projects}
            </StyledCon>
        </StyledProjects>
    )
}

export default Projects;