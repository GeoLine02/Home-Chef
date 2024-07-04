import { useDispatch } from "react-redux";
import { IUserAddress, IUserAddressOptions } from "../../../types/location";
import { getSelectedAddress } from "../../../store/actions/actionCreator";

interface UpdateUserAddressBtnProps {
  userID: number;
  address: IUserAddressOptions;
  updatedAddress: IUserAddress | null;
  updateAddress: boolean;
  setUpdateAddress: any;
}

const UpdateUserAddressBtn = ({
  updateAddress,
  setUpdateAddress,
  address,
}: UpdateUserAddressBtnProps) => {
  const dispatch = useDispatch();

  const handleUpdateUserAddress = () => {
    dispatch(getSelectedAddress(address));
    setUpdateAddress(!updateAddress);
  };

  return (
    <button
      onClick={handleUpdateUserAddress}
      className="bg-orange-500 rounded-md p-2 text-white"
    >
      update
    </button>
  );
};

export default UpdateUserAddressBtn;
