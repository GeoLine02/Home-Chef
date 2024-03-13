import RestaurantBannerImage from "../../../assets/RestaurantBanner.jpg";
import AddToFavoritesBtn from "../../elements/buttons/AddToFavoritesBtn";
import RestaurantInfoBtn from "../../elements/buttons/RestaurantInfoBtn";

const RestaurantBanner = () => {
  return (
    <div className="relative">
      <img src={RestaurantBannerImage} alt="Restaurant banner" />
      <div className="flex absolute top-4 right-96 gap-4">
        <RestaurantInfoBtn />
        <AddToFavoritesBtn />
      </div>
    </div>
  );
};

export default RestaurantBanner;
