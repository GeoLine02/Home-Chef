import { useSelector } from "react-redux";
import RestaurantCard from "../../elements/RestaurantCard";
import { RootState } from "../../../store/state/rootReducers";
import { RestaurantResultType } from "../../../types/restaurant";
import { v4 as uuidv4 } from "uuid";

const AllRestaurants = () => {
  const restaurantsState = useSelector(
    (state: RootState) => state.restaurants?.restaurants
  );

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
