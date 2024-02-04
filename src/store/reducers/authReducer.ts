import appActions from "../actions/actions";

export const initialState = {
  isAuthOpen: false,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case appActions.TOGGLE_AUTH_MODAL: {
      return {
        ...state,
        isAuthOpen: !state.isAuthOpen,
      };
    }
    default:
      return state;
  }
};
