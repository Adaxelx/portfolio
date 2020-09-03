import React from "react";
import styled from "styled-components";
import { TimelineMax } from "gsap/TweenMax";

const StyledCon = styled.section`
    width: 95%;
    margin-left: 2.5%;
    display: flex;
    flex-direction: ${({ dir }) => (dir ? "row-reverse" : "row")}
    align-items: center;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.marginContent}
`;

const StyledH1 = styled.h1`
    font-size: ${({ theme }) => theme.fontSize.xl}
    color: white;
    text-transform: uppercase;
    opacity: 0;
    margin-right: 20px;
    transform: ${({ dir }) =>
      dir ? "translateX(100%);" : "translateX(-100%);"} 
    ${({ theme }) => theme.devicePort.tablet}{
        font-size: ${({ theme }) => theme.fontSize.xxl}
    } 
    ${({ theme }) => theme.devicePort.laptop}{
        font-size: ${({ theme }) => theme.fontSize.xxxl}
    } 
`;

const StyledRectCon = styled.div`
  height: 5rem;
  width: 5rem;
  transform-origin: top right;
  overflow: hidden;
  position: relative;
  ${({ dir }) =>
    dir
      ? "clip-path: polygon(100% 0, 0% 100%, 0 0);"
      : "clip-path: polygon(100% 0, 0% 100%, 100% 100%);"}
  background-color: ${({ theme }) => theme.bColor}
    ${({ theme }) =>
    theme.devicePort.tablet} {
    height: 6rem;
    width: 6rem;
  }
  ${({ theme }) => theme.devicePort.laptop} {
    height: 7rem;
    width: 7rem;
  }
`;

class Title extends React.Component {
  state = { active: false };

  ref = React.createRef();
  tit = React.createRef();
  tri = React.createRef();

  animate = () => {
    const { tri, tit } = this;
    const { direction } = this.props;
    const { active } = this.state;
    const tl = new TimelineMax();
    const it = tri.current;
    const tt = tit.current;

    if (!active) {
      console.log("xd");
      if (!direction) {
        tl.addLabel("show")
          .to(tt, 0.5, { x: "40px", opacity: 1 })
          .addLabel("move")
          .to(it, 0.3, { rotation: -20 })
          .to(it, 0.3, { rotation: 0 })
          .to(tt, 0.3, { x: "0px", rotation: -10 });

        this.setState({
          active: true,
        });
      } else {
        tl.addLabel("show")
          .to(tt, 0.5, { x: "-20px", opacity: 1 })
          .addLabel("move")
          .to(it, 0.3, { rotation: 20 })
          .to(it, 0.3, { rotation: 0 })
          .to(tt, 0.3, { x: "0px", rotation: -10 });

        this.setState({
          active: true,
        });
      }
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const scrollV = window.scrollY;
    const { ref, animate } = this;
    if (ref.current !== undefined && ref.current !== null) {
      const off = ref.current.offsetTop;
      if (off < scrollV + window.innerHeight - ref.current.offsetHeight) {
        animate();
      }
    }
  };

  render() {
    const { ref, tit, tri } = this;
    const { content, direction } = this.props;
    return (
      <StyledCon ref={ref} dir={direction}>
        <StyledH1 dir={direction} ref={tit}>
          {content}
        </StyledH1>
        <StyledRectCon ref={tri} dir={direction} />
      </StyledCon>
    );
  }
}

export default Title;
