import RestaurantBannerImage from "../../../assets/RestaurantBanner.png";
import { BsInfo } from "react-icons/bs";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const RestaurantHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-fit">
      <img src={RestaurantBannerImage} alt="banner" />
      <div className="flex justify-between items-center w-full absolute top-9 p-4">
        <div
          onClick={() => {
            navigate(-1);
          }}
        >
          <FaArrowLeftLong size={20} color="white" />
        </div>
        <div className="flex gap-4">
          <div className="bg-white w-12 h-12 p-3 rounded-full">
            <BsInfo size={25} color="black" />
          </div>
          <div className="bg-white w-12 h-12 p-3 rounded-full flex justify-center items-center">
            <FaRegHeart size={20} color="black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantHeader;
