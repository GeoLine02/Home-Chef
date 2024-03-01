import { useDispatch, useSelector } from "react-redux";
import {
  decrementCartItemQuantity,
  incrementCartItemQuantity,
} from "../../store/actions/actionCreator";
import { RootState } from "../../store/state/rootReducers";
import { ProductType } from "../blocks/ProductList/ProductList";
import { ProductQuantity } from "../../types";

type CartProductQuantityType = {
  id: number;
};

const CartProductQuantity = ({ id }: CartProductQuantityType) => {
  const quantity = 1;
  const dispatch = useDispatch();
  const productQuantityState = useSelector(
    (state: RootState) => state.cart?.productQuantity
  );

  const productState = useSelector(
    (state: RootState) => state.products.products
  );

  const product = productState.find((item: ProductType) => item.id === id);
  const cart = localStorage.getItem("cart");
  const parsedCart = cart ? JSON.parse(cart) : [];

  // displays each product quantity
  const displayProductQunatity = (product: ProductType) => {
    const productQuantity = productQuantityState?.find(
      (item) => item.product?.id === product?.id
    );
    const localCart = parsedCart?.find(
      (item: ProductQuantity) => item.product.id === product?.id
    );
    if (productQuantity) {
      return productQuantity.quantity;
    } else if (localCart) {
      return localCart.quantity;
    } else {
      return 1;
    }
  };

  return (
    <div className="flex gap-3 items-center">
      <button
        onClick={() => {
          dispatch(decrementCartItemQuantity(product, quantity));
        }}
        className="w-9 h-9 bg-orange-500 text-white"
      >
        -
      </button>
      <span>{displayProductQunatity(product)}</span>
      <button
        onClick={() => {
          dispatch(incrementCartItemQuantity(product, quantity));
        }}
        className="w-9 h-9 bg-orange-500 text-white"
      >
        +
      </button>
    </div>
  );
};

export default CartProductQuantity;
