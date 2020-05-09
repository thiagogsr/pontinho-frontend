import React from "react";
import GameCode from "./GameCode";
import StartMatch from "./StartMatch";
import BettingTable from "./BettingTable";
import Players from "./Players";
import { Container, Title } from "./styled";

const Game = () => (
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

export default Game;
