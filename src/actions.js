import { getGameRequest, startMatchRequest, getMatchRequest } from "./client";
import { setFlash } from "./Flash/actions";

export const SET_GAME = "SET_GAME";
export const SET_PLAYERS = "SET_PLAYERS";
export const SET_MATCH = "SET_MATCH";
export const SET_MATCH_PLAYER = "SET_MATCH_PLAYER";

export function setGame(id, bettingTable, players, matches) {
  return { type: SET_GAME, id, bettingTable, players, matches };
}

export function setPlayers(players) {
  return { type: SET_PLAYERS, players };
}

export function fetchGame(gameId) {
  return (dispatch) => {
    return getGameRequest(gameId).then((response) => {
      const {
        game_id: gameId,
        betting_table: bettingTable,
        players,
        matches,
      } = response.data;

      dispatch(setGame(gameId, bettingTable, players, matches));
    });
  };
}

export function startMatch(gameId) {
  return (dispatch) => {
    return startMatchRequest(gameId).catch((errors) => {
      const flash = [].concat(errors).map((text) => {
        return { type: "error", text };
      });

      dispatch(setFlash(flash));
    });
  };
}

export function setMatch(
  matchId,
  preJoker,
  headStockDeck,
  headDiscardPile,
  matchCollections,
  matchPlayers
) {
  return {
    type: SET_MATCH,
    matchId,
    preJoker,
    headStockDeck,
    headDiscardPile,
    matchCollections,
    matchPlayers,
  };
}

export function setMatchPlayer(matchPlayerId, matchPlayerHand) {
  return { type: SET_MATCH_PLAYER, matchPlayerId, matchPlayerHand };
}

export function fetchMatch(matchId, matchPlayerId) {
  return (dispatch) => {
    return getMatchRequest(matchId, matchPlayerId).then((response) => {
      const { match, match_player: matchPlayer } = response.data;

      const {
        match_id: matchId,
        pre_joker: preJoker,
        head_stock_deck: headStockDeck,
        head_discard_pile: headDiscardPile,
        match_collections: matchCollections,
        match_players: matchPlayers,
      } = match;

      const {
        match_player_id: matchPlayerId,
        match_player_hand: matchPlayerHand,
      } = matchPlayer;

      dispatch(
        setMatch(
          matchId,
          preJoker,
          headStockDeck,
          headDiscardPile,
          matchCollections,
          matchPlayers
        )
      );

      dispatch(setMatchPlayer(matchPlayerId, matchPlayerHand));
    });
  };
}
