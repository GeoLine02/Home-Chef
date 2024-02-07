import appActions from "../actions/actions";

export interface RestaurantResultType {
  address: string;
  city: string;
  id: number;
  name: string;
  ownerId: number;
  phoneNumber: string;
}

export interface searchStateType {
  restaurants: [] | RestaurantResultType[];
  filteredRestaurants: null | RestaurantResultType[];
  restaurantCategories: null | number[];
  selectedCategoryID: null | number;
}

export const initialState = {
  restaurants: [],
  filteredRestaurants: null,
  restaurantCategories: null,
  selectedCategoryID: null,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const restaurantReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case appActions.FETCH_RESTAURANTS:
      return {
        ...state,
        restaurants: [...state.restaurants, ...action.payload],
      };

    case appActions.FILTER_RESTAURANTS: {
      return {
        ...state,
        filteredRestaurants: action.payload,
      };
    }
    case appActions.FETCH_RESTAURANT_CATEGORIES: {
      return {
        ...state,
        restaurantCategories: action.payload,
      };
    }

    case appActions.SELECT_CATEGORY_ID: {
      return {
        ...state,
        selectedCategoryID: action.payload,
      };
    }
    default:
      return state;
  }
};
