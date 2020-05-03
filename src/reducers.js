import { combineReducers } from "redux";
import { UPDATE_TABLE } from "./actions";

const tableInitialState = {
  players: [],
  joker: [],
  stock: [],
  discardPile: [],
  collections: [],
  hand: [],
};

const table = (state = tableInitialState, action) => {
  switch (action.type) {
    case UPDATE_TABLE:
      return action.table;
    default:
      return state;
  }
};

export default combineReducers({ table });
