import { useSelector } from "react-redux";
import { text } from "../../helpers/functions";
import { calculateItemTotalCost } from "../../helpers/totalCartCost";
import { RootState } from "../../store/state/rootReducers";

const ContinueCheckoutBtn = () => {
  const cartState = useSelector((state: RootState) => state.cart.cart);
  return (
    <button className="px-6 h-12 my-4 cursor-pointer bg-orange-400 border border-transparent rounded-full w-full font-medium text-base">
      {text("CHECKOUT_BTN")} {calculateItemTotalCost(cartState)}
    </button>
  );
};

export default ContinueCheckoutBtn;
