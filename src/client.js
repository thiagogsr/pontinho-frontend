import { get } from "./http";

export function getGameRequest(gameId) {
  return get(`/api/v1/games/${gameId}`);
}
