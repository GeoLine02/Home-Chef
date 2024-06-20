import { useNavigate } from "react-router-dom";
import RestaurantPhoto from "../../assets/restaurantPhoto.png";
import routes from "../../constants/routes";
import { RestaurantResultType } from "../../types/restaurant";
import { IoStar } from "react-icons/io5";

const RestaurantCard = ({ id, name, restaurantID }: RestaurantResultType) => {
  const navigate = useNavigate();
  return (
    <div className="p-4 rounded-3xl shadow-3xl-boxshadow border-[2px] border-gray-50 bg-white">
      <img
        className="cursor-pointer w-full"
        onClick={() => {
          navigate(`${routes.home}${restaurantID || id}`);
        }}
        src={RestaurantPhoto}
        alt="restaurantName"
      />
      <h1 className="font-medium text-xl">{name}</h1>
      <div className="flex gap-2">
        <IoStar color="orange" size={25} />
        <IoStar color="orange" size={25} />
        <IoStar color="orange" size={25} />
        <IoStar color="orange" size={25} />
        <IoStar color="orange" size={25} />
      </div>
    </div>
  );
};

export default RestaurantCard;
