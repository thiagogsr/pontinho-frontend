export const SET_GAME = "SET_GAME";

export function setGame(id, bettingTable, players) {
  return { type: SET_GAME, id, bettingTable, players };
}
