import { useNavigate } from "react-router-dom";
import RestaurantPhoto from "../../assets/restaurantPhoto.png";
import routes from "../../constants/routes";
import { RestaurantResultType } from "../../types/restaurant";

const RestaurantCard = ({ name, restaurantID }: RestaurantResultType) => {
  const navigate = useNavigate();
  return (
    <div>
      <img
        className="cursor-pointer w-full"
        onClick={() => {
          navigate(`${routes.home}${restaurantID}`);
        }}
        src={RestaurantPhoto}
        alt="restaourantName"
      />
      <h1 className="font-medium">{name}</h1>
    </div>
  );
};

export default RestaurantCard;
