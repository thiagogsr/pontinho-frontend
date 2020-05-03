import React from "react";
import { Hand } from "./styled";
import StyledCard from "../StyledCard";

export default () => (
  <Hand>
    <StyledCard value="2" suit="clubs" />
    <StyledCard value="3" suit="clubs" />
    <StyledCard value="4" suit="clubs" />
    <StyledCard value="5" suit="clubs" />
    <StyledCard value="6" suit="clubs" selected />
    <StyledCard value="7" suit="clubs" />
    <StyledCard value="8" suit="clubs" />
    <StyledCard value="9" suit="clubs" />
    <StyledCard value="10" suit="clubs" />
  </Hand>
);
