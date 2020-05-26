import { SET_FLASH, RESET_FLASH } from "./actions";

const flashInitialState = {
  messages: [],
};

export const flash = (state = flashInitialState, action) => {
  switch (action.type) {
    case SET_FLASH:
      return { ...state, messages: state.messages.concat(action.messages) };

    case RESET_FLASH:
      return {
        ...state,
        messages: state.messages.filter(
          (message) => !action.messages.includes(message)
        ),
      };

    default:
      return state;
  }
};
