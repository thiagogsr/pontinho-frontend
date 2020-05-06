import { combineReducers } from "redux";
import { newGameForm, joinGameForm, game } from "./lobby/reducers";

export default combineReducers({ newGameForm, joinGameForm, game });
