import { text } from "../../helpers/functions";

const ContinueCheckoutBtn = () => {
  return (
    <button className="px-6 h-12 my-4 cursor-pointer bg-orange-400 border border-transparent rounded-full w-full font-medium text-base">
      {text("CHECKOUT_BTN")} 147$
    </button>
  );
};

export default ContinueCheckoutBtn;
