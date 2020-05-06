import { createGameRequest } from "./client";
import { setGame } from "../actions";

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

    createGameRequest(name, bettingTable)
      .then((response) => {
        const {
          game_id: gameId,
          betting_table: bettingTable,
          player,
        } = response.data;

        setGame(gameId, bettingTable, [player]);
        dispatch({ type: RESET_NEW_GAME_FORM });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
