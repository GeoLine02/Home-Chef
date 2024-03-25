import LocationImage from "../../../assets/location.svg";
import { text } from "../../../helpers/functions";
import { useState } from "react";
import AddNewAddressBtn from "../../elements/buttons/AddNewAddressBtn";
import ChangeAddressBtn from "../../elements/buttons/ChangeAddressBtn";
import DeliveryTimeWrapper from "../DeliveryTimeWrapper/DeliveryTimeWrapper";

const CheckoutDeliveryTermsBox = () => {
  // design demonstration purposes
  const [active, setActive] = useState(true);
  const switchHandler = () => {
    setActive((prev) => !prev);
  };

  const localUserAddress = localStorage.getItem("userAddress");

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-[#ffffff] w-full p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          {text("CHECKOUT_DELIVERY_TERMS")}
        </h1>
        <div
          className="flex bg-[#EEEEEE] p-1 rounded-full cursor-pointer select-none "
          onClick={switchHandler}
        >
          <div
            className={`px-6 py-3 rounded-full ${
              active && "bg-white transition-all"
            }`}
          >
            <p>{text("COMMON_DELIVERY")}</p>
          </div>
          <div
            className={`px-6 py-3 rounded-full ${
              !active && "bg-white transition-all"
            }`}
          >
            <p>{text("FILTER_SELF_COL")}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mb-5 mt-3">
        <div className="flex justify-start items-center gap-3">
          <img src={LocationImage} alt="location" />
          <p className="font-medium text-lg">THE DYNAMIC ADDRESS</p>
        </div>
        {localUserAddress ? <ChangeAddressBtn /> : <AddNewAddressBtn />}
      </div>
      <h1 className="text-2xl font-bold">{text("CHECKOUT_DELIVERY_TIME")}</h1>
      <DeliveryTimeWrapper />
    </div>
  );
};

export default CheckoutDeliveryTermsBox;
