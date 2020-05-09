import React from "react";
import { Container, MatchPlayer } from "./styled";

export default ({ matchPlayers }) => (
  <Container>
    {matchPlayers.map((matchPlayer) => (
      <MatchPlayer key={matchPlayer.id}>
        <div>{matchPlayer.name}</div>
        <div>{matchPlayer.points}</div>
        <div>{matchPlayer.cards} cartas</div>
        <div>
          {Array(matchPlayer.broke_times)
            .fill()
            .map(() => "X")
            .join()}
        </div>
      </MatchPlayer>
    ))}
  </Container>
);
