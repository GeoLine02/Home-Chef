import appActions from "../actions/actions";

type InitialStateType = {
  isSideBarOpen: boolean;
};

export const initialState: InitialStateType = {
  isSideBarOpen: false,
};

export const sideBarReducer = (state = initialState, action) => {
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
