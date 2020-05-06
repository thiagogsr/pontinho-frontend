import React from "react";
import { Table } from "./styled";
import Collections from "./collections";
import Hand from "./hand";
import Players from "./players";
import Stock from "./stock";

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
