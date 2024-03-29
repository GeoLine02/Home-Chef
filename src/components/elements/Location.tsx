import LocationImage from "../../assets/location.svg";
import { ChangeEvent, useState } from "react";
import { text } from "../../helpers/functions";
const Location = () => {
  const [address, setAddress] = useState("");
  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  return (
    <div className="flex p-3 border-2 border-gray-400 rounded-full w-[90vw] md:w-fit ">
      <img src={LocationImage} alt="location" />
      <input
        onChange={handleAddressChange}
        value={address}
        className="outline-none bg-transparent w-full"
        type="text"
        placeholder={text("HEADER_LOCATION_PH")}
      />
    </div>
  );
};

export default Location;
