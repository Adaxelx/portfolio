import React from 'react';
import styled from 'styled-components'

import Title from '../aside/Title'

import img from '../../images/mostoski.png'

const StyledAbout = styled.section`
    width: 100%;
    height: 100vh;
    margin-top: ${({theme}) => theme.marginBox}
    display: flex;
    flex-direction: column;
    align-items: center;
`


const StyledImg = styled.img`
    width: 90%;
`
const About = () => {
    return(
        <StyledAbout>
            <Title content="Kim jestem?"/>
            <StyledImg src={img}/>
        </StyledAbout>
    )
}

export default About;