import { useDispatch } from "react-redux";
import { clearCart } from "../../store/actions/actionCreator";
import { text } from "../../helpers/functions";
import { RiDeleteBin6Line } from "react-icons/ri";

const ClearCart = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(clearCart());
      }}
      className="flex items-center gap-2 opacity-70"
    >
      <u>{text("COMMON_CLEAR_ALL")}</u>
      <RiDeleteBin6Line size={20} opacity={0.7} />
    </button>
  );
};

export default ClearCart;
