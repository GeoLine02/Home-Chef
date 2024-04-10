import { useDispatch } from "react-redux";
import { toggleChangeAddressModalAction } from "../../../store/actions/actionCreator";
import { IoCloseCircleOutline } from "react-icons/io5";

const CloseChangeAddressModalBtn = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex w-full justify-end">
      <div
        onClick={() => {
          dispatch(toggleChangeAddressModalAction());
        }}
        className="cursor-pointer"
      >
        <IoCloseCircleOutline size={35} />
      </div>
    </div>
  );
};

export default CloseChangeAddressModalBtn;
