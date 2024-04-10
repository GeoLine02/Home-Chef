import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { fetchUserAddressList } from "../../../api/address";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/state/rootReducers";
import { AdressState } from "../../../types/user";
import { getUserAddressList } from "../../../store/actions/actionCreator";
import ConfirmAddressBtn from "../../elements/buttons/ConfirmAddressBtn";
import DeclineAddressBtn from "../../elements/buttons/DeclineAddressBtn";

const apiKey = "pk.84af2804b0fb860d1278e33a10c9c678";

const AdressConfirmationModal = () => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [address, setAddress] = useState<AdressState>(null);

  const { id } =
    useSelector((state: RootState) => state.auth?.authUserVkInfo) || {};
  const userAddress = useSelector(
    (state: RootState) => state.auth?.userAddress
  );
  const fetchAdress = async (lat: number, lon: number) => {
    const url = `https://us1.locationiq.com/v1/reverse.php?key=${apiKey}&lat=${lat}&lon=${lon}&format=json`;
    try {
      const response = await fetch(url);
      const data: AdressState = await response.json();
      setAddress(data);
    } catch (error) {
      console.log(error);
    }
  };

  const scrollHandler = () => {
    const scrollY = window.scrollY;
    const scrollThreshold = 150;
    if (scrollY > scrollThreshold) {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    setIsVisible(true);
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        fetchAdress(position.coords.latitude, position.coords.longitude);
      });
    }
  }, []);

  useEffect(() => {
    if (!userAddress.length && id) {
      fetchUserAddressList(id).then((addressList) => {
        dispatch(getUserAddressList(addressList));
      });
    }
  }, [dispatch, id, userAddress.length]);

  if (!isVisible || userAddress.length) return null;

  return createPortal(
    <div className="fixed top-0 left-0 right-0 z-[1000] flex justify-center items-center lg:top-[100px] lg:fixed lg:w-[234px] lg:left-[147px]">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm mx-auto font-lora">
        <h3 className="text-center text-[14px] text-[#666666] font-semibold">
          QUESTION
        </h3>
        <p className="text-center mb-4 text-[16px] tracking-0.5">
          {address?.display_name}
        </p>
        <div className="flex justify-center gap-4">
          <DeclineAddressBtn setIsVisible={setIsVisible} />
          <ConfirmAddressBtn address={address} setIsVisible={setIsVisible} />
        </div>
      </div>
    </div>,
    document.getElementById("AdressConfirmationModal") as HTMLElement
  );
};
export default AdressConfirmationModal;
