import React from 'react';
import styled from 'styled-components'

const StyledProject = styled.section`
    margin-top: ${({theme}) => theme.marginContent};
    position: relative;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({color,theme}) => color==='w' ? 'white' : theme.bColor}
`

const StyledCon = styled.div`
    position: relative;
    width: 100%;
    &:after{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: linear-gradient(155deg, rgba(2,0,36,1) 71%, rgba(255,255,255,1) 94%);
        opacity: 0.3;
      }
`

const StyledTitle = styled.h2`
    position: absolute;
    z-index: 2;
    top: 20%;
    left: 50%;
    width: 100%;
    text-align: center;
    transform: translate(-50%,-50%);
    color: ${({color,theme}) => color==='w' ? 'white' : theme.bColor}
`

const StyledImage = styled.img`
    width: 100%;
`

const StyledTechCon = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
`

const StyledTech = styled.div`
    margin: ${({theme}) => theme.marginContent} 5px;
    display: flex
    flex-direction: column;
    align-items: center;
    width: 10rem;
    height: 10rem;
    background-color: ${({color,theme}) => color!=='w' ? 'white' : theme.bColor}
`
const StyledTechImg = styled.img`
    width: 60%;
    margin-top: 5px;
`
const StyledDesc = styled.h3`
    margin: 10px 0;
    text-align: center;
    font-size: ${({theme}) => theme.fontSize.xs}
    color: ${({color,theme}) => color==='w' ? 'white' : theme.bColor}
`

const Project = ({title,color,img,tech}) => {
    const icons = tech.map((ic,i)=> <StyledTech color={color}><StyledTechImg src={ic.img}/><StyledDesc color={color}>{ic.title}</StyledDesc></StyledTech>)
    return(
        <StyledProject color={color}>
            <StyledCon>
                <StyledTitle color={color}>{title}</StyledTitle>
                <StyledImage src={img}/>
            </StyledCon>
            <StyledTechCon>
                {icons}
            </StyledTechCon>
        </StyledProject>
    )
}

export default Project;