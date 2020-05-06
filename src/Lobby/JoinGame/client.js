import { post } from "../../http";

export function joinGameRequest(gameId, name) {
  return post(`/api/v1/games/${gameId}/join`, { name });
}
