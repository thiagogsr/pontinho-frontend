import React from "react";
import { Container, MatchPlayer } from "./styled";

export default ({ matchPlayers, roundMatchPlayerId }) => (
  <Container>
    {matchPlayers.map((matchPlayer) => (
      <MatchPlayer
        key={matchPlayer.match_player_id}
        current={matchPlayer.match_player_id === roundMatchPlayerId}
      >
        <div>{matchPlayer.player_name}</div>
        <div>{matchPlayer.game_points}</div>
        <div>{matchPlayer.number_of_cards} cartas</div>
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
