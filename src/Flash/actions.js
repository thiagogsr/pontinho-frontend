export const SET_FLASH = "SET_FLASH";
export const RESET_FLASH = "RESET_FLASH";

export function setSuccessFlash(messages) {
  const flash = [].concat(messages).map((text) => {
    return { type: "success", text };
  });

  return { type: SET_FLASH, messages: flash };
}

export function setErrorFlash(messages) {
  const flash = [].concat(messages).map((text) => {
    return { type: "error", text };
  });

  return { type: SET_FLASH, messages: flash };
}

export function resetFlash(messages) {
  return { type: RESET_FLASH, messages };
}
