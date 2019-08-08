import React from 'react';
import styled from 'styled-components'

const StyledCircle = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 50%;
    position: absolute;
    background-color: ${({theme}) => theme.gColor}
    ${({side}) => side==='l' ? 'left: 50%;' : 'right: 50%;'}
`

const StyledLine = styled.div`
    height: 200%;
    transform-origin: center;
    ${({theme,orientation}) => `transform: translate(-50%,-50%) ${orientation==='v' ? '' : 'rotate(90deg)'};border: 1px solid ${theme.gColor};`};
    position: absolute;
    top: 50%;
    left: 50%;
`

const StyledSquare = styled.div`
    height: 60%;
    width: 60%;
    background-color: ${({theme}) => theme.gColor}
`

const data = [
    {
        content: 'M',
        color: 'w'
    },
    {
        content: 'O',
        color: 'b'
    },
    {
        content: 'S',
        color: 'w'
    },
    {
        content: 'T',
        color: 'w'
    },
    {
        content: 'O',
        color: 'w'
    },
    {
        content: 'W',
        color: 'w'
    },
    {
        content: 'S',
        color: 'w'
    },
    {
        content: 'K',
        color: 'b'
    },
    {
        content: 'I',
        color: 'w'
    },
    {
        content: <StyledCircle side='l'/>,
        color: 'b'
    },
    {
        content: <StyledSquare/>,
        color: 'w'
    },
    {
        content: <StyledCircle side='r'/>,
        color: 'b'
    },
    {
        content: 'D',
        color: 'w'
    },
    {
        content: 'E',
        color: 'b'
    },
    {
        content: 'S',
        color: 'w'
    },
    {
        content: 'I',
        color: 'w'
    },
    {
        content: 'G',
        color: 'w'
    },
    {
        content: 'N',
        color: 'w'
    },
    {
        content: <StyledLine/>,
        color: 'w'
    },
    {
        content: <StyledLine orientation='v'/>,
        color: 'b'
    },
    {
        content: <StyledLine/>,
        color: 'w'
    },
]

const StyledHome = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const StyledGrid = styled.div`
    width: 90%;
    min-height: 90vh;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(7,1fr);
    gap: 10px;
`

const StyledGridItem = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    ${({theme,bg}) => `font-size: ${theme.fontSize.l}; background-color: ${bg==='w' ? 'white' : theme.bColor};  color: ${theme.gColor}`}
`

const Home = () => {
    const items = data.map(it => <StyledGridItem bg={it.color}>{it.content}</StyledGridItem>)
    return(
        <StyledHome>
            <StyledGrid>
                {items}
            </StyledGrid>
        </StyledHome>
    )
}

export default Home;