import { useHistory } from "react-router-dom";
import { createGameRequest } from "./client";

export const SET_NEW_GAME_NAME = "SET_NEW_GAME_NAME";
export const SET_NEW_GAME_BETTING_TABLE = "SET_NEW_GAME_BETTING_TABLE";
export const RESET_NEW_GAME_FORM = "RESET_NEW_GAME_FORM";
export const CHANGE_JOIN_GAME_FORM = "CHANGE_JOIN_GAME_FORM";
export const RESET_JOIN_GAME_FORM = "RESET_JOIN_GAME_FORM";
export const SET_GAME = "SET_GAME";

export function setNewGameName(event) {
  return { type: SET_NEW_GAME_NAME, value: event.target.value };
}

export function setNewGameBettingTable(event) {
  return {
    type: SET_NEW_GAME_BETTING_TABLE,
    index: event.target.name,
    value: event.target.value,
  };
}

export function resetNewGameForm() {
  return { type: RESET_NEW_GAME_FORM };
}

export function createGame(event) {
  return (dispatch, getState) => {
    event.preventDefault();

    const { name, bettingTable } = getState().newGameForm;
    console.log(name);
    console.log(bettingTable);

    createGameRequest(name, bettingTable).then((response) => {
      console.log(response);
      const history = useHistory();
      const {
        game_id: gameId,
        betting_table: bettingTable,
        player,
      } = response.data;

      dispatch({ type: SET_GAME, id: gameId, bettingTable, players: [player] });
      history.push(`/${gameId}/${player.id}`);
    });
  };
}

export function changeJoinGameForm(event) {
  return {
    type: CHANGE_JOIN_GAME_FORM,
    field: event.target.name,
    value: event.target.value,
  };
}

export function resetJoinGameForm() {
  return { type: RESET_JOIN_GAME_FORM };
}

export function joinGame() {
  return (dispatch, getState) => {};
}
