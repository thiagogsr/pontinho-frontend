export const SET_FLASH = "SET_FLASH";
export const RESET_FLASH = "RESET_FLASH";

export function setFlash(messages) {
  return { type: SET_FLASH, messages };
}

export function resetFlash(messages) {
  return { type: RESET_FLASH, messages };
}
