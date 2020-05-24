import { combineReducers } from "redux";
import { newGameForm } from "./Lobby/NewGame/reducers";
import { joinGameForm } from "./Lobby/JoinGame/reducers";
import { flash } from "./Flash/reducers";
import { navigation } from "./navigation";
import {
  SET_GAME,
  SET_PLAYERS,
  SET_MATCH,
  SET_MATCH_PLAYER,
  TOGGLE_CARD,
} from "./actions";

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
  joker: null,
  headStockDeck: null,
  headDiscardPile: null,
  matchCollections: [],
  matchPlayers: [],
  roundMatchPlayerId: null,
};

const match = (state = matchInitialState, action) => {
  switch (action.type) {
    case SET_MATCH:
      return {
        ...state,
        matchId: action.matchId,
        preJoker: action.preJoker,
        joker: action.joker,
        headStockDeck: action.headStockDeck,
        headDiscardPile: action.headDiscardPile,
        matchCollections: action.matchCollections,
        matchPlayers: action.matchPlayers,
        roundMatchPlayerId: action.roundMatchPlayerId,
      };
    default:
      return state;
  }
};

const matchPlayerInitialState = {
  matchPlayerId: "",
  matchPlayerHand: [],
  selectedCards: [],
  askedBeat: false,
  falseBeat: false,
  takedCard: null,
  boughtFirstCard: false,
  takedDiscardPile: false,
};

const matchPlayer = (state = matchPlayerInitialState, action) => {
  switch (action.type) {
    case SET_MATCH_PLAYER:
      return {
        ...state,
        matchPlayerId: action.matchPlayerId,
        matchPlayerHand: action.matchPlayerHand,
        askedBeat: action.askedBeat,
        falseBeat: action.falseBeat,
        takedCard: action.takedCard,
        boughtFirstCard: action.boughtFirstCard,
        takedDiscardPile: action.takedDiscardPile,
        selectedCards: [],
      };
    case TOGGLE_CARD:
      if (state.selectedCards.find((c) => c === action.card)) {
        return {
          ...state,
          selectedCards: state.selectedCards.filter((c) => c !== action.card),
        };
      } else {
        return {
          ...state,
          selectedCards: state.selectedCards.concat(action.card),
        };
      }
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
