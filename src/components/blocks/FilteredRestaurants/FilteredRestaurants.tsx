import { useSelector } from "react-redux";
import RestaurantCard from "../../elements/RestaurantCard";
import { RestaurantResultType } from "../../../store/reducers/restaurantReducer";

const FilteredRestaurants = () => {
  const filteredRestaurants = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: any) => state.restaurants.filteredRestaurants
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
