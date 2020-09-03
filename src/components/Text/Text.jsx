import React from "react";
import styled from "styled-components";
import { TimelineMax } from "gsap/TweenMax";

const StyledText = styled.p`
  margin-top: ${({ theme }) => theme.marginContent};
  font-size: ${({ theme, fontS }) => (fontS ? fontS : theme.fontSize.m)};
  width: 100%;
  text-align: justify;
  transform: translateY(100%);
  opacity: 0;
  ${({ theme }) => theme.devicePort.tablet} {
    font-size: ${({ theme, fontS }) => (fontS ? fontS : theme.fontSize.l)};
  }
`;

class Text extends React.Component {
  state = { active: false };

  ref = React.createRef();

  animate = () => {
    const { ref } = this;
    const { active } = this.state;
    const tl = new TimelineMax();
    const it = ref.current;
    if (!active) {
      tl.addLabel("show")
        .to(it, 0.5, { y: "-20px", opacity: 1 })
        .addLabel("move")
        .to(it, 0.2, { y: "0px" });
    }
    this.setState({
      active: true,
    });
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
    const { ref } = this;
    const { content, fontS } = this.props;
    return (
      <StyledText fontS={fontS} ref={ref}>
        {content}
      </StyledText>
    );
  }
}

export default Text;
