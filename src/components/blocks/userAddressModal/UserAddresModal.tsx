import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserAddressModal } from "../../../store/actions/actionCreator";
import Map from "../../elements/Map";
import { useRef, useState } from "react";
import SearchLocation from "../../elements/SearchLocation";
import { LatLngExpression } from "leaflet";
import { RiArrowDropDownLine } from "react-icons/ri";
import LocationList from "../locationList/LocationList";
import { IUserAddress } from "../../../types/user";
import { RootState } from "../../../store/state/rootReducers";

const UserAddressModal = () => {
  const dispatch = useDispatch();

  const [position, setPosition] = useState<LatLngExpression | undefined>([
    51.505, -0.09,
  ]);

  const [userLocation, setUserLocation] = useState<IUserAddress | null>(null);
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [updateAddress, setUpdateAddress] = useState<boolean>(false);
  const [locationList, setLocationList] = useState([]);
  const inputRef = useRef(null);
  const onAddressModalClose = () => {
    dispatch(toggleUserAddressModal());
  };

  const userAddressList = useSelector(
    (state: RootState) => state.auth.userAddress
  );

  const selectedUserAddress = useSelector(
    (state: RootState) => state.auth.selectedAddress
  );
  const currentAddress = `${selectedUserAddress?.city}, ${selectedUserAddress?.neighborhood}, ${selectedUserAddress?.street}`;

  return createPortal(
    <div className="w-screen h-screen fixed top-0 left-0">
      <div className="w-screen h-screen md:max-w-2xl md:h-auto fixed rounded-[12px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5">
        <SearchLocation
          onSearch={setPosition}
          onAddressModalClose={onAddressModalClose}
          setLocationList={setLocationList}
          userLocation={userLocation}
          updateAddress={updateAddress}
          inputRef={inputRef}
        />
        <div
          onClick={() => {
            setToggleDropDown(!toggleDropDown);
          }}
          className="flex justify-between cursor-pointer border-2 border-gray-200 items-center px-3 relative rounded-lg mt-3 z-50"
        >
          <h1>{selectedUserAddress ? currentAddress : "Select location"}</h1>
          <RiArrowDropDownLine size={45} />
          <div className="absolute w-full top-8 left-0 z-50">
            {toggleDropDown && (
              <LocationList
                updatedAddress={userLocation}
                updateAddress={updateAddress}
                setUpdateAddress={setUpdateAddress}
                addressList={userAddressList}
              />
            )}
          </div>
        </div>
        <div className="w-full relative z-10">
          <Map
            position={position}
            setPosition={setPosition}
            setUserLocation={setUserLocation}
            userLocation={userLocation}
          />
        </div>
      </div>
    </div>,
    document.getElementById("userAddressModal") as HTMLElement
  );
};

export default UserAddressModal;
