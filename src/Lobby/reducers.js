import { SET_GAME } from "./actions";

const gameInitialState = {
  id: "",
  bettingTable: [],
  matches: [],
};

export const game = (state = gameInitialState, action) => {
  switch (action.type) {
    case SET_GAME:
      return {
        ...state,
        id: action.id,
        bettingTable: action.bettingTable,
        matches: action.matches,
      };
    default:
      return state;
  }
};
