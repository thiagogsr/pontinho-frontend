import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import NotificationSound from "./NotificationSound";
import { Container, MatchPlayer } from "./styled";

const MatchPlayers = ({ matchPlayers, roundMatchPlayerId }) => {
  const { matchPlayerId } = useParams();

  return (
    <Container>
      {matchPlayerId === roundMatchPlayerId && <NotificationSound />}

      {matchPlayers.map((matchPlayer) => {
        const current = matchPlayer.match_player_id === roundMatchPlayerId;

        return (
          <MatchPlayer key={matchPlayer.match_player_id} current={current}>
            <div>{matchPlayer.player_name}</div>
            <div>{matchPlayer.game_points} pontos</div>
            <div>{matchPlayer.number_of_cards} cartas</div>
            <div>
              {Array(matchPlayer.broke_times)
                .fill()
                .map(() => "X")
                .join("")}
            </div>
          </MatchPlayer>
        );
      })}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    matchPlayers: state.match.matchPlayers,
    roundMatchPlayerId: state.match.roundMatchPlayerId,
  };
};

export default connect(mapStateToProps)(MatchPlayers);
