import { ProductType } from "../../components/blocks/ProductList/ProductList";
import appActions from "../actions/actions";

export type InitialStateType = {
  toggleProductModal: boolean;
  selectedProduct: undefined | ProductType;
};

export const initialState = {
  toggleProductModal: false,
  selectedProduct: undefined,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const productsRedcuer = (state = initialState, action: any) => {
  switch (action.type) {
    case appActions.TOGGLE_PRODUCT_MODAL: {
      return {
        ...state,
        toggleProductModal: !state.toggleProductModal,
      };
    }
    // stores choosen product
    case appActions.SELECT_PRODUCT: {
      return {
        ...state,
        selectedProduct: action.payload,
      };
    }
    default:
      return state;
  }
};
