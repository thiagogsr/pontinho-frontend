import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Lobby from "./Lobby";
import Match from "./Match";
import Players from "./Players";

const App = ({ redirectTo }) => (
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

    {redirectTo && <Redirect to={redirectTo} />}
  </Router>
);

const mapStateToProps = (state) => {
  return {
    redirectTo: state.navigation.redirectTo,
  };
};

export default connect(mapStateToProps)(App);
