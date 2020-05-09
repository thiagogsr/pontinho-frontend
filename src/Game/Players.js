import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Socket } from "phoenix";
import { useParams } from "react-router-dom";
import { setPlayers, fetchGame, setMatch } from "../actions";
import { redirectTo } from "../navigation";
import { Column, Row, Table } from "./styled";

const Players = ({
  gameId,
  players,
  matches,
  setPlayers,
  fetchGame,
  setMatch,
  redirectTo,
}) => {
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

    channel.on("match_started", (match) => {
      const {
        match_id: matchId,
        match_player_id: matchPlayerId,
        match_player_hand: matchPlayerHand,
        pre_joker: preJoker,
        no_stock: noStock,
        head_discard_pile: headDiscardPile,
        match_collections: matchCollections,
        match_players: matchPlayers,
      } = match;

      setMatch(
        matchId,
        matchPlayerId,
        matchPlayerHand,
        preJoker,
        noStock,
        headDiscardPile,
        matchCollections,
        matchPlayers
      );

      redirectTo([gameId, playerId, matchId, matchPlayerId].join("/"));
    });

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
          <Fragment key={match.id}>
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
          </Fragment>
        ))}

        {lastMatch && (
          <>
            <Row>
              {lastMatch.match_players.map((matchPlayer) => (
                <Column key={matchPlayer.id}>{matchPlayer.points_after}</Column>
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
  setMatch,
  redirectTo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);
