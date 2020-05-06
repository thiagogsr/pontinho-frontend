export const CHANGE_JOIN_GAME_FORM = "CHANGE_JOIN_GAME_FORM";
export const RESET_JOIN_GAME_FORM = "RESET_JOIN_GAME_FORM";

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
