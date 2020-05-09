import { getGameRequest } from "./client";

export const SET_GAME = "SET_GAME";
export const SET_PLAYERS = "SET_PLAYERS";

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
