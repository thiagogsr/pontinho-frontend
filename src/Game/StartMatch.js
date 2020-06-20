import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { startMatch } from "../actions";
import { Button } from "./styled";

const StartMatch = ({ players, startMatch }) => {
  const { gameId, playerId } = useParams();
  const me = players.find((player) => player.id === playerId);

  if (me && me.host) {
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
