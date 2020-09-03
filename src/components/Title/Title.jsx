import React from "react";
import { TimelineMax } from "gsap/TweenMax";
import { StyledCon, StyledH1, StyledRectCon } from "./Title.css";

class Title extends React.Component {
  state = { active: false };
  container = React.createRef();
  title = React.createRef();
  triangle = React.createRef();

  animate = () => {
    const { triangle, title } = this;
    const { direction } = this.props;
    const { active } = this.state;
    const tl = new TimelineMax();
    const triangleItem = triangle.current;
    const titleItem = title.current;

    if (!active) {
      if (!direction) {
        tl.addLabel("show")
          .to(titleItem, 0.5, { x: "40px", opacity: 1 })
          .addLabel("move")
          .to(triangleItem, 0.3, { rotation: -20 })
          .to(triangleItem, 0.3, { rotation: 0 })
          .to(titleItem, 0.3, { x: "0px", rotation: -10 });

        this.setState({
          active: true,
        });
      } else {
        tl.addLabel("show")
          .to(titleItem, 0.5, { x: "-20px", opacity: 1 })
          .addLabel("move")
          .to(triangleItem, 0.3, { rotation: 20 })
          .to(triangleItem, 0.3, { rotation: 0 })
          .to(titleItem, 0.3, { x: "0px", rotation: -10 });

        this.setState({
          active: true,
        });
      }
    }
  };

  handleScroll = () => {
    const scrollV = window.scrollY;
    const { container, animate } = this;
    if (container.current !== undefined && container.current !== null) {
      const off = container.current.offsetTop;
      if (off < scrollV + window.innerHeight - container.current.offsetHeight) {
        animate();
      }
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { container, title, triangle } = this;
    const { children, direction } = this.props;
    return (
      <StyledCon ref={container} dir={direction}>
        <StyledH1 dir={direction} ref={title}>
          {children}
        </StyledH1>
        <StyledRectCon ref={triangle} dir={direction} />
      </StyledCon>
    );
  }
}

export default Title;
