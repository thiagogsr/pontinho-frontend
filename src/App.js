import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Lobby from "./lobby";
import Match from "./match";
import Players from "./players";

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
