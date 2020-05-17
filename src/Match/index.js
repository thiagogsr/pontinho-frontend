import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import PlayerSocket from "../PlayerSocket";
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
  matchCollections,
  roundMatchPlayerId,
  matchPlayerId,
  matchPlayerHand,
  selectedCards,
  fetchMatch,
}) => {
  const {
    playerId,
    matchId: matchIdFromUrl,
    matchPlayerId: matchPlayerIdFromUrl,
  } = useParams();

  const myTime = matchPlayerId === roundMatchPlayerId;

  useEffect(() => {
    if (!matchId) {
      fetchMatch(matchIdFromUrl, matchPlayerIdFromUrl);
      return;
    }

    const socket = new PlayerSocket(playerId);
    socket.connect();

    const channel = socket.channel(`match:${matchId}`);
    channel.join();
  });

  return (
    <Table>
      <MatchPlayers
        matchPlayers={matchPlayers}
        roundMatchPlayerId={roundMatchPlayerId}
      />

      <Stock
        headStockDeck={headStockDeck}
        headDiscardPile={headDiscardPile}
        preJoker={preJoker}
        myTime={myTime}
      />

      <Collections matchCollections={matchCollections} myTime={myTime} />

      <Hand
        cards={matchPlayerHand}
        selectedCards={selectedCards}
        myTime={myTime}
      />
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
    roundMatchPlayerId: state.match.roundMatchPlayerId,
    matchPlayerId: state.matchPlayer.matchPlayerId,
    matchPlayerHand: state.matchPlayer.matchPlayerHand,
    selectedCards: state.matchPlayer.selectedCards,
  };
};

const mapDispatchToProps = {
  fetchMatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Match);
