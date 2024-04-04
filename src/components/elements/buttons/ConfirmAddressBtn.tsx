import { useDispatch, useSelector } from "react-redux";
import { fetchNewAddress } from "../../../api/address";
import { fetchUserAddressAction } from "../../../store/actions/actionCreator";
import { RootState } from "../../../store/state/rootReducers";
import { AdressState } from "../../../types/user";
import { SetStateAction } from "react";

type confirmaAddressBtnProps = {
  address: AdressState | null;
  setIsVisible: React.Dispatch<SetStateAction<boolean>>;
};

const ConfirmAddressBtn = ({
  address,
  setIsVisible,
}: confirmaAddressBtnProps) => {
  const dispatch = useDispatch();
  const { id } =
    useSelector((state: RootState) => state.auth.authUserVkInfo) || {};
  const handleSaveData = async () => {
    const userAddress = {
      city: address?.address.city,
      lat: Number(address?.lat),
      lng: Number(address?.lon),
      neighborhood: address?.address.neighbourhood,
      street: address?.address.suburb,
    };

    try {
      if (id) {
        const resp = await fetchNewAddress(id, userAddress);
        dispatch(fetchUserAddressAction(resp));
        setIsVisible(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      onClick={handleSaveData}
      className="w-[85px] h-10 bg-[#FF9939] text-[#201A18] text-[14px] font-medium py-[10px] px-6 rounded-[100px]"
    >
      YES
    </button>
  );
};

export default ConfirmAddressBtn;
