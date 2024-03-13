import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/state/rootReducers";
import { saveFavoriteRestaurantsData } from "../store/actions/actionCreator";
import { useEffect } from "react";
import { getFavoriteRestaurants } from "../api/index";
import RestaurantCard from "../components/elements/RestaurantCard";
import { IFavoriteRestaurants } from "../types/restaurant";
import RemoveFromFavorites from "../components/elements/buttons/RemoveFromFavorites";

const FavoriteRestaurants = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.auth.userByID);
  const userId = userState?.id;
  const favoriteRestaurantsState = useSelector(
    (state: RootState) => state.restaurants?.favoriteRestaurants
  );
  useEffect(() => {
    if (userId) {
      getFavoriteRestaurants(userId).then((favoriteRestaurantsList) => {
        dispatch(saveFavoriteRestaurantsData(favoriteRestaurantsList));
      });
    }
  }, [dispatch, userId]);

  return (
    <div>
      <div>
        <h1 className="text-3xl font-medium">Favorite Restaurants</h1>
        <div className="flex gap-6 flex-wrap my-6">
          {favoriteRestaurantsState?.map((restaurant: IFavoriteRestaurants) => (
            <div key={restaurant.id} className="relative">
              <RestaurantCard
                id={restaurant.id}
                name={restaurant.name}
                address={restaurant.address}
                city={restaurant.city}
                ownerId={restaurant.ownerId}
                phoneNumber={restaurant.phoneNumber}
              />
              <div className="absolute -top-3 -right-3">
                <RemoveFromFavorites restaurantID={restaurant.restaurantID} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteRestaurants;
