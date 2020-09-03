import React from 'react';
import styled from 'styled-components'
import { TimelineMax } from 'gsap/TweenMax';

const StyledProject = styled.a`
    margin-top: ${({theme}) => theme.marginContent};
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(${({transform}) => transform});
    opacity: 0;
    background-color: ${({color,theme}) => color==='w' ? 'white' : theme.bColor}
    @media (orientation: landscape){
       width: 48%;
    } 
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


class Project extends React.Component{

    state = {active: false}

    ref = React.createRef()

    animate = () => {
        const {ref} = this
        const {active} = this.state
        const tl = new TimelineMax();
        const it = ref.current;
        if(!active){
            tl.addLabel('show')
                .to(it, .5, { y: '20px', opacity: 1 })
                .addLabel('move')
                .to(it, .2, { y: '0px'});
        }
        this.setState({
            active: true
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () =>{
        const scrollV = window.scrollY
        const { ref,animate } = this
        if (ref.current !== undefined && ref.current !== null) {
          const off = ref.current.offsetTop
          if (off < scrollV + window.innerHeight - ref.current.offsetHeight) {
                animate();
          }
        }
    }

    render(){
        const {ref} = this
        const {title,color,img,transform,link} = this.props
        return(
            <StyledProject target="_blank" href={link} transform={transform} ref={ref} color={color}>
                <StyledCon>
                    <StyledTitle color={color}>{title}</StyledTitle>
                    <StyledImage src={img}/>
                </StyledCon>
            </StyledProject>
        )
    }
}

export default Project;