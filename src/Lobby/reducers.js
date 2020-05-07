import { SET_GAME } from "./actions";

const gameInitialState = {
  id: "",
  bettingTable: [],
  players: [],
  matches: [],
};

export const game = (state = gameInitialState, action) => {
  switch (action.type) {
    case SET_GAME:
      return {
        ...state,
        id: action.id,
        bettingTable: action.bettingTable,
        players: action.players,
        matches: action.matches,
      };
    default:
      return state;
  }
};
