import React from "react";
import { connect } from "react-redux";
import { Column, Row, Table } from "./styled";

const BettingTable = ({ bettingTable }) => (
  <Table cellSpacing="0">
    <thead>
      <Row>
        <Column header>Sem X</Column>
        <Column header>X</Column>
        <Column header>XX</Column>
        <Column header>XXX</Column>
        <Column header>XXXX</Column>
        <Column header>XXXXX</Column>
      </Row>
    </thead>
    <tbody>
      <Row>
        {bettingTable.map((amount, index) => (
          <Column key={index}>{amount}</Column>
        ))}
      </Row>
    </tbody>
  </Table>
);

const mapStateToProps = (state) => {
  return {
    bettingTable: state.game.bettingTable,
  };
};

export default connect(mapStateToProps)(BettingTable);
