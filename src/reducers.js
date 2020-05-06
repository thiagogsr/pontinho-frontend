import { combineReducers } from "redux";
import { game } from "./Lobby/reducers";
import { newGameForm } from "./Lobby/NewGame/reducers";
import { joinGameForm } from "./Lobby/JoinGame/reducers";

export default combineReducers({ newGameForm, joinGameForm, game });
