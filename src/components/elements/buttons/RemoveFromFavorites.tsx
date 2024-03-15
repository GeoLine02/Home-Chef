import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { removeFavoriteRestaurant } from "../../../api";
import { RootState } from "../../../store/state/rootReducers";
import { removeFavoriteRestaurantAction } from "../../../store/actions/actionCreator";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IFavoriteRestaurants } from "../../../types/restaurant";

type RemoveFromFavoriesPropsType = {
  restaurantID: number;
};

const RemoveFromFavorites = ({ restaurantID }: RemoveFromFavoriesPropsType) => {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.auth.userByID);
  const userID = userState?.id;
  const favoriteRestaurants = useSelector(
    (state: RootState) => state.restaurants.favoriteRestaurants
  );
  const notification = () => toast.success("Restaurant removed successfully!");
  const handleRemoveFromFavorites = () => {
    removeFavoriteRestaurant(userID, restaurantID).then((removedRestaurant) => {
      if (removedRestaurant.removed)
        dispatch(
          removeFavoriteRestaurantAction(
            favoriteRestaurants.filter(
              (restaurant: IFavoriteRestaurants) =>
                restaurant.restaurantID !== restaurantID
            )
          )
        );
    });
    notification();
  };
  return (
    <div>
      <button
        onClick={handleRemoveFromFavorites}
        className="bg-red-600 p-2 rounded-full"
      >
        <RiDeleteBin5Line size={20} color="white" />
      </button>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </div>
  );
};

export default RemoveFromFavorites;
