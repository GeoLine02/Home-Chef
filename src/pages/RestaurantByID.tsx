import ProductList from "../components/blocks/ProductList/ProductList";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import ProductModal from "../components/blocks/ProductModal/ProductModal";
import { RootState } from "../store/state/rootReducers";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../components/elements/Menu";
import SideCart from "../components/blocks/sideCart/SideCart";
import { useEffect, useState } from "react";
import { http } from "../helpers/http";
import routes from "../constants/routes";
import UnfinishedOrderModal from "../components/blocks/UnfinishedOrderModal/UnfinishedOrderModal";
import { text } from "../helpers/functions";
import {
  saveFavoriteRestaurantsData,
  saveRestaurantByIdData,
} from "../store/actions/actionCreator";
import RestaurantBanner from "../components/blocks/RestaurantBanner/RestaurantBanner";
import { getFavoriteRestaurants } from "../api";

const RestaurantByID = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const cartState = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();
  const restaurantById = useSelector(
    (state: RootState) => state.restaurants?.restaurantById
  );

  const [showUnfinishedOrderModal, setShowUnfinishedOrderModal] =
    useState<boolean>(false);

  useEffect(() => {
    const test =
      cartState?.length &&
      cartState[0].product?.restaurantID !== restaurantById?.id;
    setShowUnfinishedOrderModal(test);
  }, [cartState, restaurantById?.id]);

  useEffect(() => {
    const getRestaurantById = async () => {
      try {
        const apiCallOptions = {
          headers: {
            "content-type": "application/json",
          },
          method: "GET",
        };

        const resp = await http(`/restaurant/${id}`, apiCallOptions);
        if (resp.statusText === "OK") {
          const data = await resp.json();
          dispatch(saveRestaurantByIdData(data));
        }
      } catch (err) {
        console.log("restaurantByID data fetching error!", err);
      }
    };
    getRestaurantById();
  }, [id, dispatch]);

  const userState = useSelector((state: RootState) => state.auth?.userByID);
  const userID = userState?.id;
  useEffect(() => {
    const handleFetchingFavoriteRestaurants = () => {
      getFavoriteRestaurants(userID).then((favoriteRestaurants) => {
        dispatch(saveFavoriteRestaurantsData(favoriteRestaurants));
      });
    };
    if (userID) {
      handleFetchingFavoriteRestaurants();
    }
  }, [userID, dispatch]);

  const toggleProductModal = useSelector(
    (state: RootState) => state.products.toggleProductModal
  );

  return (
    <>
      <RestaurantBanner />
      <div
        className={
          showUnfinishedOrderModal
            ? "w-full max-w-screen-2xl mx-auto flex flex-col xl:flex-row my-9 px-3 gap-4 relative justify-between blur-md"
            : "w-full max-w-screen-2xl mx-auto flex flex-col xl:flex-row my-9 px-3 gap-4 relative justify-between"
        }
      >
        <div className="flex flex-col items-center gap-4">
          <div
            onClick={() => {
              navigate(routes.home);
            }}
            className="hidden text-nowrap xl:flex items-center border-2 border-gray-400 rounded-full py-3 px-5 w-fit gap-2"
          >
            <FaArrowLeft size={20} />
            <button>{text("RESTAURANT_BY_ID_BTN")}</button>
          </div>
          <div className="flex flex-col items-cneter">
            <h1 className="font-medium text-3xl hidden lg:block">
              {text("COMMON_MENU")}
            </h1>
            <Menu />
          </div>
        </div>
        <div className="col-span-3 place-items-center xl:max-w-[70%]">
          <h1 className="font-medium text-3xl mb-6">*Dynamic Category*</h1>
          <ProductList />
        </div>
        {toggleProductModal && (
          <div className="fixed top-0 left-0">
            <ProductModal children />
          </div>
        )}
        <div className="hidden xl:block">
          <SideCart />
        </div>
        {showUnfinishedOrderModal ? <UnfinishedOrderModal children /> : null}
      </div>
    </>
  );
};

export default RestaurantByID;
