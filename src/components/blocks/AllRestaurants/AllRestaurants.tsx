import { useEffect } from "react";
import { http } from "../../../helpers/http";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchRestaurants } from "../../../store/actions/actionCreator";
import RestaurantCard from "../../elements/RestaurantCard";
import { RootState } from "../../../store/state/rootReducers";
import { RestaurantResultType } from "../../../store/reducers/restaurantReducer";

const AllRestaurants = () => {
  const dispatch = useDispatch();
  const restaurantsState = useSelector(
    (state: RootState) => state.restaurants.restaurants
  );
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const apiCallOptions = {
          headers: {
            "content-type": "application/json",
          },
          method: "GET",
        };
        const res = await http("/restaurant", apiCallOptions);
        const parsedRes = await res.json();
        dispatch(handleFetchRestaurants(parsedRes));
      } catch (err) {
        console.log("Restaurant fetching error", err);
      }
    };
    fetchRestaurants();
  }, [dispatch]);
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {restaurantsState.map(
        (restaurant: RestaurantResultType, index: number) => (
          <RestaurantCard
            address={restaurant.address}
            city={restaurant.city}
            ownerId={restaurant.ownerId}
            phoneNumber={restaurant.phoneNumber}
            key={index}
            id={restaurant.id}
            name={restaurant.name}
          />
        )
      )}
    </div>
  );
};

export default AllRestaurants;
