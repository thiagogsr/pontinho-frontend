const REDIRECT = "REDIRECT";
const RESET_REDIRECT = "RESET_REDIRECT";

export function redirectTo(target) {
  return { type: REDIRECT, target };
}

const navigationInitialState = {
  redirectTo: null,
};

export const navigation = (state = navigationInitialState, action) => {
  switch (action.type) {
    case REDIRECT:
      return { ...state, redirectTo: action.target };
    case RESET_REDIRECT:
      return { ...state, redirectTo: null };
    default:
      return state;
  }
};
