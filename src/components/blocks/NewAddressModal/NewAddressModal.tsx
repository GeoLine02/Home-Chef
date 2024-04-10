import { createPortal } from "react-dom";
import LocationImage from "../../../assets/location.svg";
import { ChangeEvent, useState } from "react";
import CloseNewAddressModalBtn from "../../elements/buttons/CloseNewAddressModalBtn";

const NewAddresModal = () => {
  const [address, setAddress] = useState<string>("");
  const [location, setLocation] = useState([]);
  const apiKey = "pk.84af2804b0fb860d1278e33a10c9c678";
  const fetchAdress = async () => {
    const url = `https://us1.locationiq.com/v1/search?key=${apiKey}&q=${address}&format=json`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLocation(data);
      console.log(location[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddNewAddress = () => {
    fetchAdress();
  };

  const handleAdrresChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  return createPortal(
    <div className="flex h-screen w-screen top-0 left-0 z-50 justify-center items-center fixed drop-shadow-2xl">
      <div className="bg-white p-3 flex flex-col gap-4 rounded-lg drop-shadow-2xl">
        <div>
          <CloseNewAddressModalBtn />
        </div>
        <div>
          <div className="flex gap-2 items-center border-2 border-gray-400 rounded-md p-2">
            <img src={LocationImage} alt="location" />
            <input
              className="outline-none"
              onChange={handleAdrresChange}
              value={address}
              type="text"
              placeholder="city, street, neighbourhood"
            />
          </div>
        </div>
        <button
          onClick={handleAddNewAddress}
          className="bg-orange-500 py-1 text-white font-medium rounded-md w-full"
        >
          Add address
        </button>
      </div>
    </div>,
    document.getElementById("newAddressModal") as HTMLElement
  );
};

export default NewAddresModal;
