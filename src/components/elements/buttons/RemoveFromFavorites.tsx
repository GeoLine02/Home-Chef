import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { removeFavoriteRestaurant } from "../../../api";
import { RootState } from "../../../store/state/rootReducers";
import { removeFavoriteRestaurantAction } from "../../../store/actions/actionCreator";

type RemoveFromFavoriesPropsType = {
  restaurantID: number;
};

const RemoveFromFavorites = ({ restaurantID }: RemoveFromFavoriesPropsType) => {
  console.log("restaurantID", restaurantID);
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.auth.userByID);
  const userID = userState?.id;
  //   const favoriteRestaurantsState = useSelector(
  //     (state: RootState) => state.restaurants.favoriteRestaurants
  //   );
  //   const favoriteRestaurantID = favoriteRestaurantsState?.find(
  //     (restaurant: IFavoriteRestaurants) => restaurant.id === restaurantID
  //   );
  const handleRemoveFromFavorites = () => {
    removeFavoriteRestaurant(userID, restaurantID).then((removedRestaurant) => {
      dispatch(removeFavoriteRestaurantAction(removedRestaurant));
    });
  };
  return (
    <button
      onClick={handleRemoveFromFavorites}
      className="bg-red-600 p-2 rounded-full"
    >
      <RiDeleteBin5Line size={20} color="white" />
    </button>
  );
};

export default RemoveFromFavorites;
