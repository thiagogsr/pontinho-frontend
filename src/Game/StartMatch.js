import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { startMatch } from "../actions";
import { Button } from "./styled";

const StartMatch = ({ startMatch }) => {
  const { gameId, playerId } = useParams();

  return (
    <Button onClick={() => startMatch(gameId, playerId)}>
      Iniciar partida
    </Button>
  );
};

const mapDispatchToProps = {
  startMatch,
};

export default connect(null, mapDispatchToProps)(StartMatch);
