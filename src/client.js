import { get, post } from "./http";

export function getGameRequest(gameId) {
  return get(`/api/v1/games/${gameId}`);
}

export function startMatchRequest(gameId) {
  return post(`/api/v1/matches`, { game_id: gameId });
}

export function getMatchRequest(matchId, matchPlayerId) {
  return get(`/api/v1/matches/${matchId}/${matchPlayerId}`);
}
