import { useDispatch } from "react-redux";
import { text } from "../../../helpers/functions";
import { toggleChangeAddressModalAction } from "../../../store/actions/actionCreator";

const ChangeAddressBtn = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(toggleChangeAddressModalAction());
      }}
    >
      <u className="opacity-70">{text("COMMON_CHANGE")}</u>
    </button>
  );
};

export default ChangeAddressBtn;
