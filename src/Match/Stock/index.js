import React from "react";
import {
  Container,
  Joker,
  Stock,
  DiscardPile,
  FirstCard,
  FirstCardActions,
  FirstCardButton,
} from "./styled";
import StyledCard from "../StyledCard";

export default ({
  headStockDeck,
  preJoker,
  headDiscardPile,
  firstCard,
  myTime,
  onBuy,
  onAcceptFirstCard,
  onRejectFirstCard,
  onTakeDiscardPile,
}) => (
  <Container>
    {preJoker && <Joker value={preJoker.value} suit={preJoker.suit} />}

    {headStockDeck && (
      <Stock
        deck={headStockDeck}
        selectable={myTime}
        onClick={() => myTime && onBuy()}
      />
    )}

    <DiscardPile>
      {headDiscardPile && (
        <StyledCard
          value={headDiscardPile.value}
          suit={headDiscardPile.suit}
          selectable={myTime}
          onClick={onTakeDiscardPile}
        />
      )}
    </DiscardPile>

    {firstCard && (
      <FirstCard>
        <StyledCard value={firstCard.value} suit={firstCard.suit} />
        <FirstCardActions>
          <FirstCardButton onClick={onAcceptFirstCard}>Aceitar</FirstCardButton>
          <FirstCardButton onClick={onRejectFirstCard}>
            Rejeitar
          </FirstCardButton>
        </FirstCardActions>
      </FirstCard>
    )}
  </Container>
);
