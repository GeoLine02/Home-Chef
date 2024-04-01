import { FaRegHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteRestaurants, getFavoriteRestaurants } from "../../../api";
import {
  addToFavorites,
  saveFavoriteRestaurantsData,
  toggleAuthModal,
} from "../../../store/actions/actionCreator";
import { RootState } from "../../../store/state/rootReducers";
import { IFavoriteRestaurants } from "../../../types/restaurant";
import { GoHeartFill } from "react-icons/go";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

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

  useEffect(() => {
    if (!favoriteRestaurants?.length && userId)
      getFavoriteRestaurants(userId).then((favoriteRestaurants) => {
        dispatch(saveFavoriteRestaurantsData(favoriteRestaurants));
      });
  }, [dispatch, userId, favoriteRestaurants?.length]);

  const isRestaurantAdded = favoriteRestaurants?.some(
    (restaurant: IFavoriteRestaurants) =>
      restaurant.restaurantID === restaurantId
  );

  const handleAddFavoriteRestaurants = () => {
    if (!isRestaurantAdded && userId) {
      addFavoriteRestaurants(userId, restaurantId).then(
        (favoriteRestaurants) => {
          if (favoriteRestaurants) {
            dispatch(addToFavorites(favoriteRestaurants));
          }
        }
      );
    } else if (!userId) {
      dispatch(toggleAuthModal());
    }
  };
  return (
    <button
      onClick={handleAddFavoriteRestaurants}
      className="bg-white p-3 rounded-full"
    >
      <ToastContainer
        position="top-left"
        autoClose={3000}
        closeOnClick
        draggable
        theme="light"
    />
      {isRestaurantAdded ? (
        <GoHeartFill size={20} color="red" />
      ) : (
        <FaRegHeart size={20} />
      )}
    </button>
  );
};

export default AddToFavoritesBtn;
