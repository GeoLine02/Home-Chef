import { useSelector } from "react-redux";
import RestaurantCard from "../../elements/RestaurantCard";
import { RootState } from "../../../store/state/rootReducers";
import { RestaurantResultType } from "../../../types/restaurant";

const FilteredRestaurants = () => {
  const filteredRestaurants = useSelector(
    (state: RootState) => state.restaurants?.filteredRestaurants
  );
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredRestaurants?.map((restaurant: RestaurantResultType) => (
        <RestaurantCard
          restaurantID={restaurant.restaurantID}
          id={restaurant.id}
          address={restaurant.address}
          city={restaurant.city}
          ownerId={restaurant.ownerId}
          phoneNumber={restaurant.phoneNumber}
          name={restaurant.name}
          key={restaurant.id}
        />
      ))}
    </div>
  );
};

export default FilteredRestaurants;
