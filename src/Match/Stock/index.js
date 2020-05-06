import React from "react";
import { Container, Joker, Stock, DiscardPile } from "./styled";
import StyledCard from "../StyledCard";

export default () => (
  <Container>
    <Joker value="A" suit="spades" />
    <Stock color="black" />

    <DiscardPile>
      <StyledCard value="K" suit="hearts" />
      <StyledCard value="Q" suit="hearts" />
    </DiscardPile>
  </Container>
);
