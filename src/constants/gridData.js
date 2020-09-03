import React from "react";
import {
  StyledP,
  StyledCircle,
  StyledSquare,
  StyledLine,
} from "views/Dashboard/components/GridHome/GridHome.css";

const data = [
  {
    content: "M",
    color: "w",
    delay: "0.1",
  },
  {
    content: "O",
    color: "b",
    delay: "0.2",
    start: "true",
  },
  {
    content: "S",
    color: "w",
    delay: "0.3",
  },
  {
    content: "T",
    color: "w",
    delay: "0.4",
  },
  {
    content: "O",
    color: "w",
    delay: "0.5",
  },
  {
    content: "W",
    color: "w",
    delay: "0.6",
  },
  {
    content: "S",
    color: "w",
    delay: "0.7",
  },
  {
    content: "K",
    color: "b",
    delay: "0.8",
  },
  {
    content: "I",
    color: "w",
    delay: "0.9",
  },
  {
    content: <StyledCircle side="l" />,
    color: "b",
    delay: "2",
    side: "left",
  },
  {
    content: <StyledSquare />,
    color: "w",
    delay: "1",
  },
  {
    content: <StyledCircle side="r" />,
    color: "b",
    delay: "2",
    side: "right",
  },
  {
    content: (
      <>
        <StyledP>W</StyledP>
        <StyledP color="w" delay>
          D
        </StyledP>
      </>
    ),
    color: "w",
    delay: "1.1",
  },
  {
    content: (
      <>
        <StyledP color="w">E</StyledP>
        <StyledP delay>E</StyledP>
      </>
    ),
    color: "b",
    delay: "1.2",
    start: "true",
  },
  {
    content: (
      <>
        <StyledP>B</StyledP>
        <StyledP color="w" delay>
          S
        </StyledP>
      </>
    ),
    color: "w",
    delay: "1.3",
  },
  {
    content: (
      <>
        <StyledP>D</StyledP>
        <StyledP color="w" delay>
          I
        </StyledP>
      </>
    ),
    color: "w",
    delay: "1.4",
  },
  {
    content: (
      <>
        <StyledP>E</StyledP>
        <StyledP color="w" delay>
          G
        </StyledP>
      </>
    ),
    color: "w",
    delay: "1.5",
  },
  {
    content: (
      <>
        <StyledP>V</StyledP>
        <StyledP color="w" delay>
          N
        </StyledP>
      </>
    ),
    color: "w",
    delay: "1.6",
  },
  {
    content: <StyledLine />,
    color: "w",
    delay: "2",
    side: "left",
  },
  {
    content: <StyledLine orientation="v" />,
    color: "b",
    delay: "1.7",
  },
  {
    content: <StyledLine />,
    color: "w",
    delay: "2",
    side: "right",
  },
];

export default data;
