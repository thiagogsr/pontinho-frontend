import React, { useState } from "react";
import { connect } from "react-redux";
import copy from "copy-to-clipboard";
import { Button, Copy, Column, Container, Row, Table, Title } from "./styled";

const Game = ({ id, bettingTable, players, matches }) => {
  const [copyButton, setCopyButton] = useState("copiar");
  const lastMatch = matches[matches.length - 1];

  return (
    <Container>
      <Title>Pontinho</Title>

      <div>
        <strong>Código:</strong> {id}
        <Copy
          onClick={() =>
            copy(id, {
              onCopy: () => {
                setCopyButton("copiado");
                setTimeout(() => setCopyButton("copiar"), 3000);
              },
            })
          }
        >
          {copyButton}
        </Copy>
      </div>

      <Button>Iniciar partida</Button>

      <Title>Tabela de aposta</Title>
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

      <Title>Jogadores</Title>
      <Table cellSpacing="0">
        <thead>
          <Row>
            {players.map((player, index) => (
              <Column header key={index}>
                {player.name}
              </Column>
            ))}

            <Column header></Column>
          </Row>
        </thead>
        <tbody>
          {matches.length === 0 && (
            <>
              <Row>
                {players.map((player, index) => (
                  <Column key={index}>{player.points}</Column>
                ))}

                <Column></Column>
              </Row>

              <Row>
                {players.map((player, index) => (
                  <Column key={index}>&nbsp;</Column>
                ))}

                <Column></Column>
              </Row>
            </>
          )}

          {matches.map((match) => (
            <>
              <Row>
                {match.match_players.map((matchPlayer) => (
                  <Column>{matchPlayer.points_before}</Column>
                ))}

                <Column></Column>
              </Row>
              <Row>
                {match.match_players.map((matchPlayer) => (
                  <Column>{matchPlayer.points}</Column>
                ))}

                <Column>{match.croupier.name}</Column>
              </Row>
            </>
          ))}

          {lastMatch && (
            <Row>
              {lastMatch.match_players.map((matchPlayer, index) => (
                <Column key={index}>{matchPlayer.points_after}</Column>
              ))}

              <Column></Column>
            </Row>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.game.id,
    bettingTable: state.game.bettingTable,
    players: state.game.players,
    matches: state.game.matches,
  };
};

export default connect(mapStateToProps)(Game);
