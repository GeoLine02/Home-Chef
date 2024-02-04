import appActions from "../actions/actions";

export interface RootState {
  isCartOpen: boolean;
}

export const initialState: RootState = {
  isCartOpen: false,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case appActions.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };

    default:
      return state;
  }
};
