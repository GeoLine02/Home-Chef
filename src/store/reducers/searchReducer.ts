import appActions from "../actions/actions";
export interface SearchResultType {
  address: string;
  city: string;
  ownerId: string;
  id: number;
  name: string;
  phoneNumber: string;
}
export interface SearchStateType {
  isSearchFocused: boolean;
  search: [] | SearchResultType[];
}

export const initialState: SearchStateType = {
  isSearchFocused: false,
  search: [],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case appActions.HANDLE_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case appActions.CLEAR_SEARCH:
      return {
        ...state,
        search: [],
      };
    case appActions.FOCUSE_SEARCH:
      return {
        ...state,
        isSearchFocused: !state.isSearchFocused,
      };
    default:
      return state;
  }
};
