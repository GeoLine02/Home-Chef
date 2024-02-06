import { ProductType } from "../../components/blocks/ProductList/ProductList";
import appActions from "../actions/actions";

export type ProductsObjectType = {
  id: number;
  address: string;
  city: string;
  name: string;
  ownerId: number;
  phoneNumber: string;
  products: ProductType[];
};

export type InitialStateType = {
  products: [] | ProductsObjectType;
  selectedProduct: undefined | ProductType[];
};

export const initialState = {
  products: [],
  toggleProductModal: false,
  selectedProduct: undefined,
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
    case appActions.TOGGLE_PRODUCT_MODAL: {
      return {
        ...state,
        toggleProductModal: !state.toggleProductModal,
      };
    }
    // stores choosen product
    case appActions.SELECT_PRODUCT: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const products = state.products as any;
      const filteredProducts = products?.products.find(
        (product: ProductType) => product.id === action.payload
      );
      return {
        ...state,
        selectedProduct: filteredProducts,
      };
    }
    default:
      return state;
  }
};
