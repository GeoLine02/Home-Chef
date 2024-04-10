import { useSelector } from "react-redux";
import { RootState } from "../../../store/state/rootReducers";
import { AddressListType } from "../../../types/user";
import AddressCard from "../../elements/AddressCard";

const AddressList = () => {
  const userAddressList = useSelector(
    (state: RootState) => state.auth.userAddress
  );
  return (
    <ul className="w-full bg-white rounded-lg drop-shadow-2xl flex flex-col">
      {userAddressList.map((address: AddressListType, index: number) => (
        <AddressCard key={index} address={address} />
      ))}
    </ul>
  );
};

export default AddressList;
