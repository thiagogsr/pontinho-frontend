import { post } from "../http";

export function createGameRequest(name, bettingTable) {
  return post("/api/v1/games", { name, betting_table: bettingTable });
}
