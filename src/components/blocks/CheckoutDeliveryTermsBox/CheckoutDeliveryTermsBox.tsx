import LocationImage from "../../../assets/location.svg";
import { IoMdTime } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { text } from "../../../helpers/functions";

const CheckoutDeliveryTermsBox = () => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-[#ffffff] w-full p-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">
          {text("CHECKOUT_DELIVERY_TERMS")}
        </h1>
        <div className="flex">
          <p>{text("COMMON_DELIVERY")}</p>
          <p>Self-collection</p>
        </div>
      </div>
      <div className="flex justify-between mb-5 mt-3">
        <div className="flex justify-start items-center gap-3">
          <img src={LocationImage} alt="location" />
          <p className="font-medium text-lg">THE DYNAMIC ADDRESS</p>
        </div>
        <u className="opacity-70">{text("COMMON_CHANGE")}</u>
      </div>
      <h1 className="text-2xl font-bold">{text("CHECKOUT_DELIVERY_TIME")}</h1>
      <div className="flex justify-between items-center rounded-xl border border-gray-400 px-5 py-3">
        <div className="flex justify-start items-center gap-3">
          <IoMdTime size={25} />
          <div>
            <p className="font-medium text-lg">Today</p>
            <p className="font-normal text-lg opacity-70">from 99 - to 99</p>
          </div>
        </div>
        <IoIosArrowForward size={25} />
      </div>
      <div className="flex justify-between items-center rounded-xl border border-gray-400 px-5 py-3">
        <div className="flex justify-start items-center gap-3">
          <FaRegCalendarAlt size={25} />
          <p className="font-medium text-lg">Thu, Dec 27, 10.00AM-10.25 AM</p>
        </div>
        <IoIosArrowForward size={25} />
      </div>
    </div>
  );
};

export default CheckoutDeliveryTermsBox;