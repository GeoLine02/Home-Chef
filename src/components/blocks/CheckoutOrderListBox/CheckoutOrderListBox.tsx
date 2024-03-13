import { RiDeleteBin6Line } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { text } from "../../../helpers/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/state/rootReducers";
import CartItem from "../../elements/CartItem";

const CheckoutOrderListBox = () => {
  const cartList = useSelector((state: RootState) => state.cart.cart);

  return (
    <div className="rounded-lg bg-[#ffffff] w-full p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-6">{text("CHECKOUT_YOUR_ORDER")}</h1>
        <div className="flex items-center gap-2 opacity-70">
          <u>{text("COMMON_CLEAR_ALL")}</u>
          <RiDeleteBin6Line size={20} opacity={0.7} />
        </div>
      </div>
      {cartList.map((item: any) => (
        <CartItem
          id={item.product.id}
          productComposition={item.product.productComposition}
          productDescription={item.product.productDescription}
          productName={item.product.productName}
          productPhoto={item.product.productPhoto}
          productPrice={item.product.productPrice}
          restaurantID={item.product.restaurantID}
          key={item.product.id}
        />
      ))}
      <div className="flex items-center gap-2 max-w-160 border border-solid border-[#964900] rounded-full py-3 px-4 my-3">
        <FiPlus size={25} color="#964900" />
        <h1 className="font-medium text-lg text-[#964900]">
          {text("CHECKOUT_ADD_MORE")}
        </h1>
      </div>
      <h1 className="text-xl font-bold mt-5">{text("CHECKOUT_COMMENTS")}</h1>
      <textarea
        name=""
        id=""
        placeholder={text("CHECKOUT_COMMENTS_PH")}
        className="bg-[#EEEEEE] rounded-lg w-full p-6 text-lg mt-4"
      ></textarea>
    </div>
  );
};

export default CheckoutOrderListBox;
