import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Lobby from "./Lobby";
import Match from "./Match";
import Players from "./Players";

const App = () => (
  <Router>
    <Switch>
      <Route path="/:gameId/:playerId/:matchId/:matchPlayerId">
        <Match />
      </Route>
      <Route path="/:gameId/:playerId">
        <Players />
      </Route>
      <Route path="/">
        <Lobby />
      </Route>
    </Switch>
  </Router>
);

export default App;
