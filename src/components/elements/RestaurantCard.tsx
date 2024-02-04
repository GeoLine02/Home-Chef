import { useNavigate } from "react-router-dom";
import RestaurantPhoto from "../../assets/restaurantPhoto.png";
import routes from "../../constants/routes";
import { RestaurantResultType } from "../../store/reducers/restaurantReducer";

const RestaurantCard = ({ id, name }: RestaurantResultType) => {
  const navigate = useNavigate();
  return (
    <div>
      <img
        className="cursor-pointer"
        onClick={() => {
          navigate(`${routes.home}${id}`);
        }}
        src={RestaurantPhoto}
        alt="restaourantName"
      />
      <h1 className="font-medium">{name}</h1>
    </div>
  );
};

export default RestaurantCard;
