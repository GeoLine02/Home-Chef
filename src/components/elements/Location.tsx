import LocationImage from "../../assets/location.svg";
import { ChangeEvent, useEffect, useState } from "react";
import { text } from "../../helpers/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../store/state/rootReducers";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import AddressList from "../blocks/AddressList/AddressList";
const Location = () => {
  const [address, setAddress] = useState("");
  const [toggleAddresList, setToggleAddressList] = useState<boolean>(false);
  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const { userAddress } = useSelector((state: RootState) => state?.auth) || {};

  useEffect(() => {
    if (userAddress.length) {
      const { city, neighborhood, street } = userAddress.reverse()[0];

      setAddress(city + " " + street + " " + neighborhood);
    }
  }, [userAddress, userAddress.length]);

  return (
    <div className="relative">
      <div className="flex items-center p-3 border-2 border-gray-400 rounded-full w-[90vw] md:w-fit ">
        <img src={LocationImage} alt="location" />
        <input
          onChange={handleAddressChange}
          value={address}
          className="outline-none bg-transparent w-full"
          type="text"
          placeholder={text("HEADER_LOCATION_PH")}
        />
        <div
          onClick={() => {
            setToggleAddressList(!toggleAddresList);
          }}
          className="cursor-pointer"
        >
          {toggleAddresList ? (
            <IoIosArrowDown size={20} />
          ) : (
            <IoIosArrowUp size={20} />
          )}
        </div>
      </div>
      {toggleAddresList ? <AddressList /> : null}
    </div>
  );
};

export default Location;
