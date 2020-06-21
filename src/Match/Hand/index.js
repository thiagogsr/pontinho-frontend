import React from "react";
import { connect } from "react-redux";
import { toggleCard } from "../../actions";
import { Hand, Title, FirstCardActions, FirstCardButton } from "./styled";
import StyledCard from "../StyledCard";

const MatchPlayerHand = ({
  roundMatchPlayerId,
  matchPlayerId,
  matchPlayerHand,
  selectedCards,
  toggleCard,
  takedCard,
  boughtFirstCard,
  takedDiscardPile,
  onAcceptFirstCard,
  onRejectFirstCard,
}) => {
  const selectable = matchPlayerId === roundMatchPlayerId;
  const firstCard = boughtFirstCard && takedCard;
  const takedDiscardPileCard = takedDiscardPile && takedCard;

  return (
    <Hand>
      {firstCard && (
        <div>
          <FirstCardActions>
            <FirstCardButton onClick={onAcceptFirstCard}>
              Aceitar
            </FirstCardButton>
            <FirstCardButton onClick={onRejectFirstCard}>
              Rejeitar
            </FirstCardButton>
          </FirstCardActions>
          <StyledCard value={firstCard.value} suit={firstCard.suit} />
        </div>
      )}

      {takedDiscardPileCard && (
        <div>
          <Title>Carta cavada</Title>
          <StyledCard
            value={takedDiscardPileCard.value}
            suit={takedDiscardPileCard.suit}
            selectable={true}
            selected={selectedCards.includes(takedDiscardPileCard)}
            onClick={() => toggleCard(takedDiscardPileCard)}
          />
        </div>
      )}

      {matchPlayerHand.map((card, index) => (
        <StyledCard
          key={index}
          value={card.value}
          suit={card.suit}
          selectable={selectable}
          selected={selectedCards.includes(card)}
          onClick={() => selectable && toggleCard(card)}
        />
      ))}
    </Hand>
  );
};

const mapStateToProps = (state) => {
  return {
    roundMatchPlayerId: state.match.roundMatchPlayerId,
    matchPlayerId: state.matchPlayer.matchPlayerId,
    matchPlayerHand: state.matchPlayer.matchPlayerHand,
    selectedCards: state.matchPlayer.selectedCards,
    takedCard: state.matchPlayer.takedCard,
    boughtFirstCard: state.matchPlayer.boughtFirstCard,
    takedDiscardPile: state.matchPlayer.takedDiscardPile,
  };
};

const mapDispatchToProps = {
  toggleCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(MatchPlayerHand);
