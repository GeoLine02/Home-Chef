import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { text } from "../../../helpers/functions";

const apiKey = "pk.84af2804b0fb860d1278e33a10c9c678";

type AdressState = {
  adress: string;
  errorMessage: string;
};

const AdressConfirmationModal = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [adress, setAdress] = useState<AdressState>({
    adress: "",
    errorMessage: "",
  });

  const fetchAdress = async (lat: number, lon: number) => {
    const url = `https://us1.locationiq.com/v1/reverse.php?key=${apiKey}&lat=${lat}&lon=${lon}&format=json`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      const location = [
        data?.address?.quarter,
        data?.address?.house_number,
        data?.address?.suburb,
        data?.address?.city,
      ]
        .filter(Boolean)
        .join(", ");

      setAdress((prevState) => ({
        ...prevState,
        adress: location,
        errorMessage: "",
      }));
      console.log(data);
    } catch (error) {
      setAdress((prevState) => ({
        ...prevState,
        errorMessage: "Unable to fetch address",
      }));
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
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchAdress(position.coords.latitude, position.coords.longitude);
        },
        () => {
          setAdress((prevState) => ({
            ...prevState,
            errorMessage: "Unable to retrieve location",
          }));
        }
      );
    } else {
      setAdress((prevState) => ({
        ...prevState,
        errorMessage: "Geolocation is not supported by your browser.",
      }));
    }
  }, []);

  // console.log(adress);
  // if (!isVisible) return null;
  // if (!adress.adress) return null;
  if (!isVisible || !adress.adress) return null;

  return createPortal(
    <div className="fixed top-0 left-0 right-0 z-[1000] flex justify-center items-center lg:top-[100px] lg:fixed lg:w-[234px] lg:left-[147px]">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm mx-auto font-lora">
        <h3 className="text-center text-[14px] text-[#666666] font-semibold">
          {/* {text("HEADER_LOCATION_QUESTION")} */}
          QUESTION
        </h3>
        <p className="text-center mb-4 text-[16px] tracking-0.5">
          {adress.adress || adress.errorMessage}
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setIsVisible(false)}
            className="w-[85px] h-10 bg-transparent border border-[#85736C] text-[#964900] text-[14px] font-medium py-[10px] px-6 rounded-[100px]"
          >
            {/* {text("COMMON_NO")} */}
            NO
          </button>
          <button
            // onClick={saveLocationHandler}
            className="w-[85px] h-10 bg-[#FF9939] text-[#201A18] text-[14px] font-medium py-[10px] px-6 rounded-[100px]"
          >
            {/* {text("COMMON_YES")} */}
            YES
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("AdressConfirmationModal") as HTMLElement
  );
};
export default AdressConfirmationModal;
