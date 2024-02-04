import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import routes from "../../../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../../store/actions/actionCreator";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isCartOpen = useSelector((state: any) => state.cart.isCartOpen);
  const handleToggleCart = () => {
    dispatch(toggleCart());
  };

  return (
    // TODO: need reduce function for total item value

    <div
      className={
        isCartOpen
          ? "absolute rounded-md top-20 right-52 ease-in-out duration-500 p-3 bg-white"
          : "absolute rounded-md top-[-400%] right-0 ease-in-out duration-500 p-3 bg-white"
      }
    >
      <div className="cursor-pointer" onClick={handleToggleCart}>
        <AiOutlineClose size={20} />
      </div>
      <div className="flex w-96 justify-between mt-5">
        <h1 className="text-2xl">Cart</h1>
        <span>Clear</span>
      </div>

      <button
        onClick={() => {
          navigate(routes.checkOut);
          handleToggleCart();
        }}
        className="bg-orange-500 rounded-full w-full py-2 mt-6"
      >
        Check out
      </button>
    </div>
  );
};

export default Cart;
