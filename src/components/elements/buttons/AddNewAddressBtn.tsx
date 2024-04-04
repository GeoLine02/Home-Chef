import { useDispatch } from "react-redux";
import { toggleAddNewAddressModalAction } from "../../../store/actions/actionCreator";

const AddNewAddressBtn = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(toggleAddNewAddressModalAction());
      }}
    >
      <u className="opacity-70">add new address</u>
    </button>
  );
};

export default AddNewAddressBtn;
