import ScrollBtn from "../../elements/ScrollBtn";
import FilteredRestaurantCategory from "../../elements/FilteredRestaurantCategory";
import { http } from "../../../helpers/http";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantCategories } from "../../../store/actions/actionCreator";
import { restaurantCategoryType } from "../../../types";
const FilteredRestaurantCategoryList = () => {
  const dispatch = useDispatch();
  const restaurantCategoreis = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: any) => state.restaurants.restaurantCategories
  );
  useEffect(() => {
    const fetchRestaurantCategoriesData = async () => {
      try {
        const apiCallOptions = {
          headers: { "content-type": "application/json" },
          method: "GET",
        };
        const res = await http("/restaurant-categories", apiCallOptions);
        const data = await res.json();
        dispatch(fetchRestaurantCategories(data));
      } catch (err) {
        console.log("Restaurant categories fetching error", err);
      }
    };
    fetchRestaurantCategoriesData();
  }, [dispatch]);
  return (
    <div>
      <h1>All Restourants</h1>
      <div className="flex gap-3 whitespace-nowrap overflow-x-auto relative lg:w-full lg:mx-auto lg:overflow-x-hidden">
        {restaurantCategoreis?.map(
          (restaurantCategory: restaurantCategoryType) => {
            return (
              <FilteredRestaurantCategory
                id={restaurantCategory.id}
                key={restaurantCategory.id}
                typeName={restaurantCategory.typeName}
                typeNameRU={restaurantCategory.typeNameRU}
              />
            );
          }
        )}
        <div className="hidden lg:block lg:absolute lg:top-4 lg:right-14">
          <ScrollBtn role="right" />
        </div>
      </div>
    </div>
  );
};

export default FilteredRestaurantCategoryList;
