import { FaRegHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteRestaurants } from "../../../api";
import { addToFavorites } from "../../../store/actions/actionCreator";
import { RootState } from "../../../store/state/rootReducers";

const AddToFavoritesBtn = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.auth.userByID);
  const userId = userState?.id;
  const restaurantByIdState = useSelector(
    (state: RootState) => state.restaurants.restaurantById
  );

  const restaurantId = restaurantByIdState.id;
  const handleAddFavoriteRestaurants = () => {
    addFavoriteRestaurants(userId, restaurantId).then((favoriteRestaurants) => {
      if (favoriteRestaurants) {
        dispatch(addToFavorites(favoriteRestaurants));
      }
    });
  };
  return (
    <button
      onClick={handleAddFavoriteRestaurants}
      className="bg-white p-3 rounded-full"
    >
      <FaRegHeart size={20} />
    </button>
  );
};

export default AddToFavoritesBtn;
