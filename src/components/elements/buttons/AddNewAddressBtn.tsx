import { useDispatch } from "react-redux";
import { toggleUserAddressModal } from "../../../store/actions/actionCreator";

const AddNewAddressBtn = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(toggleUserAddressModal());
      }}
    >
      <u className="opacity-70">add address</u>
    </button>
  );
};

export default AddNewAddressBtn;
