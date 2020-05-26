import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Lobby from "./Lobby";
import Match from "./Match";
import Game from "./Game";
import Flash from "./Flash";
import { resetRedirect } from "./navigation";

function useRedirect(redirectTo, resetRedirect) {
  let location = useLocation();

  useEffect(() => {
    if (redirectTo && redirectTo === location.pathname) {
      resetRedirect();
    }
  }, [location, redirectTo, resetRedirect]);
}

const App = ({ redirectTo, resetRedirect }) => {
  useRedirect(redirectTo, resetRedirect);

  return (
    <>
      <Switch>
        <Route path="/:gameId/:playerId/:matchId/:matchPlayerId">
          <Match />
        </Route>
        <Route path="/:gameId/:playerId">
          <Game />
        </Route>
        <Route path="/">
          <Lobby />
        </Route>
      </Switch>

      <Flash />
      {redirectTo && <Redirect to={redirectTo} />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    redirectTo: state.navigation.redirectTo,
  };
};

const mapDispatchToProps = {
  resetRedirect,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
