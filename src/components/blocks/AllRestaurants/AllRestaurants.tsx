import { useCallback, useEffect, useState } from "react";
import { http } from "../../../helpers/http";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchRestaurants } from "../../../store/actions/actionCreator";
import RestaurantCard from "../../elements/RestaurantCard";
import { RootState } from "../../../store/state/rootReducers";
import { RestaurantResultType } from "../../../types/restaurant";

const AllRestaurants = () => {
  const dispatch = useDispatch();
  const restaurantsState = useSelector(
    (state: RootState) => state.restaurants?.restaurants
  );
  const [offSet, setOffSet] = useState<number>(0);

  const fetchRestaurants = useCallback(() => {
    const apiCallOptions = {
      headers: {
        "content-type": "application/json",
      },
      method: "GET",
    };
    http("/restaurant", apiCallOptions)
      .then((jsonRestaurantList) => jsonRestaurantList.json())
      .then((restaurantList) =>
        dispatch(handleFetchRestaurants(restaurantList))
      );
  }, [dispatch]);

  useEffect(() => {
    if (offSet === 0) {
      fetchRestaurants();
    }
  }, [fetchRestaurants, offSet]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchRestaurants();
    }
  }, [fetchRestaurants]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setOffSet((prev) => (prev = prev + 1));
  }, [handleScroll]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {restaurantsState?.map((restaurant: RestaurantResultType) => {
        return (
          <RestaurantCard
            restaurantID={restaurant.id}
            address={restaurant.address}
            city={restaurant.city}
            ownerId={restaurant.ownerId}
            phoneNumber={restaurant.phoneNumber}
            key={restaurant.ownerId}
            id={restaurant.id}
            name={restaurant.name}
          />
        );
      })}
    </div>
  );
};

export default AllRestaurants;
