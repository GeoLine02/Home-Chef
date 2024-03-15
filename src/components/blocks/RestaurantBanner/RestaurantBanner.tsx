import { useSelector } from "react-redux";
import RestaurantBannerImage from "../../../assets/RestaurantBanner.jpg";
import AddToFavoritesBtn from "../../elements/buttons/AddToFavoritesBtn";
import RestaurantInfoBtn from "../../elements/buttons/RestaurantInfoBtn";
import { RootState } from "../../../store/state/rootReducers";
import { useParams } from "react-router-dom";

const RestaurantBanner = () => {
  const favoriteRestaurants = useSelector(
    (state: RootState) => state.restaurants?.favoriteRestaurants
  );
  const { id } = useParams();

  console.log("dasda", favoriteRestaurants);

  const addedRestaurant = favoriteRestaurants?.includes(
    (restaurant: any) => restaurant.restaurantID === Number(id)
  );

  console.log(favoriteRestaurants);
  console.log("add", addedRestaurant);
  return (
    <div className="relative w-full">
      <img
        src={RestaurantBannerImage}
        alt="Restaurant banner"
        className="w-full max-h-56 object-cover object-bottom"
      />
      <div className="absolute w-full max-w-screen-2xl left-[50%] translate-x-[-50%] top-0">
        <div className="flex gap-4 w-full justify-end pt-6">
          <RestaurantInfoBtn />
          <AddToFavoritesBtn />
        </div>
      </div>
    </div>
  );
};

export default RestaurantBanner;
