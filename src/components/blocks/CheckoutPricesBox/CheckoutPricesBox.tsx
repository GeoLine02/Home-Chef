import { text } from "../../../helpers/functions";

const CheckoutPricesBox = () => {
  return (
    <div className="rounded-lg flex justify-start flex-col gap-4 w-full bg-[#ffffff] p-6 min-h-screen">
      <h1 className="text-2xl font-bold">{text("COMMON_PRICE")}</h1>
      <div className="flex justify-between">
        <h1 className="font-medium text-base opacity-70">
          {text("CHECKOUT_PRODUCTS_IN_ORDER")}
        </h1>
        <h1 className="font-medium text-base opacity-70">999$</h1>
      </div>
      <div className="flex justify-between">
        <h1 className="font-medium text-base opacity-70">
          {text("COMMON_DELIVERY")}
        </h1>
        <h1 className="font-medium text-base opacity-70">0.25$</h1>
      </div>
      <hr className="border-1 border-solid border-gray-400" />
      <div className="flex justify-between">
        <h1 className="font-medium text-base">{text("CHECKOUT_TOTAL")}</h1>
        <h1 className="font-medium text-base opacity-70">999.25$</h1>
      </div>
      <p className="mt-5 opacity-70">{text("CHECKOUT_POLICY_TEXT")}</p>
    </div>
  );
};

export default CheckoutPricesBox;
