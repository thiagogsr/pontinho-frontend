import React from "react";
import { Table } from "./styled";
import Collections from "./Collections";
import Hand from "./Hand";
import Players from "./MatchPlayers";
import Stock from "./Stock";

export default () => {
  return (
    <Table>
      <Players />
      <Stock />
      <Collections />
      <Hand />
    </Table>
  );
};
