import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import { CheckOutBtnProps } from "../../types/buttons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/state/rootReducers";
import { toggleAuthModal } from "../../store/actions/actionCreator";
import { ProductQuantity } from "../../types";

const CheckOutBtn = ({ handleToggleCart }: CheckOutBtnProps) => {
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
    if (userVKinfo && !toggleCartModal) {
      navigate(routes.checkOut);
    } else if (userVKinfo && toggleCartModal) {
      navigate(routes.checkOut);
      handleToggleCart;
    } else if (!userVKinfo && !toggleCartModal) {
      dispatch(toggleAuthModal());
    } else if (!userVKinfo && toggleCartModal) {
      dispatch(toggleAuthModal());
      handleToggleCart;
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
