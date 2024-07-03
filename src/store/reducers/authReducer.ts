import { IUserAddress } from "../../types/location";
import { IOrder } from "../../types/orders";
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
  userAddress: [] | IUserAddress[];
  selectedAddress: IUserAddress | null;
  toggleUserAddressModal: boolean;
  userOrderList: IOrder[];
}
export const initialState: IRootState = {
  isAuthOpen: false,
  isProfileOpen: false,
  authUserVkInfo: undefined,
  userByID: undefined,
  authGoogleInfo: undefined,
  userAddress: [],
  selectedAddress: null,
  toggleUserAddressModal: false,
  userOrderList: [],
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
    case appActions.CLOSE_AUTH_MODAL: {
      return {
        ...state,
        isAuthOpen: false,
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
    case appActions.TOGGLE_USER_ADDRESS_MODAL: {
      return {
        ...state,
        toggleUserAddressModal: !state.toggleUserAddressModal,
      };
    }

    case appActions.SAVE_ORDERS_LIST: {
      return {
        ...state,
        userOrderList: action.payload,
      };
    }

    case appActions.GET_SELECTED_ADDRESS: {
      return {
        ...state,
        selectedAddress: action.payload,
      };
    }

    case appActions.UPDATE_USER_ADDRESS: {
      const upadtedAddress = action.updatedUserAddress;
      console.log("upadtedAddress", upadtedAddress);
      return {
        ...state,
        userAddress: upadtedAddress,
      };
    }

    default:
      return state;
  }
};
