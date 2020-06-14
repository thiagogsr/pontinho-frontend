import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import GameCode from "./GameCode";
import StartMatch from "./StartMatch";
import BettingTable from "./BettingTable";
import Players from "./Players";
import { fetchGame } from "../actions";
import { Container, Title } from "./styled";

const Game = ({ fetchGame }) => {
  const { gameId } = useParams();

  useEffect(() => {
    fetchGame(gameId);
  });

  return (
    <Container>
      <Title>Pontinho</Title>
      <GameCode />

      <StartMatch />

      <Title>Tabela de aposta</Title>
      <BettingTable />

      <Title>Jogadores</Title>
      <Players />
    </Container>
  );
};

const mapDispatchToProps = {
  fetchGame,
};

export default connect(null, mapDispatchToProps)(Game);
