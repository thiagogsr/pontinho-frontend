import {
  SET_NEW_GAME_NAME,
  SET_NEW_GAME_BETTING_TABLE,
  RESET_NEW_GAME_FORM,
  CHANGE_JOIN_GAME_FORM,
  RESET_JOIN_GAME_FORM,
  SET_GAME,
} from "./actions";

const newGameFormInitialState = {
  name: "",
  bettingTable: [0, 0, 0, 0, 0],
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
