import appActions from "../actions/actions";

export type ProductType = {
  id: number;
  productComposition: string;
  productDescription: string;
  productName: string;
  productPhoto: string;
  productPrice: number;
  restaurantID: number;
};

export type InitialStateType = {
  procuts: [] | ProductType[];
};

export const initialState = {
  products: [],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const productsRedcuer = (state = initialState, action: any) => {
  switch (action.type) {
    case appActions.FETCH_RESTAURANT_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    default:
      return state;
  }
};
