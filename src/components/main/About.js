import React from 'react';
import styled from 'styled-components'

import Title from '../aside/Title'
import Text from '../aside/Text'

import img from '../../images/mostoski.png'

const StyledAbout = styled.section`
    width: 100%;
    padding: ${({theme}) => theme.marginBox} 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledCon = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (orientation: landscape){
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        width: 90%;
    } 
`

const StyledTxtCon = styled.section`
    width: 90%;
    @media (orientation: landscape){
        width: 50%;
    } 
`

const StyledImg = styled.img`
    width: 90%;
    ${({ theme }) => theme.devicePort.tablet}{
        width: 60%;
    } 
    @media (orientation: landscape){
        width: 50%;
    } 
`
const About = () => {
    return(
        <StyledAbout>
            <Title content="Who am I?"/>
            <StyledCon>
            <StyledImg src={img}/>
            <StyledTxtCon>
            <Text content="I'm Adrian, i'm 19 and i'm passionate of webdevelopment and desing. Doing this since '18, however I had tried earlier some other things like C++. For something completely different I can say that I'm training Taekwon-Do since 2008(almost 11 years)."></Text>
            <Text content="As webdeveloper i'm trying to keep my code clean and readable for every developer. For most of my projects I'm using React (It's my favourite tool) but I have good knowlege of typical JS, HTML and CSS. "></Text>
            <Text content="Actually my plan for the future is doing more courses and keep trying to create better and better websites. I'm also starting soon studies on Politechnika Warszawska on Informatic profile."></Text>
            </StyledTxtCon>
            </StyledCon>
        </StyledAbout>
    )
}

export default About;