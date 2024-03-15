import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/state/rootReducers";
import { ProductQuantity } from "../../types";
import { toggleAuthModal, toggleCart } from "../../store/actions/actionCreator";

const CheckOutBtn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userVKinfo = useSelector(
    (state: RootState) => state.auth.authUserVkInfo
  );
  const toggleCartModal = useSelector(
    (state: RootState) => state.cart.isCartOpen
  );

  const cartState = useSelector((state: RootState) => state.cart.cart);

  const handleCheckOut = () => {
    if (toggleCartModal) {
      dispatch(toggleCart());
    }

    if (userVKinfo) {
      navigate(routes.checkOut);
    } else {
      dispatch(toggleAuthModal());
    }
  };

  const itemTotalCost = cartState
    .map((item: ProductQuantity) => item.product.productPrice * item.quantity)
    .reduce((current: number, accumulator: number) => current + accumulator);

  return (
    <button
      onClick={handleCheckOut}
      className="bg-orange-500 rounded-full w-full py-2 mt-6"
    >
      Check out {itemTotalCost}
    </button>
  );
};

export default CheckOutBtn;
