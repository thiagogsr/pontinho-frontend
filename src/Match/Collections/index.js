import React from "react";
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

export default ({
  matchCollections,
  joker,
  addable,
  jokerReplaceable,
  onAdd,
  onJokerReplace,
}) => (
  <Container>
    {matchCollections.map((matchCollection) => {
      const Component = matchCollection.type === "sequence" ? Sequence : Trio;

      return (
        <Collection key={matchCollection.id}>
          {addable && <Plus onClick={() => onAdd(matchCollection, "BEGIN")} />}

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
                    onJokerReplace={() => onJokerReplace(matchCollection)}
                  />
                );
              }
            })}
          </Component>

          {addable && <Plus onClick={() => onAdd(matchCollection, "END")} />}
        </Collection>
      );
    })}
  </Container>
);
