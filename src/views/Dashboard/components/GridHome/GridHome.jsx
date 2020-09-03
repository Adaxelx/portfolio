import React from "react";

import { StyledHome, StyledGrid } from "./GridHome.css";
import gridData from "constants/gridData";

import { GridItem } from "../";

const GridHome = () => {
  const items = gridData.map((it, i) => (
    <GridItem
      key={i}
      side={it.side}
      delay={it.delay}
      color={it.color}
      content={it.content}
    />
  ));
  return (
    <StyledHome>
      <StyledGrid>{items}</StyledGrid>
    </StyledHome>
  );
};

export default GridHome;
