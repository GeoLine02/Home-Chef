import { LuTag } from "react-icons/lu";
import { IoMdCard } from "react-icons/io";
import { text } from "../../../helpers/functions";
import ChangePaymentMethodBtn from "../../elements/buttons/ChangePaymentMethodBtn";

const CheckoutPaymentBox = () => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-[#ffffff] w-full p-6">
      <h1 className="text-2xl font-bold">{text("COMMON_PAYMENT")}</h1>
      <div className="flex justify-between items-center my-2">
        <div className="flex gap-3">
          <IoMdCard size={25} />
          <h1 className="font-medium text-lg">
            {text("CHECKOUT_PAYMENT_METHOD")}
          </h1>
        </div>
        {/* TODO: conditionally render payment buttons */}
        <ChangePaymentMethodBtn />
      </div>
      <div className="flex w-full my-3">
        <div className="flex gap-3">
          <LuTag size={25} />
          <h1 className="font-medium text-lg">{text("CHECKOUT_PROMO_CODE")}</h1>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPaymentBox;
