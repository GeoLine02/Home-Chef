import { ProductType } from "../../components/blocks/ProductList/ProductList";
import { ProductQuantity } from "../../types";
import appActions from "./actions";

export const toggleCart = () => {
  return {
    type: appActions.TOGGLE_CART,
  };
};
export const closeCart = () => {
  return {
    type: appActions.CLOSE_CART,
  };
};

export const toggleBurger = () => {
  return {
    type: appActions.TOGGLE_BURGER,
  };
};

export const handleSearch = (payload: string) => {
  return {
    type: appActions.HANDLE_SEARCH,
    payload,
  };
};

export const clearSearch = () => {
  return {
    type: appActions.CLEAR_SEARCH,
  };
};

export const focuseSearch = () => {
  return {
    type: appActions.FOCUSE_SEARCH,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleFetchRestaurants = (payload: any) => {
  return {
    type: appActions.FETCH_RESTAURANTS,
    payload,
  };
};

export const handleFetchUserVkInfo = (payload: []) => {
  return {
    type: appActions.FETCH_USER_VK_INFO,
    payload,
  };
};

export const toggleAuthModal = () => {
  return {
    type: appActions.TOGGLE_AUTH_MODAL,
  };
};

export const closeAuthModal = () => {
  return {
    type: appActions.CLOSE_AUTH_MODAL,
  };
};

export const toggleProfileModal = () => {
  return {
    type: appActions.TOGGLE_PROFILE_MODAL,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const filterRestaurants = (payload: any) => {
  return {
    type: appActions.FILTER_RESTAURANTS,
    payload,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchRestaurantCategories = (payload: any) => {
  return {
    type: appActions.FETCH_RESTAURANT_CATEGORIES,
    payload,
  };
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectCategoryID = (payload: any) => {
  return {
    type: appActions.SELECT_CATEGORY_ID,
    payload,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchRestaurantProducts = (payload: any) => {
  return {
    type: appActions.FETCH_RESTAURANT_PRODUCTS,
    payload,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectProduct = (payload: any) => {
  return {
    type: appActions.SELECT_PRODUCT,
    payload,
  };
};

export const toggleProductModal = () => {
  return {
    type: appActions.TOGGLE_PRODUCT_MODAL,
  };
};
export const closeProductModal = () => {
  return {
    type: appActions.CLOSE_PRODUCT_MODAL,
  };
};

export const handleFetchUserGoogleInfo = (payload: []) => {
  return {
    type: appActions.FETCH_USER_GOOGLE_INFO,
    payload,
  };
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addCartItem = (
  product: ProductType | ProductType[],
  quantity?: number
) => {
  return {
    type: appActions.ADD_CART_ITEM,
    product,
    quantity,
  };
};

export const clearCart = () => {
  return {
    type: appActions.CLEAR_CART,
  };
};

export const incrementCartItemQuantity = (
  product: ProductType,
  quantity: number
) => {
  return {
    type: appActions.INCREMENT_CART_ITEM_QUANTITY,
    product,
    quantity,
  };
};
export const decrementCartItemQuantity = (
  product: ProductType,
  quantity: number
) => {
  return {
    type: appActions.DECREMENT_CART_ITEM_QUANTITY,
    product,
    quantity,
  };
};

export const getCartItems = (payload: ProductQuantity[]) => {
  return {
    type: appActions.GET_LOCAL_CART_ITEMS,
    payload,
  };
};

export const saveUserData = (payload: []) => {
  return {
    type: appActions.SAVE_USER_DATA,
    payload,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveFavoriteRestaurantsData = (payload: any) => {
  return {
    type: appActions.SAVE_FAVORITE_RESTAURANTS_DATA,
    payload,
  };
};

export const saveRestaurantByIdData = (payload: []) => {
  return {
    type: appActions.SAVE_RESTAURANT_BY_ID_DATA,
    payload,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addToFavorites = (payload: any) => {
  return {
    type: appActions.ADD_FAVORITE_RESTAURANT,
    payload,
  };
};

export const removeFavoriteRestaurantAction = (payload: []) => {
  return {
    type: appActions.REMOVE_FAVORITE_RESTAURANT,
    payload,
  };
};

export const userLogOutAction = () => {
  return {
    type: appActions.LOG_OUT,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchUserAddressAction = (payload: any) => {
  return {
    type: appActions.FETCH_USER_ADDRESS,
    payload,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getUserAddressList = (payload: any) => {
  return {
    type: appActions.GET_USER_ADDRESS_LIST,
    payload,
  };
};

export const toggleAddNewAddressModalAction = () => {
  return {
    type: appActions.TOGGLE_ADD_NEW_ADDRESS_MODAL,
  };
};

export const toggleChangeAddressModalAction = () => {
  return {
    type: appActions.TOGGLE_CHANGE_ADDRESS_MODAL,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveOrdersListAction = (payload: any) => {
  return {
    type: appActions.SAVE_ORDERS_LIST,
    payload,
  };
};

