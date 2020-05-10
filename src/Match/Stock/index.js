import React from "react";
import { Container, Joker, Stock, DiscardPile } from "./styled";
import StyledCard from "../StyledCard";

export default ({ headStockDeck, preJoker, headDiscardPile, myTime }) => (
  <Container>
    {preJoker && <Joker value={preJoker.value} suit={preJoker.suit} />}
    {headStockDeck && <Stock deck={headStockDeck} selectable={myTime} />}

    <DiscardPile>
      {headDiscardPile && (
        <StyledCard
          value={headDiscardPile.value}
          suit={headDiscardPile.suit}
          selectable={myTime}
        />
      )}
    </DiscardPile>
  </Container>
);
