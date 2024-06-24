import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ToggleBtn from "../../elements/ToggleBtn";
import { http } from "../../../helpers/http";
import { RootState } from "../../../store/state/rootReducers";
import { filterRestaurants } from "../../../store/actions/actionCreator";
import { text } from "../../../helpers/functions";
import AcordeonRestaurants from "../AcordeonRestaurants/AcordeonRestaurants";

const Filter = () => {
  const dispatch = useDispatch();
  const selectedCategoryId = useSelector(
    (state: RootState) => state.restaurants?.selectedCategoryID
  );

  const showToastError = () => {
    toast.error("Restaurants filter error");
  };

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
        showToastError();
      }
    };
    filterRestaurantsData();
  }, [selectedCategoryId, dispatch]);

  return (
    <div className="lg:mt-6 lg:sticky lg:left-0 lg:top-5">
      <div className="hidden gap-6 lg:flex lg:flex-col  w-fit">
        <form className="flex flex-col gap-6">
          <div className="flex gap-6">
            <input type="radio" value="delivery" name="delivery" />
            <label htmlFor="delivery">{text("FILTER_DELIVERY")}</label>
          </div>
          <div className="flex gap-6">
            <input type="radio" value="self-collection" name="delivery" />
            <label htmlFor="self-collection">{text("FILTER_SELF_COL")}</label>
          </div>
        </form>

        <div className="flex gap-4 items-center">
          <h1>{text("FILTER_FREE_SHIPPING")}</h1>
          <ToggleBtn />
          <ToastContainer
            position="top-left"
            autoClose={3000}
            closeOnClick
            draggable
            theme="light"
          />

        </div>
      </div>
      <div>
        <AcordeonRestaurants />
      </div>
    </div>
  );
};

export default Filter;
