import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { toggleCart } from "../../store/actions/actionCreator";

const CartBtn = () => {
  const dispatch = useDispatch();
  const [itemCounter] = useState<number>(0);
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
        ({itemCounter})<p>Cart</p>
      </div>
    </div>
  );
};

export default CartBtn;
