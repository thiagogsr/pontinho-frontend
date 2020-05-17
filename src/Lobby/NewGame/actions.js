import { createGameRequest } from "./client";
import { setGame } from "../../actions";
import { redirectTo } from "../../navigation";
import { setErrorFlash } from "../../Flash";

export const SET_NEW_GAME_NAME = "SET_NEW_GAME_NAME";
export const SET_NEW_GAME_BETTING_TABLE = "SET_NEW_GAME_BETTING_TABLE";
export const RESET_NEW_GAME_FORM = "RESET_NEW_GAME_FORM";

export function setNewGameName(event) {
  return { type: SET_NEW_GAME_NAME, value: event.target.value };
}

export function setNewGameBettingTable(event) {
  return {
    type: SET_NEW_GAME_BETTING_TABLE,
    index: event.target.name,
    value: parseInt(event.target.value, 10),
  };
}

export function resetNewGameForm() {
  return { type: RESET_NEW_GAME_FORM };
}

export function createGame() {
  return (dispatch, getState) => {
    const { name, bettingTable } = getState().newGameForm;

    return createGameRequest(name, bettingTable)
      .then((response) => {
        const {
          game_id: gameId,
          betting_table: bettingTable,
          player_id: playerId,
          players,
          matches,
        } = response.data;

        dispatch({ type: RESET_NEW_GAME_FORM });
        dispatch(setGame(gameId, bettingTable, players, matches));
        dispatch(redirectTo(["", gameId, playerId].join("/")));
      })
      .catch((errors) => {
        dispatch(setErrorFlash(errors));
      });
  };
}
