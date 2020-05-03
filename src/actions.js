export const UPDATE_TABLE = "UPDATE_TABLE";

export function updateTable(table) {
  return { type: UPDATE_TABLE, table };
}
