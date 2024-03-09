import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../../store/actions/actionCreator";
import CheckOutBtn from "../../elements/CheckOutBtn";
import ClearCart from "../../elements/ClearCart";
import CartList from "../../CartList/CartList";
import { RootState } from "../../../store/state/rootReducers";
import { text } from "../../../helpers/functions";

const Cart = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isCartOpen = useSelector((state: any) => state.cart.isCartOpen);
  const handleToggleCart = () => {
    dispatch(toggleCart());
  };

  const cartState = useSelector((state: RootState) => state.cart.cart);

  return (
    <div
      className={
        isCartOpen
          ? "fixed flex flex-col justify-between w-screen h-screen p-6 left-0 top-0 md:absolute rounded-md md:left-auto md:top-20 md:right-52 md:w-fit md:h-auto ease-in-out duration-500 md:p-3 bg-white"
          : "fixed left-0 -top-full md:absolute rounded-md md:top-[-400%] md:right-0 ease-in-out duration-500 md:p-3 bg-white"
      }
    >
      <div>
        <div className="cursor-pointer" onClick={handleToggleCart}>
          <AiOutlineClose size={20} />
        </div>
        <div className="flex  lg:w-96 justify-between mt-5">
          <h1 className="text-2xl">{text("HEADER_CART")}</h1>
          <ClearCart />
        </div>
      </div>
      <CartList />
      {cartState.length ? (
        <CheckOutBtn handleToggleCart={handleToggleCart} />
      ) : null}
    </div>
  );
};

export default Cart;
