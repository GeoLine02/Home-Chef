import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toggleAddNewAddressModalAction } from "../../../store/actions/actionCreator";

const CloseNewAddressModalBtn = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="flex w-full justify-end cursor-pointer"
      onClick={() => {
        dispatch(toggleAddNewAddressModalAction());
      }}
    >
      <IoCloseCircleOutline size={25} />
    </div>
  );
};

export default CloseNewAddressModalBtn;
