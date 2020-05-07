import { combineReducers } from "redux";
import { game } from "./Lobby/reducers";
import { newGameForm } from "./Lobby/NewGame/reducers";
import { joinGameForm } from "./Lobby/JoinGame/reducers";
import { flash } from "./Flash/reducers";
import { navigation } from "./navigation";

export default combineReducers({
  navigation,
  newGameForm,
  joinGameForm,
  game,
  flash,
});
