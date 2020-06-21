import React from "react";
import { connect } from "react-redux";
import { Container, Action } from "./styled";

const Actions = ({
  matchPlayerId,
  roundMatchPlayerId,
  takedCard,
  askedBeat,
  falseBeat,
  selectedCards,
  matchPlayerHand,
  onDiscard,
  onDropCollection,
  onBeat,
  onAskBeat,
  onFalseBeat,
}) => {
  const canDiscard =
    matchPlayerId === roundMatchPlayerId &&
    selectedCards.length === 1 &&
    !takedCard &&
    !askedBeat;

  const canDropCollection =
    matchPlayerId === roundMatchPlayerId && selectedCards.length > 2;

  const canBeat =
    matchPlayerId === roundMatchPlayerId && matchPlayerHand.length === 0;

  const canAskBeat =
    matchPlayerHand.length > 0 &&
    !askedBeat &&
    !takedCard &&
    (matchPlayerId === roundMatchPlayerId || !falseBeat);

  const canFalseBeat = matchPlayerId === roundMatchPlayerId && askedBeat;

  return (
    <Container>
      {canDiscard && (
        <Action onClick={() => onDiscard(selectedCards)}>Descartar</Action>
      )}
      {canDropCollection && (
        <Action onClick={() => onDropCollection(selectedCards)}>
          Baixar jogo
        </Action>
      )}
      {canBeat && <Action onClick={onBeat}>Bater</Action>}
      {canAskBeat && <Action onClick={onAskBeat}>Bati</Action>}
      {canFalseBeat && <Action onClick={onFalseBeat}>Queimei</Action>}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    takedCard: state.matchPlayer.takedCard,
    askedBeat: state.matchPlayer.askedBeat,
    falseBeat: state.matchPlayer.falseBeat,
    matchPlayerHand: state.matchPlayer.matchPlayerHand,
    roundMatchPlayerId: state.match.roundMatchPlayerId,
    matchPlayerId: state.matchPlayer.matchPlayerId,
    selectedCards: state.matchPlayer.selectedCards,
  };
};

export default connect(mapStateToProps)(Actions);
