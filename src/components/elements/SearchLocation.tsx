import { useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { RootState } from "../../store/state/rootReducers";
import { useDispatch, useSelector } from "react-redux";
import { http } from "../../helpers/http";
import { fetchUpdateUserAddress } from "../../api/address";
import {
  getSelectedAddress,
  updateUserAddress,
} from "../../store/actions/actionCreator";

const SearchLocation = ({
  onSearch,
  onAddressModalClose,
  setLocationList,
  userLocation,
  updateAddress,
}: any) => {
  const [searchQuery, setSearchQueary] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  const { id } = useSelector((state: RootState) => state.auth.authUserVkInfo);
  const selectedAddress = useSelector(
    (state: RootState) => state.auth.selectedAddress
  );

  const userAddressList = useSelector(
    (state: RootState) => state.auth.userAddress
  );
  useEffect(() => {
    if (updateAddress && inputRef.current) {
      inputRef?.current?.focus();
    }
  }, [updateAddress]);

  const handleSubmit = async () => {
    if (id) {
      try {
        const apiCallOptions = {
          headers: {
            "content-type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            city: userLocation?.address.city,
            street: userLocation?.address.road,
            neighborhood: userLocation?.address.suburb,
            lat: Number(userLocation?.lat),
            lng: Number(userLocation?.lon),
          }),
        };
        const resp = await http(`/profile/new-address/${id}`, apiCallOptions);
        if (resp.ok) {
          const data = await resp.json();
          onAddressModalClose();
          return data;
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleUpdateAddress = () => {
    fetchUpdateUserAddress(id, selectedAddress.id, userLocation);

    const index = userAddressList?.findIndex(
      (address: any) => address?.id === selectedAddress?.id
    );

    const { id: userAddressID } = userAddressList[index];

    const {
      lat,
      lon,
      address: { city, road, suburb },
    } = userLocation;

    userAddressList[index] = {
      id: userAddressID,
      city,
      street: road,
      neighborhood: suburb,
      lat,
      lon,
    };
    if (id) {
      dispatch(getSelectedAddress(userAddressList[index]));
      dispatch(updateUserAddress(userAddressList));
    }
    onAddressModalClose();
  };

  useEffect(() => {
    const fetchLocations = () => {
      const url = `https://api.locationiq.com/v1/autocomplete?key=${
        import.meta.env.VITE_LOCATIONQI_ACCESS_TOKEN
      }&q=${searchQuery}&limit=5&dedupe=1&`;
      if (searchQuery.length) {
        fetch(url)
          .then((resp) => resp.json())
          .then((data) => {
            const { lat, lon } = data[0];
            onSearch([lat, lon]);
            setLocationList(data);
          })
          .catch((error) => console.log(error));
      } else {
        onSearch([51.505, -0.09]);
      }
    };
    fetchLocations();
  }, [searchQuery, onSearch, setLocationList]);

  return (
    <div className="flex items-center gap-4 w-full">
      <FaArrowLeft
        onClick={onAddressModalClose}
        className="cursor-pointer"
        size={25}
      />
      <input
        type="text"
        placeholder="Search your address here"
        onChange={(e) => setSearchQueary(e.target.value)}
        value={searchQuery}
        ref={inputRef}
        className="w-full outline-none border-gray-200 border-2 py-2 px-3 rounded-md"
      />
      {!updateAddress ? (
        <button
          className="bg-orange-500 p-2 text-white rounded-md"
          onClick={handleSubmit}
        >
          Submit
        </button>
      ) : (
        <button
          className="bg-orange-500 p-2 text-white rounded-md"
          onClick={handleUpdateAddress}
        >
          Update
        </button>
      )}
    </div>
  );
};

export default SearchLocation;
