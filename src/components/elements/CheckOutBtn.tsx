import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import { CheckOutBtnProps } from "../../types/buttons";
import { text } from "../../helpers/functions";

const CheckOutBtn = ({ handleToggleCart }: CheckOutBtnProps) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(routes.checkOut);
        handleToggleCart;
      }}
      className="bg-orange-500 rounded-full w-full py-2 mt-6"
    >
      {text("HEADER_CART_MODAL_CHECK_OUT")}
    </button>
  );
};

export default CheckOutBtn;
