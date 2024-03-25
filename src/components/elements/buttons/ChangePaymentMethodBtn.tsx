import { text } from "../../../helpers/functions";

const ChangePaymentMethodBtn = () => {
  return (
    <button>
      <u className="opacity-70">{text("COMMON_CHANGE")}</u>
    </button>
  );
};

export default ChangePaymentMethodBtn;
