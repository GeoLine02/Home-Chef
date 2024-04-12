import {
  AdressState,
  IGoogleProfileData,
  IUserById,
  IVKUserProfileData,
} from "../../types/user";
import appActions from "../actions/actions";

export interface IRootState {
  isAuthOpen: boolean;
  isProfileOpen: boolean;
  authUserVkInfo: undefined | IVKUserProfileData;
  userByID: undefined | IUserById;
  authGoogleInfo: undefined | IGoogleProfileData;
  userAddress: [] | AdressState[];
  toggleAddNewAddressModal: boolean;
  toggleChangeAddressModal: boolean;
}

export const initialState: IRootState = {
  isAuthOpen: false,
  isProfileOpen: false,
  authUserVkInfo: undefined,
  userByID: undefined,
  authGoogleInfo: undefined,
  userAddress: [],
  toggleAddNewAddressModal: false,
  toggleChangeAddressModal: false,
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

    case appActions.SAVE_USER_DATA:
      return {
        ...state,
        userByID: action.payload,
      };
    case appActions.FETCH_USER_GOOGLE_INFO: {
      return {
        ...state,
        authGoogleInfo: action.payload,
      };
    }
    case appActions.LOG_OUT: {
      return {
        ...state,
        authUserVkInfo: undefined,
      };
    }
    case appActions.FETCH_USER_ADDRESS: {
      return {
        ...state,
        userAddress: [...state.userAddress, action.payload],
      };
    }

    case appActions.GET_USER_ADDRESS_LIST: {
      return {
        ...state,
        userAddress: action.payload,
      };
    }
    case appActions.TOGGLE_ADD_NEW_ADDRESS_MODAL: {
      return {
        ...state,
        toggleAddNewAddressModal: !state.toggleAddNewAddressModal,
      };
    }

    case appActions.TOGGLE_CHANGE_ADDRESS_MODAL: {
      return {
        ...state,
        toggleChangeAddressModal: !state.toggleChangeAddressModal,
      };
    }

    default:
      return state;
  }
};
