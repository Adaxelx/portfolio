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
    height: 100%;
    &:after{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: linear-gradient(155deg, rgba(2,0,36,1) 71%, rgba(255,255,255,1) 94%);
        opacity: 0.5;
      }
`

const StyledTitle = styled.h2`
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    width: 100%;
    text-align: center;
    transform: translate(-50%,-50%);
    color: white;
`

const StyledImage = styled.img`
    width: 100%;
`

const Project = ({title,color,img}) => {
    return(
        <StyledProject color={color}>
            <StyledCon>
                <StyledTitle color={color}>{title}</StyledTitle>
                <StyledImage src={img}/>
            </StyledCon>
        </StyledProject>
    )
}

export default Project;