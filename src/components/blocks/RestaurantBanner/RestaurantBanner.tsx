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
    <div className="relative">
      <img src={RestaurantBannerImage} alt="Restaurant banner" />
      <div className="flex absolute top-4 right-96 gap-4">
        <RestaurantInfoBtn />
        {/* <AddToFavoritesBtn /> */}
        {addedRestaurant ? <h1>added</h1> : <AddToFavoritesBtn />}
      </div>
    </div>
  );
};

export default RestaurantBanner;
