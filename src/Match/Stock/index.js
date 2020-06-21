import React from "react";
import { connect } from "react-redux";
import { Container, Joker, StockDeck } from "./styled";
import StyledCard from "../StyledCard";

const Stock = ({
  roundMatchPlayerId,
  matchPlayerId,
  headStockDeck,
  preJoker,
  headDiscardPile,
  onBuy,
  onTakeDiscardPile,
}) => {
  const selectable = matchPlayerId === roundMatchPlayerId;
  const buyFirstCard = !headDiscardPile;

  return (
    <Container>
      {preJoker && <Joker value={preJoker.value} suit={preJoker.suit} />}

      {headStockDeck && (
        <StockDeck
          deck={headStockDeck}
          selectable={selectable}
          onClick={() => selectable && onBuy(buyFirstCard)}
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
};

const mapStateToProps = (state) => {
  return {
    roundMatchPlayerId: state.match.roundMatchPlayerId,
    matchPlayerId: state.matchPlayer.matchPlayerId,
    preJoker: state.match.preJoker,
    headStockDeck: state.match.headStockDeck,
    headDiscardPile: state.match.headDiscardPile,
  };
};

export default connect(mapStateToProps)(Stock);
