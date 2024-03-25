import appActions from "../actions/actions";

type InitialStateType = {
  isSideBarOpen: boolean;
};

export const initialState: InitialStateType = {
  isSideBarOpen: false,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sideBarReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case appActions.TOGGLE_BURGER: {
      return {
        ...state,
        isSideBarOpen: !state.isSideBarOpen,
      };
    }
    default:
      return state;
  }
};
