import React from 'react'
import styled from 'styled-components'

const StyledCon = styled.section`
    width: 95%;
    margin-left: 2.5%;
    display: flex;
    flex-direction: ${({dir}) => dir ? 'row-reverse' : 'row'}
    align-items: center;
    justify-content: center;
`

const StyledH1 = styled.h1`
    font-size: ${({theme}) => theme.fontSize.xl}
    color: white;
    text-transform: uppercase;
    margin-right: 20px;
    transform: rotate(-5deg);
`

const StyledRectCon = styled.div`
    height: 5rem;
    width: 5rem;
    overflow: hidden;
    position: relative;
    ${({dir}) => dir? 'clip-path: polygon(100% 0, 0% 100%, 0 0);' : 'clip-path: polygon(100% 0, 0% 100%, 100% 100%);'}
    background-color: ${({theme}) => theme.bColor}
`

const Title = ({content,direction}) => {
    return(
        <StyledCon dir={direction}>
            <StyledH1>{content}</StyledH1>
            <StyledRectCon dir={direction}/>
        </StyledCon>
    )
}

export default Title;