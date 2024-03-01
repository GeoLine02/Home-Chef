import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import { CheckOutBtnProps } from "../../types/buttons";

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
      Check out
    </button>
  );
};

export default CheckOutBtn;
