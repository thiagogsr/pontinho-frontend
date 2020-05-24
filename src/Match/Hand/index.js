import React from "react";
import { connect } from "react-redux";
import { toggleCard } from "../../actions";
import { Hand, Title, FirstCardActions, FirstCardButton } from "./styled";
import StyledCard from "../StyledCard";

const MatchPlayerHand = ({
  cards,
  selectedCards,
  selectable,
  toggleCard,
  firstCard,
  onAcceptFirstCard,
  onRejectFirstCard,
  takedDiscardPileCard,
}) => (
  <Hand>
    {firstCard && (
      <div>
        <FirstCardActions>
          <FirstCardButton onClick={onAcceptFirstCard}>Aceitar</FirstCardButton>
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

    {cards.map((card, index) => (
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

const mapDispatchToProps = {
  toggleCard,
};

export default connect(null, mapDispatchToProps)(MatchPlayerHand);
