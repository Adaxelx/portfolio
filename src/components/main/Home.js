import React from 'react';
import styled,{keyframes} from 'styled-components'

import GridItem from '../aside/GridItem'

const showText = keyframes`
  20% { opacity: 1}
  50% { opacity: 1; }
  70% {opacity: 0;}
  100% { opacity: 0; }
`

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

const StyledP = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    opacity: 0;
    background-color: ${({color,theme}) => color==='w' ? theme.bColor : 'white'};
    color: ${({color,theme}) => color!=='w' ? theme.bColor : theme.gColor};
    animation: ${showText} 10s ${({delay}) => delay ? '5s' : ''} infinite;
`

const data = [
    {
        content: 'M',
        color: 'w',
        delay: '0.1',
    },
    {
        content: 'O',
        color: 'b',
        delay: '0.2',
        start: 'true',
    },
    {
        content: 'S',
        color: 'w',
        delay: '0.3',
    },
    {
        content: 'T',
        color: 'w',
        delay: '0.4',
    },
    {
        content: 'O',
        color: 'w',
        delay: '0.5',
    },
    {
        content: 'W',
        color: 'w',
        delay: '0.6',
    },
    {
        content: 'S',
        color: 'w',
        delay: '0.7',
    },
    {
        content: 'K',
        color: 'b',
        delay: '0.8',
    },
    {
        content: 'I',
        color: 'w',
        delay: '0.9',
    },
    {
        content: <StyledCircle side='l'/>,
        color: 'b',
        delay: '2',
        side: 'left'
    },
    {
        content: <StyledSquare/>,
        color: 'w',
        delay: '1',
    },
    {
        content: <StyledCircle side='r'/>,
        color: 'b',
        delay: '2',
        side: 'right'
    },
    {
        content: <><StyledP>W</StyledP><StyledP color='w' delay>D</StyledP></>,
        color: 'w',
        delay: '1.1',
    },
    {
        content:  <><StyledP color='w'>E</StyledP><StyledP delay>E</StyledP></>,
        color: 'b',
        delay: '1.2',
        start: 'true',
    },
    {
        content:  <><StyledP>B</StyledP><StyledP color='w' delay>S</StyledP></>,
        color: 'w',
        delay: '1.3',
    },
    {
        content:  <><StyledP>D</StyledP><StyledP color='w' delay>I</StyledP></>,
        color: 'w',
        delay: '1.4',
    },
    {
        content:  <><StyledP>E</StyledP><StyledP color='w' delay>G</StyledP></>,
        color: 'w',
        delay: '1.5',
    },
    {
        content:  <><StyledP>V</StyledP><StyledP color='w' delay>N</StyledP></>,
        color: 'w',
        delay: '1.6',
    },
    {
        content: <StyledLine/>,
        color: 'w',
        delay: '2',
        side: 'left'
    },
    {
        content: <StyledLine orientation='v'/>,
        color: 'b',
        delay: '1.7',
    },
    {
        content: <StyledLine/>,
        color: 'w',
        delay: '2',
        side: 'right'
    },
]

const StyledHome = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    @media (orientation: landscape){
       height: 150vh; 
    } 
`

const StyledGrid = styled.div`
    width: 80%;
    min-height: 90vh;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(7,1fr);
    gap: 10px;
    ${({ theme }) => theme.devicePort.tablet}{
       width: 60%;
    } 
    @media (orientation: landscape){
        min-height: 140vh;
        width: 40%;
    } 
    ${({ theme }) => theme.deviceLand.tablet}{
        width: 30%;
    } 
    ${({ theme }) => theme.deviceLand.laptop}{
        width: 50%;
    } 
    ${({ theme }) => theme.deviceLand.laptopL}{
        width: 40%;
    } 
`

const Home = () => {
    const items = data.map((it,i) => <GridItem key={i} side={it.side} delay={it.delay} color={it.color} content={it.content}/>)
    return(
        <StyledHome>
            <StyledGrid>
                {items}
            </StyledGrid>
        </StyledHome>
    )
}

export default Home;