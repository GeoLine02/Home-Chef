import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../store/actions/actionCreator";
import { RootState } from "../../store/state/rootReducers";
import { text } from "../../helpers/functions";

const CartBtn = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart.cart);
  const handleToggleCart = () => {
    dispatch(toggleCart());
  };

  return (
    <div
      onClick={handleToggleCart}
      className="flex gap-2 px-6 py-3 items-center cursor-pointer bg-orange-400 border border-transparent rounded-full"
    >
      <FiShoppingCart />
      <div className="flex">
        ({cart.length})<p>{text("HEADER_CART")}</p>
      </div>
    </div>
  );
};

export default CartBtn;
