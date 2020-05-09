import React from "react";
import { Container, Sequence, Trio } from "./styled";
import StyledCard from "../StyledCard";

export default ({ matchCollections }) => (
  <Container>
    {matchCollections.map((matchCollection) => {
      const Component = matchCollection.type === "sequence" ? Sequence : Trio;
      return (
        <Component key={matchCollection.id}>
          {matchCollection.cards.map((card, index) => (
            <StyledCard
              key={index}
              value={card.value}
              suit={card.suit}
              width={90}
              height={126}
            />
          ))}
        </Component>
      );
    })}
  </Container>
);
