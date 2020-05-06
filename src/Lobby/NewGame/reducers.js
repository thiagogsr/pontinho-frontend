import {
  SET_NEW_GAME_NAME,
  SET_NEW_GAME_BETTING_TABLE,
  RESET_NEW_GAME_FORM,
} from "./actions";

const newGameFormInitialState = {
  name: "",
  bettingTable: [null, null, null, null, null],
};

export const newGameForm = (state = newGameFormInitialState, action) => {
  switch (action.type) {
    case SET_NEW_GAME_NAME:
      return { ...state, name: action.value };
    case SET_NEW_GAME_BETTING_TABLE:
      return {
        ...state,
        bettingTable: Object.assign([], state.bettingTable, {
          [action.index]: action.value,
        }),
      };
    case RESET_NEW_GAME_FORM:
      return newGameFormInitialState;
    default:
      return state;
  }
};
