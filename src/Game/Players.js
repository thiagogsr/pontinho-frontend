import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import PlayerSocket from "../PlayerSocket";
import { setPlayers, setMatch, setMatchPlayer } from "../actions";
import { redirectTo } from "../navigation";
import { Column, Row, Table } from "./styled";

const Players = ({
  gameId,
  players,
  matches,
  setPlayers,
  setMatch,
  setMatchPlayer,
  redirectTo,
}) => {
  const { playerId } = useParams();
  const host = players.find((player) => player.host);
  const numberOfMatches = matches.length;

  useEffect(() => {
    if (!gameId) {
      return;
    }

    const socket = new PlayerSocket(playerId);
    socket.connect();

    const channel = socket.channel(`game:${gameId}`);

    channel.on("player_joined", ({ players }) => setPlayers(players));

    channel.on("match_started", (data) => {
      const { match, match_player: matchPlayer } = data;

      const {
        match_id: matchId,
        pre_joker: preJoker,
        joker,
        head_stock_deck: headStockDeck,
        head_discard_pile: headDiscardPile,
        match_collections: matchCollections,
        match_players: matchPlayers,
        round_match_player_id: roundMatchPlayerId,
      } = match;

      const {
        match_player_id: matchPlayerId,
        match_player_hand: matchPlayerHand,
        asked_beat: askedBeat,
        false_beat: falseBeat,
        taked_card: takedCard,
        bought_first_card: boughtFirstCard,
        taked_discard_pile: takedDiscardPile,
      } = matchPlayer;

      setMatch(
        matchId,
        preJoker,
        joker,
        headStockDeck,
        headDiscardPile,
        matchCollections,
        matchPlayers,
        roundMatchPlayerId
      );

      setMatchPlayer(
        matchPlayerId,
        matchPlayerHand,
        askedBeat,
        falseBeat,
        takedCard,
        boughtFirstCard,
        takedDiscardPile
      );

      redirectTo(["", gameId, playerId, matchId, matchPlayerId].join("/"));
    });

    channel.join();
  });

  return (
    <Table cellSpacing="0">
      <thead>
        <Row>
          {players.map((player) => (
            <Column header key={player.id} lineThrough={!player.playing}>
              {player.name} {host && player.id === host.id ? "👑" : ""}
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
                <Column key={matchPlayer.id}>
                  {matchPlayer.broke
                    ? Array(matchPlayer.broke)
                        .fill()
                        .map(() => "X")
                        .join("")
                    : matchPlayer.points}
                </Column>
              ))}

              <Column>{match.croupier}</Column>
            </Row>
          </Fragment>
        ))}

        {numberOfMatches > 0 && (
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
  setMatch,
  redirectTo,
  setMatchPlayer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);
