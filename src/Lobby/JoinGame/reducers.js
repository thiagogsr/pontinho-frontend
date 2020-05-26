import { CHANGE_JOIN_GAME_FORM, RESET_JOIN_GAME_FORM } from "./actions";

const joinGameFormInitialState = {
  gameId: "",
  name: "",
};

export const joinGameForm = (state = joinGameFormInitialState, action) => {
  switch (action.type) {
    case CHANGE_JOIN_GAME_FORM:
      return { ...state, [action.field]: action.value };
    case RESET_JOIN_GAME_FORM:
      return joinGameFormInitialState;
    default:
      return state;
  }
};
