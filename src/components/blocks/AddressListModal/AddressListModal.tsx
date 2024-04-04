import { createPortal } from "react-dom";
import AddressList from "../AddressList/AddressList";
import CloseChangeAddressModalBtn from "../../elements/buttons/CloseChangeAddressModalBtn";
import { useDispatch } from "react-redux";
import {
  toggleAddNewAddressModalAction,
  toggleChangeAddressModalAction,
} from "../../../store/actions/actionCreator";

const AddressListModal = () => {
  const dispatch = useDispatch();
  return createPortal(
    <div className="flex w-screen h-screen justify-center items-center top-0 left-0 fixed drop-shadow-2xl">
      <div className="bg-white p-3 rounded-lg">
        <CloseChangeAddressModalBtn />
        <div>
          <div
            onClick={() => {
              dispatch(toggleAddNewAddressModalAction());
              dispatch(toggleChangeAddressModalAction());
            }}
            className="text-center bg-orange-500 text-white font-medium py-2 cursor-pointer"
          >
            <button>Add new address</button>
          </div>
          <AddressList />
        </div>
      </div>
    </div>,
    document.getElementById("AddressListModal") as HTMLElement
  );
};

export default AddressListModal;
