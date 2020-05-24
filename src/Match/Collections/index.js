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

const OneCard = ({ card }) => (
  <StyledCard value={card.value} suit={card.suit} width={90} />
);

const TwoCards = ({ cards }) => (
  <TrioTwin>
    {cards.map((card, index) => (
      <OneCard card={card} key={index} />
    ))}
  </TrioTwin>
);

export default ({ matchCollections, selectable, onSelect }) => (
  <Container>
    {matchCollections.map((matchCollection) => {
      const Component = matchCollection.type === "sequence" ? Sequence : Trio;

      return (
        <Collection key={matchCollection.id}>
          {selectable && (
            <Plus onClick={() => onSelect(matchCollection, "BEGIN")} />
          )}

          <Component>
            {matchCollection.cards.map((card, index) => {
              if (Array.isArray(card)) {
                return <TwoCards key={index} cards={card} />;
              } else {
                return <OneCard key={index} card={card} />;
              }
            })}
          </Component>

          {selectable && (
            <Plus onClick={() => onSelect(matchCollection, "END")} />
          )}
        </Collection>
      );
    })}
  </Container>
);
