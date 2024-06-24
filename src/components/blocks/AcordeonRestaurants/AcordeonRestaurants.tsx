/* eslint-disable @typescript-eslint/no-explicit-any */
import { http } from "../../../helpers/http";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRestaurantCategories,
  selectCategoryID,
} from "../../../store/actions/actionCreator";
import { restaurantCategoryType } from "../../../types";
import foodList from "../../../constants/FoodList";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import { text } from "../../../helpers/functions";
import { toast } from "react-toastify";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const AcordeonRestaurants = () => {
  const dispatch = useDispatch();
  const restaurantCategories = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: any) => state.restaurants.restaurantCategories
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const [isAcordeonOpen, setIsAcordeonOpen] = useState(true);
  const [activeId, setActiveId] = useState<number | null>(null);

  const showToastError = () => {
    toast.error("Restaurant categories fetching error");
  };

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
        showToastError();
      }
    };
    fetchRestaurantCategoriesData();
  }, [dispatch]);

  const newRestaurantCategories = restaurantCategories?.map(
    (category: restaurantCategoryType, index: number) => {
      return { ...category, icon: foodList[index].icon };
    }
  );

  const handleAcordeonTuggle = () => {
    setIsAcordeonOpen((isAcordeonOpen) => !isAcordeonOpen);
  };

  return (
    <div
      className="mt-4 flex flex-col no-button-scroll "
      style={{ height: "calc(100vh - 13.75rem)" }}
    >
      <div
        onClick={handleAcordeonTuggle}
        className="mb-4 flex gap-2 items-center w-100 cursor-pointer"
      >
        {isAcordeonOpen ? (
          <>
            <h1>{text("FILTERED_RSTRNT_CTG_LST_HEADING")}</h1>
            <span>
              <IoMdArrowDropdown className="size-5" />
            </span>
          </>
        ) : (
          <>
            <h1>{text("FILTERED_RSTRNT_CTG_LST_HEADING")}</h1>
            <span>
              <IoMdArrowDropup className="size-5" />
            </span>
          </>
        )}
      </div>
      <div
        className={`overflow-clip transition-all duration-200 ease-in-out pt-2  ${
          isAcordeonOpen
            ? "max-h-full overflow-y-auto flex-grow"
            : "max-h-0 overflow-hidden pointer-events-none"
        }`}
      >
        {newRestaurantCategories?.map((food: any, index: number) => {
          return (
            <SwiperSlide
              key={index}
              className={`flex justify-start h-max gap-8 items-center cursor-pointer ${
                activeId === food.id
                  ? "border-r-4 border-r-gray-600 bg-gray-100"
                  : "" // Apply red border if this item is active
              }`}
              onClick={() => {
                setActiveId(food.id); // Set the active ID
                dispatch(selectCategoryID(food.id));
              }}
            >
              <img
                className="min-w-16 min-h-16"
                src={food.icon}
                alt={food.typeName}
              />
              <span>{food.typeName}</span>
            </SwiperSlide>
          );
        })}
      </div>
    </div>
  );
};

export default AcordeonRestaurants;
