import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PlayerSocket from "../PlayerSocket";
import Collections from "./Collections";
import Hand from "./Hand";
import MatchPlayers from "./MatchPlayers";
import Stock from "./Stock";
import { fetchMatch, setMatch, setMatchPlayer } from "../actions";
import { setErrorFlash } from "../Flash";
import { Table } from "./styled";

class Match extends React.Component {
  componentDidMount() {
    const {
      matchId,
      fetchMatch,
      match: {
        params: {
          matchId: matchIdFromUrl,
          matchPlayerId: matchPlayerIdFromUrl,
        },
      },
    } = this.props;

    if (matchId) {
      this.joinChannel();
    } else {
      fetchMatch(matchIdFromUrl, matchPlayerIdFromUrl);
    }
  }

  componentDidUpdate() {
    this.joinChannel();
  }

  componentWillUnmount() {
    this.leaveChannel();
  }

  joinChannel() {
    if (typeof this.channel !== "undefined") {
      return;
    }

    const {
      matchId,
      setMatch,
      setMatchPlayer,
      match: {
        params: { playerId },
      },
    } = this.props;

    const socket = new PlayerSocket(playerId);
    socket.connect();

    this.channel = socket.channel(`match:${matchId}`);

    this.channel.on("refresh", (data) => {
      const { match, match_player: matchPlayer } = data;

      const {
        match_id: matchId,
        pre_joker: preJoker,
        head_stock_deck: headStockDeck,
        head_discard_pile: headDiscardPile,
        match_collections: matchCollections,
        match_players: matchPlayers,
        round_match_player_id: roundMatchPlayerId,
      } = match;

      const {
        match_player_id: matchPlayerId,
        match_player_hand: matchPlayerHand,
        taked_card: takedCard,
      } = matchPlayer;

      setMatch(
        matchId,
        preJoker,
        headStockDeck,
        headDiscardPile,
        matchCollections,
        matchPlayers,
        roundMatchPlayerId
      );

      setMatchPlayer(matchPlayerId, matchPlayerHand, takedCard);
    });

    this.channel.on("beat", () => {});

    this.channel.join();
  }

  leaveChannel() {
    if (typeof this.channel !== "undefined") {
      this.channel.leave();
    }
  }

  connectedChannel() {
    if (typeof this.channel === "undefined") {
      const { setErrorFlash } = this.props;
      setErrorFlash(["Conexão perdida, por favor recarregue a página."]);
      return false;
    } else {
      return true;
    }
  }

  timeoutChannel = () => {
    const { setErrorFlash } = this.props;

    setErrorFlash([
      "O servidor está demorando de responder, aguarde mais um pouco.",
    ]);
  };

  onBuy = () => {
    if (!this.connectedChannel()) {
      return;
    }

    const { headDiscardPile, setErrorFlash } = this.props;

    if (headDiscardPile) {
      const payload = { type: "BUY" };

      this.channel
        .push("match_event", payload)
        .receive("error", ({ errors }) => setErrorFlash(errors))
        .receive("timeout", this.timeoutChannel);
    } else {
      const payload = { type: "BUY_FIRST_CARD" };

      this.channel
        .push("match_event", payload)
        .receive("error", ({ errors }) => setErrorFlash(errors))
        .receive("timeout", this.timeoutChannel);
    }
  };

  onAcceptFirstCard = () => {
    if (!this.connectedChannel()) {
      return;
    }

    const payload = { type: "ACCEPT_FIRST_CARD" };

    this.channel
      .push("match_event", payload)
      .receive("error", ({ errors }) => setErrorFlash(errors))
      .receive("timeout", this.timeoutChannel);
  };

  onRejectFirstCard = () => {
    if (!this.connectedChannel()) {
      return;
    }

    const payload = { type: "REJECT_FIRST_CARD" };

    this.channel
      .push("match_event", payload)
      .receive("error", ({ errors }) => setErrorFlash(errors))
      .receive("timeout", this.timeoutChannel);
  };

  onDiscard() {}

  onTakeDiscardPile() {}

  render() {
    const {
      matchPlayers,
      roundMatchPlayerId,
      headStockDeck,
      headDiscardPile,
      preJoker,
      matchCollections,
      matchPlayerId,
      matchPlayerHand,
      selectedCards,
      takedCard,
    } = this.props;

    const myTime = matchPlayerId === roundMatchPlayerId;

    return (
      <Table>
        <MatchPlayers
          matchPlayers={matchPlayers}
          roundMatchPlayerId={roundMatchPlayerId}
        />

        <Stock
          myTime={myTime}
          headStockDeck={headStockDeck}
          headDiscardPile={headDiscardPile}
          preJoker={preJoker}
          firstCard={takedCard}
          onAcceptFirstCard={this.onAcceptFirstCard}
          onRejectFirstCard={this.onRejectFirstCard}
          onBuy={this.onBuy}
          onTakeDiscardPile={this.onTakeDiscardPile}
        />

        <Collections matchCollections={matchCollections} myTime={myTime} />

        <Hand
          cards={matchPlayerHand}
          selectedCards={selectedCards}
          myTime={myTime}
        />
      </Table>
    );
  }
}

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
    takedCard: state.matchPlayer.takedCard,
    selectedCards: state.matchPlayer.selectedCards,
  };
};

const mapDispatchToProps = {
  fetchMatch,
  setErrorFlash,
  setMatch,
  setMatchPlayer,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Match));
