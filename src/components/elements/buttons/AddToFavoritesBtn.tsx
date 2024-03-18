import { FaRegHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteRestaurants } from "../../../api";
import { addToFavorites } from "../../../store/actions/actionCreator";
import { RootState } from "../../../store/state/rootReducers";
import { IFavoriteRestaurants } from "../../../types/restaurant";
import { GoHeartFill } from "react-icons/go";

const AddToFavoritesBtn = () => {
  const dispatch = useDispatch();
  const userState = useSelector(
    (state: RootState) => state.auth?.authUserVkInfo
  );
  const favoriteRestaurants = useSelector(
    (state: RootState) => state.restaurants?.favoriteRestaurants
  );
  const restaurantByIdState = useSelector(
    (state: RootState) => state.restaurants?.restaurantById
  );

  const userId = userState?.id;
  const restaurantId = restaurantByIdState.id;

  const isRestaurantAdded = favoriteRestaurants?.some(
    (restaurant: IFavoriteRestaurants) =>
      restaurant.restaurantID === restaurantId
  );

  const handleAddFavoriteRestaurants = () => {
    if (!isRestaurantAdded) {
      addFavoriteRestaurants(userId, restaurantId).then(
        (favoriteRestaurants) => {
          if (favoriteRestaurants) {
            dispatch(addToFavorites(favoriteRestaurants));
          }
        }
      );
    }
  };
  return (
    <button
      onClick={handleAddFavoriteRestaurants}
      className="bg-white p-3 rounded-full"
    >
      {isRestaurantAdded ? (
        <GoHeartFill size={20} color="red" />
      ) : (
        <FaRegHeart size={20} />
      )}
    </button>
  );
};

export default AddToFavoritesBtn;
