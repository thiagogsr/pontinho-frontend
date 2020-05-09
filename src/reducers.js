import { combineReducers } from "redux";
import { newGameForm } from "./Lobby/NewGame/reducers";
import { joinGameForm } from "./Lobby/JoinGame/reducers";
import { flash } from "./Flash/reducers";
import { navigation } from "./navigation";
import { SET_GAME, SET_PLAYERS, SET_MATCH } from "./actions";

const gameInitialState = {
  id: null,
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
    case SET_PLAYERS:
      return { ...state, players: action.players };
    default:
      return state;
  }
};

const matchInitialState = {
  matchId: "",
  matchPlayerId: "",
  matchPlayerHand: [],
  preJoker: {},
  noStock: false,
  headDiscardPile: {},
  matchCollections: [],
  matchPlayers: [],
};

export const match = (state = matchInitialState, action) => {
  switch (action.type) {
    case SET_MATCH:
      return {
        ...state,
        matchId: action.matchId,
        matchPlayerId: action.matchPlayerId,
        matchPlayerHand: action.matchPlayerHand,
        preJoker: action.preJoker,
        noJoker: action.noJoker,
        headDiscardPile: action.headDiscardPile,
        matchCollections: action.matchCollections,
        matchPlayers: action.matchPlayers,
      };
    default:
      return state;
  }
};

export default combineReducers({
  navigation,
  newGameForm,
  joinGameForm,
  game,
  flash,
  match,
});
