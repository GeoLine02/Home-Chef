import RestaurantBannerImage from "../../../assets/RestaurantBanner.jpg";
import AddToFavoritesBtn from "../../elements/buttons/AddToFavoritesBtn";
import RestaurantInfoBtn from "../../elements/buttons/RestaurantInfoBtn";

const RestaurantBanner = () => {
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
