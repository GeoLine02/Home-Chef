import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../store/actions/actionCreator";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import { RootState } from "../../store/state/rootReducers";
const UnfinishedOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cart.cart);

  return (
    <div className="bg-white p-7 rounded-md drop-shadow-2xl">
      <h1 className="font-medium">do you want to continue previous order?</h1>
      <div className="flex justify-around mt-7">
        <button
          className="font-medium px-7 border-2 border-gray-400 rounded-full hover:border-orange-500 hover:bg-orange-500 hover:text-white"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          No
        </button>
        <button
          className="font-medium px-7 py-2 border-2 border-gray-400 rounded-full hover:border-orange-500 hover:bg-orange-500 hover:text-white"
          onClick={() => {
            navigate(`${routes.home}${cart[0].product.restaurantID}`);
          }}
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default UnfinishedOrder;
