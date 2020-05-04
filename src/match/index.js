import React from "react";
import { useParams } from "react-router-dom";
import { Table } from "./styled";
import Collections from "./collections";
import Hand from "./hand";
import Players from "./players";
import Stock from "./stock";

export default () => {
  const { gameId, matchId } = useParams();

  return (
    <Table>
      <div>Game: {gameId}</div>
      <div>Match: {matchId}</div>
      <Players />
      <Stock />
      <Collections />
      <Hand />
    </Table>
  );
};
