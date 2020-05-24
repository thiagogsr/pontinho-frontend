import React from "react";
import { Container, Sequence, Trio, TrioTwin } from "./styled";
import StyledCard from "../StyledCard";

const OneCard = ({ card, selectable }) => (
  <StyledCard
    value={card.value}
    suit={card.suit}
    width={90}
    height={126}
    selectable={selectable}
  />
);

const TwoCards = ({ cards, selectable }) => (
  <TrioTwin>
    {cards.map((card, index) => (
      <OneCard card={card} selectable={selectable} key={index} />
    ))}
  </TrioTwin>
);

export default ({ matchCollections, myTime }) => (
  <Container>
    {matchCollections.map((matchCollection) => {
      const Component = matchCollection.type === "sequence" ? Sequence : Trio;

      return (
        <Component key={matchCollection.id}>
          {matchCollection.cards.map((card, index) => {
            if (Array.isArray(card)) {
              return <TwoCards key={index} cards={card} selectable={myTime} />;
            } else {
              return <OneCard key={index} card={card} selectable={myTime} />;
            }
          })}
        </Component>
      );
    })}
  </Container>
);
