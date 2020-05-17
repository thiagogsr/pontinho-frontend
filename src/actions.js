import { getGameRequest, startMatchRequest, getMatchRequest } from "./client";
import { setErrorFlash } from "./Flash/actions";

export const SET_GAME = "SET_GAME";
export const SET_PLAYERS = "SET_PLAYERS";
export const SET_MATCH = "SET_MATCH";
export const SET_MATCH_PLAYER = "SET_MATCH_PLAYER";
export const TOGGLE_CARD = "TOGGLE_CARD";

export function setGame(id, bettingTable, players, matches) {
  return { type: SET_GAME, id, bettingTable, players, matches };
}

export function setPlayers(players) {
  return { type: SET_PLAYERS, players };
}

export function fetchGame(gameId) {
  return (dispatch) => {
    return getGameRequest(gameId).then((response) => {
      const {
        game_id: gameId,
        betting_table: bettingTable,
        players,
        matches,
      } = response.data;

      dispatch(setGame(gameId, bettingTable, players, matches));
    });
  };
}

export function startMatch(gameId) {
  return (dispatch) => {
    return startMatchRequest(gameId).catch((errors) => {
      dispatch(setErrorFlash(errors));
    });
  };
}

export function setMatch(
  matchId,
  preJoker,
  headStockDeck,
  headDiscardPile,
  matchCollections,
  matchPlayers,
  roundMatchPlayerId
) {
  return {
    type: SET_MATCH,
    matchId,
    preJoker,
    headStockDeck,
    headDiscardPile,
    matchCollections,
    matchPlayers,
    roundMatchPlayerId,
  };
}

export function setMatchPlayer(matchPlayerId, matchPlayerHand, takedCard) {
  return { type: SET_MATCH_PLAYER, matchPlayerId, matchPlayerHand, takedCard };
}

export function fetchMatch(matchId, matchPlayerId) {
  return (dispatch) => {
    return getMatchRequest(matchId, matchPlayerId).then((response) => {
      const { match, match_player: matchPlayer } = response.data;

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

      dispatch(
        setMatch(
          matchId,
          preJoker,
          headStockDeck,
          headDiscardPile,
          matchCollections,
          matchPlayers,
          roundMatchPlayerId
        )
      );

      dispatch(setMatchPlayer(matchPlayerId, matchPlayerHand, takedCard));
    });
  };
}

export function toggleCard(card) {
  return { type: TOGGLE_CARD, card };
}
