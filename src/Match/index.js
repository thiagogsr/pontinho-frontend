import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Collections from "./Collections";
import Hand from "./Hand";
import MatchPlayers from "./MatchPlayers";
import Stock from "./Stock";
import { fetchMatch } from "../actions";
import { Table } from "./styled";

const Match = ({
  matchId,
  matchPlayers,
  headStockDeck,
  headDiscardPile,
  preJoker,
  matchPlayerHand,
  matchCollections,
  fetchMatch,
}) => {
  const {
    matchId: matchIdFromUrl,
    matchPlayerId: matchPlayerIdFromUrl,
  } = useParams();

  useEffect(() => {
    if (!matchId) {
      fetchMatch(matchIdFromUrl, matchPlayerIdFromUrl);
      return;
    }
  });

  return (
    <Table>
      <MatchPlayers matchPlayers={matchPlayers} />

      <Stock
        headStockDeck={headStockDeck}
        headDiscardPile={headDiscardPile}
        preJoker={preJoker}
      />

      <Collections matchCollections={matchCollections} />

      <Hand cards={matchPlayerHand} />
    </Table>
  );
};

const mapStateToProps = (state) => {
  return {
    matchId: state.match.matchId,
    matchPlayers: state.match.matchPlayers,
    headStockDeck: state.match.headStockDeck,
    headDiscardPile: state.match.headDiscardPile,
    preJoker: state.match.preJoker,
    matchCollections: state.match.matchCollections,
    matchPlayerHand: state.matchPlayer.matchPlayerHand,
  };
};

const mapDispatchToProps = {
  fetchMatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Match);
