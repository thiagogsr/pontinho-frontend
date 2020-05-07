export const SET_GAME = "SET_GAME";

export function setGame(id, bettingTable, matches) {
  return { type: SET_GAME, id, bettingTable, matches };
}
