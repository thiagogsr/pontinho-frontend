import { combineReducers } from "redux";
import { newGameForm } from "./Lobby/NewGame/reducers";
import { joinGameForm } from "./Lobby/JoinGame/reducers";
import { flash } from "./Flash/reducers";
import { navigation } from "./navigation";
import { SET_GAME, SET_PLAYERS, SET_MATCH, SET_MATCH_PLAYER } from "./actions";

const gameInitialState = {
  id: null,
  bettingTable: [],
  players: [],
  matches: [],
};

const game = (state = gameInitialState, action) => {
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
  preJoker: null,
  headStockDeck: null,
  headDiscardPile: null,
  matchCollections: [],
  matchPlayers: [],
};

const match = (state = matchInitialState, action) => {
  switch (action.type) {
    case SET_MATCH:
      return {
        ...state,
        matchId: action.matchId,
        matchPlayerId: action.matchPlayerId,
        matchPlayerHand: action.matchPlayerHand,
        preJoker: action.preJoker,
        headStockDeck: action.headStockDeck,
        headDiscardPile: action.headDiscardPile,
        matchCollections: action.matchCollections,
        matchPlayers: action.matchPlayers,
      };
    default:
      return state;
  }
};

const matchPlayerInitialState = {
  matchPlayerId: "",
  matchPlayerHand: [],
};

const matchPlayer = (state = matchPlayerInitialState, action) => {
  switch (action.type) {
    case SET_MATCH_PLAYER:
      return {
        ...state,
        matchPlayerId: action.matchPlayerId,
        matchPlayerHand: action.matchPlayerHand,
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
  matchPlayer,
});
