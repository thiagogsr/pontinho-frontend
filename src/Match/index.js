import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PlayerSocket from "../PlayerSocket";
import Collections from "./Collections";
import Hand from "./Hand";
import MatchPlayers from "./MatchPlayers";
import Stock from "./Stock";
import Actions from "./Actions";
import { setErrorFlash, setSuccessFlash } from "../Flash";
import { redirectTo } from "../navigation";
import { fetchMatch, setMatch, setMatchPlayer } from "../actions";
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
      redirectTo,
      setSuccessFlash,
      match: {
        params: { gameId, playerId },
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
        joker,
        head_stock_deck: headStockDeck,
        head_discard_pile: headDiscardPile,
        match_collections: matchCollections,
        match_players: matchPlayers,
        round_match_player_id: roundMatchPlayerId,
      } = match;

      const {
        match_player_id: matchPlayerId,
        match_player_hand: matchPlayerHand,
        asked_beat: askedBeat,
        false_beat: falseBeat,
        taked_card: takedCard,
        bought_first_card: boughtFirstCard,
        taked_discard_pile: takedDiscardPile,
      } = matchPlayer;

      setMatch(
        matchId,
        preJoker,
        joker,
        headStockDeck,
        headDiscardPile,
        matchCollections,
        matchPlayers,
        roundMatchPlayerId
      );

      setMatchPlayer(
        matchPlayerId,
        matchPlayerHand,
        askedBeat,
        falseBeat,
        takedCard,
        boughtFirstCard,
        takedDiscardPile
      );
    });

    this.channel.on("beat", (data) => {
      const { player_name: playerName } = data;

      setSuccessFlash(
        `${playerName} bateu! Você será redirecionado em 5 segundos...`
      );

      window.setTimeout(() => {
        redirectTo(["", gameId, playerId].join("/"));
      }, 5000);
    });

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

    const { setErrorFlash } = this.props;
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

    const { setErrorFlash } = this.props;
    const payload = { type: "REJECT_FIRST_CARD" };

    this.channel
      .push("match_event", payload)
      .receive("error", ({ errors }) => setErrorFlash(errors))
      .receive("timeout", this.timeoutChannel);
  };

  onDiscard = () => {
    if (!this.connectedChannel()) {
      return;
    }

    const { selectedCards, setErrorFlash } = this.props;
    const payload = { type: "DISCARD", cards: selectedCards };

    this.channel
      .push("match_event", payload)
      .receive("error", ({ errors }) => setErrorFlash(errors))
      .receive("timeout", this.timeoutChannel);
  };

  onTakeDiscardPile = () => {
    if (!this.connectedChannel()) {
      return;
    }

    const { setErrorFlash } = this.props;
    const payload = { type: "TAKE_DISCARD_PILE" };

    this.channel
      .push("match_event", payload)
      .receive("error", ({ errors }) => setErrorFlash(errors))
      .receive("timeout", this.timeoutChannel);
  };

  onAskBeat = () => {
    if (!this.connectedChannel()) {
      return;
    }

    const { setErrorFlash } = this.props;
    const payload = { type: "ASK_BEAT" };

    this.channel
      .push("match_event", payload)
      .receive("error", ({ errors }) => setErrorFlash(errors))
      .receive("timeout", this.timeoutChannel);
  };

  onFalseBeat = () => {
    if (!this.connectedChannel()) {
      return;
    }

    const { setErrorFlash } = this.props;
    const payload = { type: "FALSE_BEAT" };

    this.channel
      .push("match_event", payload)
      .receive("error", ({ errors }) => setErrorFlash(errors))
      .receive("timeout", this.timeoutChannel);
  };

  onBeat = () => {
    if (!this.connectedChannel()) {
      return;
    }

    const { setErrorFlash } = this.props;
    const payload = { type: "BEAT" };

    this.channel
      .push("match_event", payload)
      .receive("error", ({ errors }) => setErrorFlash(errors))
      .receive("timeout", this.timeoutChannel);
  };

  onDropCollection = () => {
    if (!this.connectedChannel()) {
      return;
    }

    const { selectedCards, setErrorFlash } = this.props;
    const payload = { type: "DROP_COLLECTION", cards: selectedCards };

    this.channel
      .push("match_event", payload)
      .receive("error", ({ errors }) => setErrorFlash(errors))
      .receive("timeout", this.timeoutChannel);
  };

  onAddCardToCollection = (matchCollection, direction) => {
    if (!this.connectedChannel()) {
      return;
    }

    const { selectedCards, setErrorFlash } = this.props;

    let cards;

    switch (direction) {
      case "BEGIN":
        cards = selectedCards.concat(matchCollection.cards.flat());
        break;
      case "END":
        cards = matchCollection.cards.flat().concat(selectedCards);
        break;
      default:
        break;
    }

    const payload = {
      type: "ADD_CARD_TO_COLLECTION",
      match_collection_id: matchCollection.id,
      cards,
    };

    this.channel
      .push("match_event", payload)
      .receive("error", ({ errors }) => setErrorFlash(errors))
      .receive("timeout", this.timeoutChannel);
  };

  onJokerReplace = (matchCollection) => {
    if (!this.connectedChannel()) {
      return;
    }

    const { selectedCards, setErrorFlash } = this.props;

    const payload = {
      type: "REPLACE_JOKER",
      cards: selectedCards,
      match_collection_id: matchCollection.id,
    };

    this.channel
      .push("match_event", payload)
      .receive("error", ({ errors }) => setErrorFlash(errors))
      .receive("timeout", this.timeoutChannel);
  };

  render() {
    const {
      matchPlayers,
      roundMatchPlayerId,
      headStockDeck,
      headDiscardPile,
      preJoker,
      joker,
      matchCollections,
      matchPlayerId,
      matchPlayerHand,
      selectedCards,
      askedBeat,
      falseBeat,
      takedCard,
      boughtFirstCard,
      takedDiscardPile,
    } = this.props;

    const myTime = matchPlayerId === roundMatchPlayerId;

    return (
      <Table>
        <MatchPlayers
          matchPlayers={matchPlayers}
          roundMatchPlayerId={roundMatchPlayerId}
        />

        <Stock
          selectable={myTime}
          preJoker={preJoker}
          headStockDeck={headStockDeck}
          headDiscardPile={headDiscardPile}
          onTakeDiscardPile={this.onTakeDiscardPile}
          onBuy={this.onBuy}
        />

        <Collections
          matchCollections={matchCollections}
          joker={joker}
          addable={myTime && selectedCards.length > 0}
          jokerReplaceable={myTime && selectedCards.length === 1}
          onAdd={this.onAddCardToCollection}
          onJokerReplace={this.onJokerReplace}
        />

        <Actions
          discard={
            myTime && selectedCards.length === 1 && !takedCard && !askedBeat
          }
          onDiscard={this.onDiscard}
          dropCollection={myTime && selectedCards.length > 2}
          onDropCollection={this.onDropCollection}
          beat={myTime && matchPlayerHand.length === 0}
          onBeat={this.onBeat}
          askBeat={
            matchPlayerHand.length > 0 &&
            ((myTime && !askedBeat) || (!myTime && !askedBeat && !falseBeat))
          }
          onAskBeat={this.onAskBeat}
          falseBeat={!myTime && askedBeat}
          onFalseBeat={this.onFalseBeat}
        />

        <Hand
          selectable={myTime}
          cards={matchPlayerHand}
          selectedCards={selectedCards}
          takedDiscardPileCard={takedDiscardPile && takedCard}
          firstCard={boughtFirstCard && takedCard}
          onAcceptFirstCard={this.onAcceptFirstCard}
          onRejectFirstCard={this.onRejectFirstCard}
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
    joker: state.match.joker,
    matchCollections: state.match.matchCollections,
    roundMatchPlayerId: state.match.roundMatchPlayerId,
    matchPlayerId: state.matchPlayer.matchPlayerId,
    matchPlayerHand: state.matchPlayer.matchPlayerHand,
    askedBeat: state.matchPlayer.askedBeat,
    falseBeat: state.matchPlayer.falseBeat,
    takedCard: state.matchPlayer.takedCard,
    boughtFirstCard: state.matchPlayer.boughtFirstCard,
    takedDiscardPile: state.matchPlayer.takedDiscardPile,
    selectedCards: state.matchPlayer.selectedCards,
  };
};

const mapDispatchToProps = {
  fetchMatch,
  setSuccessFlash,
  setErrorFlash,
  setMatch,
  setMatchPlayer,
  redirectTo,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Match));
