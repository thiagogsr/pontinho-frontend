import React from "react";
import { Container, Joker, Stock } from "./styled";
import StyledCard from "../StyledCard";

export default ({
  headStockDeck,
  preJoker,
  headDiscardPile,
  selectable,
  onBuy,
  onTakeDiscardPile,
}) => (
  <Container>
    {preJoker && <Joker value={preJoker.value} suit={preJoker.suit} />}

    {headStockDeck && (
      <Stock
        deck={headStockDeck}
        selectable={selectable}
        onClick={() => selectable && onBuy()}
      />
    )}

    {headDiscardPile && (
      <StyledCard
        value={headDiscardPile.value}
        suit={headDiscardPile.suit}
        selectable={selectable}
        onClick={onTakeDiscardPile}
      />
    )}
  </Container>
);
