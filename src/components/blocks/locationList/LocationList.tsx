import { useDispatch, useSelector } from "react-redux";
import { IUserAddress, IUserAddressOptions } from "../../../types/location";
import UpdateUserAddressBtn from "../../elements/buttons/UpdateUserAddressBtn";
import { RootState } from "../../../store/state/rootReducers";
import { getSelectedAddress } from "../../../store/actions/actionCreator";

interface LocationListProps {
  addressList: IUserAddressOptions[];
  updatedAddress: IUserAddress | null;
  updateAddress: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUpdateAddress: any;
}

const LocationList = ({
  addressList,
  updatedAddress,
  updateAddress,
  setUpdateAddress,
}: LocationListProps) => {
  const userInfo = useSelector((state: RootState) => state.auth.authUserVkInfo);
  const dispatch = useDispatch();

  return (
    <ul className="bg-white border-b-2 rounded-md w-full mt-4 max-h-56 overflow-y-scroll">
      {addressList?.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (address: any) => (
          <li
            onClick={() => {
              dispatch(getSelectedAddress(address));
            }}
            className="py-2 px-3 hover:bg-gray-100 flex justify-between"
            key={address?.id}
          >
            {address?.city +
              ", " +
              address?.neighborhood +
              ", " +
              address?.street}
            <UpdateUserAddressBtn
              address={address}
              userID={userInfo?.id}
              updatedAddress={updatedAddress}
              updateAddress={updateAddress}
              setUpdateAddress={setUpdateAddress}
            />
          </li>
        )
      )}
    </ul>
  );
};

export default LocationList;
