import { useEffect } from "react";
import CheckoutDeliveryTermsBox from "../components/blocks/CheckoutDeliveryTermsBox/CheckoutDeliveryTermsBox";
import CheckoutOrderListBox from "../components/blocks/CheckoutOrderListBox/CheckoutOrderListBox";
import CheckoutPaymentBox from "../components/blocks/CheckoutPaymentBox/CheckoutPaymentBox";
import CheckoutPricesBox from "../components/blocks/CheckoutPricesBox/CheckoutPricesBox";
import CheckoutHead from "../components/elements/CheckoutHead";
import ContinueCheckoutBtn from "../components/elements/ContinueCheckoutBtn";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/state/rootReducers";
import { http } from "../helpers/http";
import { saveRestaurantByIdData } from "../store/actions/actionCreator";

const CheckOut = () => {
  const dispatch = useDispatch();
  const restaurantByID = useSelector(
    (state: RootState) => state.restaurants?.restaurantById
  );
  const cart = useSelector((state: RootState) => state.cart?.cart);
  const restaurantID = cart[0]?.product?.restaurantID;

  useEffect(() => {
    const fetchRestaurantById = () => {
      const apiCallOptions = {
        headers: {
          "content-type": "application/json",
        },
        method: "GET",
      };
      if (!restaurantByID?.length && restaurantID) {
        http(`/restaurant/${restaurantID}`, apiCallOptions)
          .then((restaurantByIDJson) => restaurantByIDJson.json())
          .then((restaurantByID) => {
            dispatch(saveRestaurantByIdData(restaurantByID));
          });
      }
    };
    fetchRestaurantById();
  }, [restaurantByID.length, restaurantID, dispatch]);

  return (
    <main className="p-3 lg:py-6 bg-[#EEEEEE]">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 w-full max-w-screen-2xl mx-auto">
        <div className="w-full">
          <CheckoutHead />
          <div className="flex flex-col gap-8 w-full mt-4">
            <CheckoutDeliveryTermsBox />
            <CheckoutPaymentBox />
            <CheckoutOrderListBox />
          </div>
        </div>
        <div className="w-full">
          <ContinueCheckoutBtn />
          <CheckoutPricesBox />
          <ContinueCheckoutBtn />
        </div>
      </div>
    </main>
  );
};

export default CheckOut;
