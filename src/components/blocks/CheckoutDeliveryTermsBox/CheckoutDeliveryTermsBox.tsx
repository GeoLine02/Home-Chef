import LocationImage from "../../../assets/location.svg";
import { text } from "../../../helpers/functions";
import AddNewAddressBtn from "../../elements/buttons/AddNewAddressBtn";
import ChangeAddressBtn from "../../elements/buttons/ChangeAddressBtn";
import DeliveryTimeWrapper from "../DeliveryTimeWrapper/DeliveryTimeWrapper";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/state/rootReducers";

const CheckoutDeliveryTermsBox = () => {
  const userAddress = useSelector(
    (state: RootState) => state?.auth?.userAddress
  );

  const selectedUserAddress = useSelector(
    (state: RootState) => state.auth.selectedAddress
  );

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-[#ffffff] w-full p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          {text("CHECKOUT_DELIVERY_TERMS")}
        </h1>
      </div>
      <div className="flex justify-between items-center mb-5 mt-3">
        <div className="flex justify-start items-center gap-3">
          <img src={LocationImage} alt="location" />
          {selectedUserAddress ? (
            <h1>
              {selectedUserAddress?.city +
                ", " +
                selectedUserAddress?.neighborhood +
                ", " +
                selectedUserAddress?.street}
            </h1>
          ) : (
            <h1>Your address</h1>
          )}
        </div>
        {userAddress ? <ChangeAddressBtn /> : <AddNewAddressBtn />}
      </div>
      <h1 className="text-2xl font-bold">{text("CHECKOUT_DELIVERY_TIME")}</h1>
      <DeliveryTimeWrapper />
    </div>
  );
};

export default CheckoutDeliveryTermsBox;
