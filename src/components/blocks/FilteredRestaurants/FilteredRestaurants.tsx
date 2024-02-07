import { useSelector } from "react-redux";
import RestaurantCard from "../../elements/RestaurantCard";
import { RestaurantResultType } from "../../../store/reducers/restaurantReducer";
import { RootState } from "../../../store/state/rootReducers";

const FilteredRestaurants = () => {
  const filteredRestaurants = useSelector(
    (state: RootState) => state.restaurants.filteredRestaurants
  );
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {filteredRestaurants?.map((restaurant: RestaurantResultType) => (
        <RestaurantCard
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
