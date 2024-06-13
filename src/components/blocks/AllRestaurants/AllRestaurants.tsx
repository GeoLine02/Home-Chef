import { useCallback, useEffect, useState } from "react";
import { http } from "../../../helpers/http";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchRestaurants } from "../../../store/actions/actionCreator";
import RestaurantCard from "../../elements/RestaurantCard";
import { RootState } from "../../../store/state/rootReducers";
import { RestaurantResultType } from "../../../types/restaurant";
import { v4 as uuidv4 } from "uuid";

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
    http(`/restaurant?offset=${offSet}`, apiCallOptions)
      .then((jsonRestaurantList) => jsonRestaurantList.json())
      .then((restaurantList) => {
        setOffSet((prev) => prev + 15);
        dispatch(handleFetchRestaurants(restaurantList));
      });
  }, [dispatch, offSet]);

  const handleScroll = useCallback(() => {
    const scrollThreshold = 200;
    const scrollPosition =
      window.innerHeight + document.documentElement.scrollTop;
    const documentHeight = document.documentElement.offsetHeight;

    if (scrollPosition >= documentHeight - scrollThreshold) {
      fetchRestaurants();
    }
  }, [fetchRestaurants]);

  useEffect(() => {
    if (offSet === 0) {
      fetchRestaurants();
    }
  }, [fetchRestaurants, offSet]);

  useEffect(() => {
    if (restaurantsState?.length) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, restaurantsState?.length]);
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
            key={uuidv4()}
            id={restaurant.id}
            name={restaurant.name}
          />
        );
      })}
    </div>
  );
};

export default AllRestaurants;
