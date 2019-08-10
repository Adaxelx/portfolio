import React from 'react';
import styled from 'styled-components'

import Title from '../aside/Title'

import img from '../../images/mostoski.png'

const StyledAbout = styled.section`
    width: 100%;
    padding: ${({theme}) => theme.marginBox} 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledText = styled.p`
    margin-top: ${({theme}) => theme.marginContent}
    font-size: ${({theme}) => theme.fontSize.m}
    width: 90%;
    text-align: justify;
`

const StyledImg = styled.img`
    width: 90%;
`
const About = () => {
    return(
        <StyledAbout>
            <Title content="Who am I?"/>
            <StyledImg src={img}/>
            <StyledText>I'm Adrian, i'm 19 and i'm passionate of webdevelopment and desing. Doing this since '18, however I had tried earlier some other things like C++. For something completely different I can say that I'm training Taekwon-Do since 2008(almost 11 years).</StyledText>
            <StyledText>As webdeveloper i'm trying to keep my code clean and readable for every developer. For most of my projects I'm using React (It's my favourite tool) but I have good knowlege of typical JS, HTML and CSS. </StyledText>
            <StyledText>Actually my plan for the future is doing more courses and keep trying to create better and better websites. I'm also starting soon studies on Politechnika Warszawska on Informatic profile.</StyledText>

        </StyledAbout>
    )
}

export default About;