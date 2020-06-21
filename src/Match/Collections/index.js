import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Collection,
  Sequence,
  Trio,
  TrioTwin,
  Plus,
} from "./styled";
import StyledCard from "../StyledCard";

const OneCard = ({ card, replaceable, onJokerReplace }) => (
  <StyledCard
    value={card.value}
    suit={card.suit}
    width={90}
    selectable={replaceable}
    onClick={() => replaceable && onJokerReplace()}
  />
);

const TwoCards = ({ cards }) => (
  <TrioTwin>
    {cards.map((card, index) => (
      <OneCard card={card} key={index} selectable={false} />
    ))}
  </TrioTwin>
);

const Collections = ({
  matchCollections,
  joker,
  selectedCards,
  matchPlayerId,
  roundMatchPlayerId,
  onAdd,
  onJokerReplace,
}) => {
  const addable =
    matchPlayerId === roundMatchPlayerId && selectedCards.length > 0;

  const jokerReplaceable =
    matchPlayerId === roundMatchPlayerId && selectedCards.length === 1;

  return (
    <Container>
      {matchCollections.map((matchCollection) => {
        const Component = matchCollection.type === "sequence" ? Sequence : Trio;

        return (
          <Collection key={matchCollection.id}>
            {addable && (
              <Plus
                onClick={() => onAdd(matchCollection, "BEGIN", selectedCards)}
              />
            )}

            <Component>
              {matchCollection.cards.map((card, index) => {
                if (Array.isArray(card)) {
                  return <TwoCards key={index} cards={card} />;
                } else {
                  return (
                    <OneCard
                      key={index}
                      card={card}
                      replaceable={
                        jokerReplaceable &&
                        joker.value === card.value &&
                        joker.suit === card.suit
                      }
                      onJokerReplace={() =>
                        onJokerReplace(matchCollection, selectedCards)
                      }
                    />
                  );
                }
              })}
            </Component>

            {addable && (
              <Plus
                onClick={() => onAdd(matchCollection, "END", selectedCards)}
              />
            )}
          </Collection>
        );
      })}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    roundMatchPlayerId: state.match.roundMatchPlayerId,
    matchPlayerId: state.matchPlayer.matchPlayerId,
    matchCollections: state.match.matchCollections,
    joker: state.match.joker,
    selectedCards: state.matchPlayer.selectedCards,
  };
};

export default connect(mapStateToProps)(Collections);
