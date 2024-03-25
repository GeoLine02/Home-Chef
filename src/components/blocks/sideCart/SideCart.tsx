import CheckOutBtn from "../../elements/CheckOutBtn";
import ClearCart from "../../elements/ClearCart";
import CartList from "../../CartList/CartList";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/state/rootReducers";
import { text } from "../../../helpers/functions";

const SideCart = () => {
  const cart = useSelector((state: RootState) => state.cart?.cart);

  return (
    <div className="hidden min-w-72 lg:flex flex-col justify-between min-h-[95vh] sticky left-0 top-5 bottom-5 border-2 border-gray-200 rounded-3xl p-4">
      <div>
        <div className="flex justify-between gap-2">
          <h1 className="text-3xl text-nowrap">{text("COMMON_CART")}</h1>
          <ClearCart />
        </div>
        <CartList />
      </div>
      {cart?.length !== 0 ? <CheckOutBtn /> : null}
    </div>
  );
};

export default SideCart;
