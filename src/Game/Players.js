import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Socket } from "phoenix";
import { Column, Row, Table } from "./styled";
import { setPlayers, fetchGame } from "../actions";
import { useParams } from "react-router-dom";

const Players = ({ gameId, players, matches, setPlayers, fetchGame }) => {
  const { gameId: gameIdFromUrl, playerId } = useParams();
  const lastMatch = matches[matches.length - 1];

  useEffect(() => {
    if (!gameId) {
      fetchGame(gameIdFromUrl);
      return;
    }

    const socket = new Socket("ws://localhost:4000/socket", {
      params: { player_id: playerId },
    });

    socket.connect();

    const channel = socket.channel(`game:${gameId}`);
    channel.on("player_joined", ({ players }) => setPlayers(players));
    channel.join();
  });

  return (
    <Table cellSpacing="0">
      <thead>
        <Row>
          {players.map((player) => (
            <Column header key={player.id}>
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
              {players.map((player) => (
                <Column key={player.id}>{player.points}</Column>
              ))}

              <Column></Column>
            </Row>

            <Row>
              {players.map((player) => (
                <Column key={player.id}>&nbsp;</Column>
              ))}

              <Column></Column>
            </Row>
          </>
        )}

        {matches.map((match) => (
          <>
            <Row>
              {match.match_players.map((matchPlayer) => (
                <Column key={matchPlayer.id}>
                  {matchPlayer.points_before}
                </Column>
              ))}

              <Column></Column>
            </Row>
            <Row>
              {match.match_players.map((matchPlayer) => (
                <Column key={matchPlayer.id}>{matchPlayer.points}</Column>
              ))}

              <Column>{match.croupier.name}</Column>
            </Row>
          </>
        ))}

        {lastMatch && (
          <Row>
            {lastMatch.match_players.map((matchPlayer) => (
              <Column key={matchPlayer.id}>{matchPlayer.points_after}</Column>
            ))}

            <Column></Column>
          </Row>
        )}
      </tbody>
    </Table>
  );
};

const mapStateToProps = (state) => {
  return {
    gameId: state.game.id,
    players: state.game.players,
    matches: state.game.matches,
  };
};

const mapDispatchToProps = {
  setPlayers,
  fetchGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);
