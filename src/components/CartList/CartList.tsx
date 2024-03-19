import { useSelector } from "react-redux";
import CartItem from "../elements/CartItem";
import { RootState } from "../../store/state/rootReducers";
import { text } from "../../helpers/functions";

const CartList = () => {
  const cartList = useSelector((state: RootState) => state.cart?.cart);
  const cart = localStorage.getItem("cart");
  const parsedCart = cart ? JSON.parse(cart) : [];
  return (
    <div>
      <div className="mt-3">
        {parsedCart?.length === 0 && (
          <h1 className="font-medium text-3xl text-gray-400 text-center">
            {text("CART_IS_EMPTY")}
          </h1>
        )}
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          cartList?.map((item: any) => (
            <CartItem
              id={item.product.id}
              productComposition={item.product.productComposition}
              productDescription={item.product.productDescription}
              productName={item.product.productName}
              productPhoto={item.product.productPhoto}
              productPrice={item.product.productPrice}
              restaurantID={item.product.restaurantID}
              key={item.product.id}
            />
          ))
        }
      </div>
    </div>
  );
};

export default CartList;
