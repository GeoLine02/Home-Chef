import CheckoutDeliveryTermsBox from "../components/blocks/CheckoutDeliveryTermsBox/CheckoutDeliveryTermsBox";
import CheckoutOrderListBox from "../components/blocks/CheckoutOrderListBox/CheckoutOrderListBox";
import CheckoutPaymentBox from "../components/blocks/CheckoutPaymentBox/CheckoutPaymentBox";
import CheckoutPricesBox from "../components/blocks/CheckoutPricesBox/CheckoutPricesBox";
import CheckoutHead from "../components/elements/CheckoutHead";
import ContinueCheckoutBtn from "../components/elements/ContinueCheckoutBtn";

const CheckOut = () => {
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
