import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { toggleCart } from "../../store/actions/actionCreator";
import { text } from "../../helpers/functions";

const CartBtn = () => {
  const dispatch = useDispatch();
  const localCart = localStorage.getItem("cart");
  const parsedCart = localCart ? JSON.parse(localCart) : [];
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
        ({parsedCart.length})<p>{text("HEADER_CART")}</p>
      </div>
    </div>
  );
};

export default CartBtn;
