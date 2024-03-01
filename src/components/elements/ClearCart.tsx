import { useDispatch } from "react-redux";
import { clearCart } from "../../store/actions/actionCreator";

const ClearCart = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(clearCart());
      }}
    >
      Clear
    </button>
  );
};

export default ClearCart;
