/* eslint-disable @typescript-eslint/no-explicit-any */
import ScrollBtn from "../../elements/ScrollBtn";
import { http } from "../../../helpers/http";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRestaurantCategories,
  selectCategoryID,
} from "../../../store/actions/actionCreator";
import { restaurantCategoryType } from "../../../types";
import foodList from "../../../constants/FoodList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper/modules";
import "swiper/css";
import { text } from "../../../helpers/functions";
import { ToastContainer, toast } from 'react-toastify';
import i18n from "../../../i18n";

const FilteredRestaurantCategoryList = () => {
  const dispatch = useDispatch();
  const restaurantCategories = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: any) => state.restaurants.restaurantCategories
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [controlledSwiper, setControlledSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const showToastError= () => {
    toast.error("Restaurant categories fetching error");
    
  }
 
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

  const numberOfSlides = newRestaurantCategories?.length;
  const slidesPerView = 12;
  const lastSlideIndex = numberOfSlides - slidesPerView;

  return (
    <div>
      <h1>{text("FILTERED_RSTRNT_CTG_LST_HEADING")}</h1>
      <Swiper
        slidesPerView={slidesPerView}
        modules={[Controller]}
        controller={{ control: controlledSwiper }}
        onSwiper={setControlledSwiper}
        className="flex gap-3 whitespace-nowrap overflow-x-auto lg:w-full lg:mx-auto lg:overflow-x-hidden md:min-w-[768px]"
      >
         <ToastContainer
        position="top-left"
        autoClose={3000}
        closeOnClick
        draggable
        theme="light"
        
      />
        {newRestaurantCategories?.map((food: any, index: number) => {
          return (
            <SwiperSlide
              key={index}
              className="flex flex-col justify-center items-center cursor-pointer"
            >
              <img
                className="min-w-16 min-h-16"
                src={food.icon}
                alt={food.typeName}
                onClick={() => dispatch(selectCategoryID(food.id))}
              />
              <span>{food.typeName}</span>
            </SwiperSlide>
          );
        })}
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
