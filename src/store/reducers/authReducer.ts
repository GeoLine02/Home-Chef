import { IVKUserProfileData } from "../../types/user";
import appActions from "../actions/actions";

export interface IRootState {
  isAuthOpen: boolean;
  isProfileOpen: boolean;
  authUserVkInfo: undefined | IVKUserProfileData;
}

export const initialState: IRootState = {
  isAuthOpen: false,
  isProfileOpen: false,
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
    case appActions.TOGGLE_PROFILE_MODAL: {
      return {
        ...state,
        isProfileOpen: !state.isProfileOpen,
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
