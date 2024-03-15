import { RestaurantResultType, RestaurantType } from "../../types/restaurant";
import appActions from "../actions/actions";

export interface searchStateType {
  restaurants: [] | RestaurantResultType[];
  filteredRestaurants: null | RestaurantResultType[];
  restaurantById: undefined | RestaurantType;
  restaurantCategories: null | number[];
  selectedCategoryID: null | number;
  favoriteRestaurants: RestaurantType[];
  addedFavoriteRestaurantStatus: undefined;
  removedRestaurantId: undefined | number;
}

export const initialState = {
  restaurants: [],
  filteredRestaurants: null,
  restaurantCategories: null,
  selectedCategoryID: null,
  favoriteRestaurants: [],
  addedFavoriteRestaurantStatus: undefined,
  removedRestaurantId: undefined,
  restaurantById: [],
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

    case appActions.SAVE_RESTAURANT_BY_ID_DATA: {
      return {
        ...state,
        restaurantById: action.payload,
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

    case appActions.SAVE_FAVORITE_RESTAURANTS_DATA: {
      return {
        ...state,
        favoriteRestaurants: action.payload,
      };
    }

    case appActions.ADD_FAVORITE_RESTAURANT: {
      return {
        ...state,
        favoriteRestaurants: [...state.favoriteRestaurants, action.payload],
      };
    }
    case appActions.REMOVE_FAVORITE_RESTAURANT: {
      return {
        ...state,
        favoriteRestaurants: action.payload,
      };
    }
    default:
      return state;
  }
};
