import { getGameRequest, startMatchRequest } from "./client";
import { setFlash } from "./Flash/actions";

export const SET_GAME = "SET_GAME";
export const SET_PLAYERS = "SET_PLAYERS";
export const SET_MATCH = "SET_MATCH";

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
  matchPlayerId,
  matchPlayerHand,
  preJoker,
  noStock,
  headDiscardPile,
  matchCollections,
  matchPlayers
) {
  return {
    type: SET_MATCH,
    matchId,
    matchPlayerId,
    matchPlayerHand,
    preJoker,
    noStock,
    headDiscardPile,
    matchCollections,
    matchPlayers,
  };
}
