export const SET_GAME = "SET_GAME";

export function setGame(id, bettingTable, players, matches) {
  return { type: SET_GAME, id, bettingTable, players, matches };
}
