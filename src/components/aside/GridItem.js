import React, {useEffect} from 'react';
import styled from 'styled-components';
import { TimelineMax } from 'gsap/TweenMax';

const StyledGridItem = styled.div`
    position: relative;
    overflow: hidden;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    opacity: 0;
    ${({theme,bg}) => `font-size: ${theme.fontSize.l}; background-color: ${bg==='w' ? 'white' : theme.bColor};  color: ${bg!=='w' ? theme.gColor : theme.bColor};}`}
`

const GridItems = ({color,content,delay,side}) => {
    const gridItem = React.createRef();

    useEffect(() => {
        const timer = setTimeout(animate, 100);
        return () => clearTimeout(timer);
      });

    const animate = () => {
        const it = gridItem.current;
        const tl = new TimelineMax();
   
        if(side==='left'){
            tl.addLabel('hide')
                .to(it, 0.1, { x: '-100%', delay: `${delay}` })
                .addLabel('show')
                .to(it, .5, { x: '0%', opacity: 1 });
        }
        else if(side==='right'){
            tl.addLabel('hide')
                .to(it, 0.1, { x: '100%', delay: `${delay}` })
                .addLabel('show')
                .to(it, .5, { x: '0%', opacity: 1 });
        }
        else{
            tl.addLabel('hide')
                .to(it, 0.1, { y: '100%', delay: `${delay}` })
                .addLabel('show')
                .to(it, .5, { y: '0%', opacity: 1 });
        }
        }

    
    return(
        <StyledGridItem ref={gridItem} bg={color}>{content}</StyledGridItem>
    )
}

export default GridItems;