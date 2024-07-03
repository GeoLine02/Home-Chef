import { useDispatch } from "react-redux";
import { text } from "../../../helpers/functions";
import { toggleUserAddressModal } from "../../../store/actions/actionCreator";

const ChangeAddressBtn = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(toggleUserAddressModal());
      }}
    >
      <u className="opacity-70">{text("COMMON_CHANGE")}</u>
    </button>
  );
};

export default ChangeAddressBtn;
