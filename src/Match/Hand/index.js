import React from "react";
import { Hand } from "./styled";
import StyledCard from "../StyledCard";

export default ({ cards }) => (
  <Hand>
    {cards.map(({ value, suit }, index) => (
      <StyledCard key={index} value={value} suit={suit} />
    ))}
  </Hand>
);
