import { useDispatch, useSelector } from "react-redux";
import RestaurantBannerImage from "../../../assets/RestaurantBanner.jpg";
import AddToFavoritesBtn from "../../elements/buttons/AddToFavoritesBtn";
import RestaurantInfoBtn from "../../elements/buttons/RestaurantInfoBtn";
import { RootState } from "../../../store/state/rootReducers";
import { useParams } from "react-router-dom";
import { removeFavoriteRestaurant } from "../../../api";
import { removeFavoriteRestaurantAction } from "../../../store/actions/actionCreator";
import { IFavoriteRestaurants } from "../../../types/restaurant";
import { GoHeartFill } from "react-icons/go";

const RestaurantBanner = () => {
  const favoriteRestaurants = useSelector(
    (state: RootState) => state.restaurants?.favoriteRestaurants
  );
  const { id } = useParams();
  const dispatch = useDispatch();

  const addedRestaurant = favoriteRestaurants?.some(
    (restaurant: IFavoriteRestaurants) => restaurant.restaurantID === Number(id)
  );

  const userState = useSelector((state: RootState) => state.auth.userByID);
  const userID = userState?.id;

  const handleRemoveFromFavorites = () => {
    removeFavoriteRestaurant(userID, Number(id)).then((removedRestaurant) => {
      if (removedRestaurant.removed)
        dispatch(
          removeFavoriteRestaurantAction(
            favoriteRestaurants.filter(
              (restaurant: IFavoriteRestaurants) =>
                restaurant.restaurantID !== Number(id)
            )
          )
        );
    });
  };

  return (
    <div className="relative">
      <img src={RestaurantBannerImage} alt="Restaurant banner" />
      <div className="flex absolute top-4 right-96 gap-4">
        <RestaurantInfoBtn />
        {addedRestaurant ? (
          <button
            className="bg-white p-3 rounded-full"
            onClick={handleRemoveFromFavorites}
          >
            <GoHeartFill size={25} color="red" />
          </button>
        ) : (
          <AddToFavoritesBtn />
        )}
      </div>
    </div>
  );
};

export default RestaurantBanner;
