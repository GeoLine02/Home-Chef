import appActions from "./actions";

export const toggleCart = () => {
  return {
    type: appActions.TOGGLE_CART,
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
