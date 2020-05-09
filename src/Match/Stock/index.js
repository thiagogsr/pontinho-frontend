import React from "react";
import { Container, Joker, Stock, DiscardPile } from "./styled";
import StyledCard from "../StyledCard";

export default ({ headStockDeck, preJoker, headDiscardPile }) => (
  <Container>
    {preJoker && <Joker value={preJoker.value} suit={preJoker.suit} />}
    {headStockDeck && <Stock deck={headStockDeck} />}

    <DiscardPile>
      {headDiscardPile && (
        <StyledCard value={headDiscardPile.value} suit={headDiscardPile.suit} />
      )}
    </DiscardPile>
  </Container>
);
