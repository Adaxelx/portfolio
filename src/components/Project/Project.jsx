import React from "react";
import { TimelineMax } from "gsap/TweenMax";
import {
  StyledCon,
  StyledImage,
  StyledProject,
  StyledTitle,
  StyledButton,
  StyledButtonContainer,
} from "./Project.css";

class Project extends React.Component {
  state = { active: false };

  ref = React.createRef();

  animate = () => {
    const { ref } = this;
    const { active } = this.state;
    const tl = new TimelineMax();
    const it = ref.current;
    if (!active) {
      tl.addLabel("show")
        .to(it, 0.5, { y: "20px", opacity: 1 })
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
    const { title, color, img, transform, link, live } = this.props;
    return (
      <StyledProject transform={transform} ref={ref} color={color}>
        <StyledCon>
          <StyledTitle color={color}>{title}</StyledTitle>
          <StyledImage src={img} />
        </StyledCon>
        <StyledButtonContainer>
          <StyledButton target="_blank" rel="noopener noreferrer" href={live}>
            Live
          </StyledButton>
          <StyledButton target="_blank" rel="noopener noreferrer" href={link}>
            Github/code
          </StyledButton>
        </StyledButtonContainer>
      </StyledProject>
    );
  }
}

export default Project;
