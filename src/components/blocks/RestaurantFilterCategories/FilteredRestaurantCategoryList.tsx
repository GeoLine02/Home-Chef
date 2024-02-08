import ScrollBtn from "../../elements/ScrollBtn";
import { http } from "../../../helpers/http";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRestaurantCategories,
  selectCategoryID,
} from "../../../store/actions/actionCreator";
import { restaurantCategoryType } from "../../../types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper/modules";
import "swiper/css";
import Asian from "../../../assets/FoodList/asian.svg";

const FilteredRestaurantCategoryList = () => {
  const dispatch = useDispatch();
  const restaurantCategories = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: any) => state.restaurants.restaurantCategories
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [controlledSwiper, setControlledSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  useEffect(() => {
    const handleSlideChange = () => {
      setActiveIndex(controlledSwiper.activeIndex);
    };

    if (controlledSwiper) {
      controlledSwiper.on("slideChange", handleSlideChange);
    }
  }, [controlledSwiper]);

  const handleClickPrev = () => controlledSwiper.slidePrev();
  const handleClickNext = () => controlledSwiper.slideNext();

  const numberOfSlides = restaurantCategories?.length;
  const slidesPerView = 12;
  const lastSlideIndex = numberOfSlides - slidesPerView;

  return (
    <div>
      <h1>All Restourants</h1>
      <Swiper
        slidesPerView={slidesPerView}
        modules={[Controller]}
        controller={{ control: controlledSwiper }}
        onSwiper={setControlledSwiper}
        className="flex gap-3 whitespace-nowrap overflow-x-auto relative lg:w-[79vw] lg:mx-auto lg:overflow-x-hidden"
      >
        {restaurantCategories?.map(
          (restaurantCategory: restaurantCategoryType, index: number) => {
            return (
              <SwiperSlide
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <img
                  onClick={() =>
                    dispatch(selectCategoryID(restaurantCategory.id))
                  }
                  className="w-16 h-16 cursor-pointer"
                  src={Asian}
                  alt={
                    restaurantCategory.typeName || restaurantCategory.typeNameRU
                  }
                />
                <span>{restaurantCategory.typeName}</span>
              </SwiperSlide>
            );
          }
        )}
        {activeIndex !== lastSlideIndex && (
          <ScrollBtn role="right" onClick={handleClickNext} />
        )}
        {activeIndex !== 0 && (
          <ScrollBtn role="left" onClick={handleClickPrev} />
        )}
      </Swiper>
    </div>
  );
};

export default FilteredRestaurantCategoryList;
