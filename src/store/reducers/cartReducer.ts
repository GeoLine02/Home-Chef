import appActions from "../actions/actions";
import { CartType, ProductQuantity } from "../../types";
import { IOrder } from "../../types/orders";

interface InitialStateType {
  cart: [] | CartType[];
  isCartOpen: boolean;
  productQuantity: [] | ProductQuantity[];
}

export const initialState: InitialStateType = {
  cart: [],
  isCartOpen: false,
  productQuantity: [],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case appActions.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };

    case appActions.GET_LOCAL_CART_ITEMS: {
      return { ...state, cart: action.payload };
    }

    case appActions.ADD_CART_ITEM: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let localCartArray: any = [];
      const existingCart = localStorage.getItem("cart");
      const product = action.product;
      const existedItem = state.productQuantity.find(
        (item) => item.product.id === product.id
      );

      if (state.cart.find((item) => item.product.id === product.id)) {
        return {
          ...state,
          cart: [...state.cart],
        };
      }

      if (existingCart) {
        localCartArray = JSON.parse(existingCart);
      }

      if (Array.isArray(action.product)) {
        return {
          ...state,
          cart: action.product.map((item: IOrder) => {
            localCartArray.push({
              product: item,
              quantity: 1,
            });
            localStorage.setItem("cart", JSON.stringify(localCartArray));
            return {
              product: item,
              quantity: 1,
            };
          }),
        };
      }

      if (existedItem) {
        localCartArray.push({ product, quantity: existedItem.quantity });
      } else {
        localCartArray.push({ product, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(localCartArray));

      if (existedItem) {
        return {
          ...state,
          cart: [...state.cart, { product, quantity: existedItem.quantity }],
          productQuantity: state.productQuantity,
        };
      }

      return {
        ...state,
        cart: [...state.cart, { product, quantity: 1 }],
        productQuantity: [...state.productQuantity, { product, quantity: 1 }],
      };
    }

    case appActions.CLEAR_CART: {
      localStorage.removeItem("cart");
      return {
        ...state,
        cart: [],
        productQuantity: [],
      };
    }

    case appActions.INCREMENT_CART_ITEM_QUANTITY: {
      const { product, quantity } = action;

      let localCartArray = [];
      const existingCart = localStorage.getItem("cart");

      if (existingCart) {
        localCartArray = JSON.parse(existingCart);
      }

      localCartArray = localCartArray.map((item: ProductQuantity) => {
        if (item.product.id === product?.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      localStorage.setItem("cart", JSON.stringify(localCartArray));
      // searches existing item in productQuantityArray
      const existingQuantityItem = state.productQuantity.find(
        (item) => item.product?.id === product?.id
      );
      // if no matches adds new product in productQuantity
      if (!existingQuantityItem) {
        return {
          ...state,
          productQuantity: [
            ...state.productQuantity,
            { product: product, quantity: quantity + 1 },
          ],
        };
      }

      const existingCartItem = state.cart.find(
        (item) => item.product.id === product?.id
      );
      if (existingCartItem) {
        return {
          ...state,
          // addes new quantity to existing cart item
          cart: state.cart.map((item) =>
            item.product.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
          // addes nwe quantity to existing quantity item
          productQuantity: state.productQuantity.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      // if matches spreads old state and adds new quantity in productQuantity state and in cart state
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === product?.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        productQuantity: state.productQuantity.map((item) =>
          item.product.id === product?.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }

    case appActions.DECREMENT_CART_ITEM_QUANTITY: {
      const { product } = action;

      let localCartArray = [];
      const existingCart = localStorage.getItem("cart");

      if (existingCart) {
        localCartArray = JSON.parse(existingCart);
      }

      localCartArray = localCartArray.map((item: ProductQuantity) => {
        if (item.product.id === product?.id) {
          return { ...item, quantity: Math.max(0, item.quantity - 1) };
        }
        return item;
      });

      localCartArray = localCartArray.filter(
        (item: ProductQuantity) => item.quantity > 0
      );

      localStorage.setItem("cart", JSON.stringify(localCartArray));

      const existingCartItem = state.cart.find(
        (item) => item.product.id === product?.id
      );
      if (existingCartItem) {
        return {
          ...state,
          // addes new quantity to existing cart item
          cart: state.cart
            .map((item) =>
              item.product.id === product?.id
                ? {
                    ...item,
                    quantity: Math.max(0, item.quantity - 1),
                  }
                : item
            )
            .filter((item) => item.quantity > 0),
          // addes nwe quantity to existing quantity item
          productQuantity: state.productQuantity
            .map((item) =>
              item.product.id === product?.id
                ? { ...item, quantity: Math.max(0, item.quantity - 1) }
                : item
            )
            .filter((item) => item.quantity > 0),
        };
      }

      // if matches spreads old state and adds new quantity in productQuantity state and in cart state
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === product?.id
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item
        ),
        productQuantity: state.productQuantity
          .map((item) =>
            item.product.id === product?.id
              ? { ...item, quantity: Math.max(0, item.quantity - 1) }
              : item
          )
          .filter((item) => item.quantity > 0),
      };
    }
    default:
      return state;
  }
};