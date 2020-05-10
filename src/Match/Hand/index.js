import React from "react";
import { connect } from "react-redux";
import { toggleCard } from "../../actions";
import { Hand } from "./styled";
import StyledCard from "../StyledCard";

const MatchPlayerHand = ({ cards, selectedCards, myTime, toggleCard }) => (
  <Hand>
    {cards.map((card, index) => (
      <StyledCard
        key={index}
        value={card.value}
        suit={card.suit}
        selectable={myTime}
        selected={selectedCards.includes(card)}
        onClick={() => myTime && toggleCard(card)}
      />
    ))}
  </Hand>
);

const mapDispatchToProps = {
  toggleCard,
};

export default connect(null, mapDispatchToProps)(MatchPlayerHand);
