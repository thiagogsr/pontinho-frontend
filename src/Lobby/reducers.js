import { SET_GAME } from "./actions";

const gameInitialState = {
  id: "",
  bettingTable: [],
  players: [],
};

export const game = (state = gameInitialState, action) => {
  switch (action.type) {
    case SET_GAME:
      return {
        ...state,
        id: action.id,
        bettingTable: action.bettingTable,
        players: action.players,
      };
    default:
      return state;
  }
};
