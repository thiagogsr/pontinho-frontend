import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { startMatch } from "../actions";
import { Button } from "./styled";

const StartMatch = ({ players, startMatch }) => {
  const { gameId, playerId } = useParams();
  const host = players.find((player) => player.id === playerId && player.host);

  if (host) {
    return <Button onClick={() => startMatch(gameId)}>Iniciar partida</Button>;
  } else {
    return null;
  }
};

const mapStateToProps = (state) => {
  return {
    players: state.game.players,
  };
};

const mapDispatchToProps = {
  startMatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(StartMatch);
