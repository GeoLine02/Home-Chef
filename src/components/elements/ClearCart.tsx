import { useDispatch } from "react-redux";
import { clearCart } from "../../store/actions/actionCreator";
import { text } from "../../helpers/functions";

const ClearCart = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full text-right">
      <button
        onClick={() => {
          dispatch(clearCart());
        }}
      >
        {text("COMMON_CLEAR")}
      </button>
    </div>
  );
};

export default ClearCart;
