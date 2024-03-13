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
import { saveRestaurantByIdData } from "../store/actions/actionCreator";
import RestaurantBanner from "../components/blocks/RestaurantBanner/RestaurantBanner";
const RestaurantByID = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const cartState = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();
  const restaurantById = useSelector(
    (state: RootState) => state.restaurants.restaurantById
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

  const toggleProductModal = useSelector(
    (state: RootState) => state.products.toggleProductModal
  );

  return (
    <div>
      <RestaurantBanner />
      <div
        className={
          showUnfinishedOrderModal
            ? "grid lg:grid-cols-repeat-5-18 mt-9 relative gap-6 justify-center blur-md"
            : "grid lg:grid-cols-repeat-5-18 mt-9 relative gap-6 justify-center"
        }
      >
        <div className="flex flex-col items-center">
          <div
            onClick={() => {
              navigate(routes.home);
            }}
            className="hidden lg:flex lg:border-2 lg:border-gray-400 lg:rounded-full lg:p-3 lg:w-fit"
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
        <div className="col-span-3 place-items-center">
          <h1 className="font-medium text-3xl mb-6">*Dynamic Category*</h1>
          <ProductList />
        </div>
        {toggleProductModal && (
          <div className="fixed top-0 left-0">
            <ProductModal children />
          </div>
        )}
        <div className="hidden lg:block">
          <SideCart />
        </div>
        {showUnfinishedOrderModal ? <UnfinishedOrderModal children /> : null}
      </div>
    </div>
  );
};

export default RestaurantByID;
