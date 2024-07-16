import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  closeAuthModal,
  toggleAuthModal,
} from "../../store/actions/actionCreator";
import { text } from "../../helpers/functions";
import GoogleSignInBtn from "./buttons/GoogleSignInBtn";
import VKSignInBtn from "./buttons/VKSignInBtn";
import { RootState } from "../../store/state/rootReducers";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const SignInForm = () => {
  const dispatch = useDispatch();
  const isAuthOpen = useSelector((state: RootState) => state.auth.isAuthOpen);

  const handleCloseForm = () => {
    if (isAuthOpen) dispatch(closeAuthModal());
  };

  const ref = useOutsideClick(
    handleCloseForm
  ) as React.RefObject<HTMLDivElement>;

  return (
    <div className="flex flex-col gap-[32px]" ref={ref}>
      <div
        className="top-4 right-4 bg-transparent w-[48px] h-[48px] rounded-full absolute md:top-[-20px] md:right-[-20px] md:bg-white flex items-center justify-center  hover:cursor-pointer"
        onClick={() => dispatch(toggleAuthModal())}
      >
        <IoCloseOutline className="text-[24px] text-[#847469] " />
      </div>
      <div>
        <h1 className="text-3xl font-medium w-full text-center">
          {text("HEADER_LOGIN_MODAL_HEADING")}
        </h1>
        <div className="flex gap-[16px] flex-col my-6">
          <input
            className="p-3 rounded-xl border-2 border-[#847469]"
            type="text"
            placeholder={text("HEADER_LOGIN_MODAL_INPUT_PH")}
          />
          <button className="bg-[#FF9939] p-3 rounded-full">
            {text("COMMON_SIGN_IN")}
          </button>
        </div>
        <div className="flex items-center gap-11 justify-center px-3">
          <hr className="border-[1px] w-full border-[#847469]" />

          <span>{text("COMMON_OR")}</span>

          <hr className="border-[1px] w-full border-[#847469]" />
        </div>
        <div className="flex flex-col gap-4 mt-6">
          <GoogleSignInBtn />
          <VKSignInBtn />
        </div>
      </div>
      <div>
        <p>{text("HEADER_LOGIN_MODAL_RULE")}</p>
      </div>
    </div>
  );
};

export default SignInForm;
