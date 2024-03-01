import ToggleBtn from "../../elements/ToggleBtn";
import { useEffect } from "react";
import { http } from "../../../helpers/http";
import { useDispatch, useSelector } from "react-redux";
import { filterRestaurants } from "../../../store/actions/actionCreator";
import { RootState } from "../../../store/state/rootReducers";

const Filter = () => {
  const dispatch = useDispatch();
  const selectedCategoryId = useSelector(
    (state: RootState) => state.restaurants.selectedCategoryID
  );
  useEffect(() => {
    const filterRestaurantsData = async () => {
      try {
        if (selectedCategoryId) {
          const apiCallOptions = {
            headers: {
              "content-type": "application/json",
            },
            method: "GET",
          };
          const res = await http(
            `/restaurant?` +
              new URLSearchParams({
                selectedCategoryId: selectedCategoryId,
                takeAway: true,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
              } as any),
            apiCallOptions
          );
          const data = await res.json();
          dispatch(filterRestaurants(data));
        }
      } catch (err) {
        console.log("Restaurants filter error", err);
      }
    };
    filterRestaurantsData();
  }, [selectedCategoryId, dispatch]);
  return (
    <div className="hidden gap-6 lg:flex lg:flex-col lg:mt-6 lg:sticky lg:left-0 lg:top-5 w-fit">
      <form className="flex flex-col gap-6">
        <div className="flex gap-6">
          <input type="radio" value="delivery" name="delivery" />
          <label htmlFor="delivery">Delivery</label>
        </div>
        <div className="flex gap-6">
          <input type="radio" value="self-collection" name="delivery" />
          <label htmlFor="self-collection">Self-Collection</label>
        </div>
      </form>
      <div className="flex gap-4 items-center">
        <h1>Free Shiping</h1>
        <ToggleBtn />
      </div>
    </div>
  );
};

export default Filter;
