import { SwiperSlide } from "swiper/react";
import { restaurantCategoryType } from "../../types";
import Asian from "../../assets/FoodList/asian.svg";
import { useDispatch } from "react-redux";
import { selectCategoryID } from "../../store/actions/actionCreator";

const FilteredRestaurantCategory = ({
  id,
  typeName,
  typeNameRU,
}: restaurantCategoryType) => {
  const dispatch = useDispatch();
  const handleSelectCategory = () => {
    dispatch(selectCategoryID(id));
  };

  return (
    <SwiperSlide className="flex flex-col justify-center items-center">
      <img
        onClick={handleSelectCategory}
        className="w-16 h-16 cursor-pointer"
        src={Asian}
        alt={typeName || typeNameRU}
      />
      <span>{typeName}</span>
    </SwiperSlide>
  );
};

export default FilteredRestaurantCategory;
