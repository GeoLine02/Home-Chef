import { VKUserResultType } from "../../types/user";
import appActions from "../actions/actions";

export interface RootState {
  isAuthOpen: boolean;
  authUserVkInfo: undefined | VKUserResultType;
}

export const initialState: RootState = {
  isAuthOpen: false,
  authUserVkInfo: undefined,
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
    case appActions.FETCH_USER_VK_INFO:
      return {
        ...state,
        authUserVkInfo: action.payload,
      };
    default:
      return state;
  }
};
