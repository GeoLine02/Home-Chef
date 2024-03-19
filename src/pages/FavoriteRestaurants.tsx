import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/state/rootReducers";
import RestaurantCard from "../components/elements/RestaurantCard";
import { IFavoriteRestaurants } from "../types/restaurant";
import RemoveFromFavorites from "../components/elements/buttons/RemoveFromFavorites";
import { useEffect } from "react";
import { getFavoriteRestaurants } from "../api";
import { saveFavoriteRestaurantsData } from "../store/actions/actionCreator";

const FavoriteRestaurants = () => {
  const dispatch = useDispatch();
  const favoriteRestaurants = useSelector(
    (state: RootState) => state.restaurants?.favoriteRestaurants
  );
  const userState = useSelector((state: RootState) => state.auth.userByID);
  const userId = userState?.id;
  useEffect(() => {
    if (!favoriteRestaurants?.length && userId) {
      getFavoriteRestaurants(userId).then((favoriteRestaurants) => {
        dispatch(saveFavoriteRestaurantsData(favoriteRestaurants));
      });
    }
  }, [dispatch, userId, favoriteRestaurants?.length]);

  return (
    <div>
      <div>
        <h1 className="text-3xl font-medium">Favorite Restaurants</h1>
        <div className="flex gap-6 flex-wrap my-6">
          {favoriteRestaurants?.map((restaurant: IFavoriteRestaurants) => (
            <div key={restaurant.id} className="relative">
              <RestaurantCard
                restaurantID={restaurant.restaurantID}
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
