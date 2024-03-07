import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { TiLocationOutline } from "react-icons/ti";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { SlLogout } from "react-icons/sl";
import { PiSignIn } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { toggleBurger } from "../../store/actions/actionCreator";
import { text } from "../../helpers/functions";

const SideBar = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sideBarState = useSelector((state: any) => state.sideBar.isSideBarOpen);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isUserLoggedIn = useSelector((state: any) => state.user.isUserLoggedIn);
  const handleToggleBurger = () => {
    dispatch(toggleBurger());
  };
  return (
    <div
      className={
        sideBarState
          ? "fixed left-0 top-0 bg-white w-[70vw] lg:hidden ease-in-out duration-500 p-3 z-50 h-screen"
          : "absolute left-[-100%] top-0 ease-in-out duration-500 p-3 z-20 h-screen"
      }
    >
      {isUserLoggedIn ? (
        <div onClick={handleToggleBurger}>
          <div className="cursor-pointer">
            <AiOutlineClose size={30} />
          </div>
          <div className="flex items-center gap-2 py-3">
            <FaBars size={20} />
            <p>{text("SIDEBAR_ORDER")}</p>
          </div>
          <div className="flex items-center gap-2 py-3">
            <TiLocationOutline size={20} />
            <p>{text("SIDEBAR_ADDRESS")}</p>
          </div>
          <div className="flex items-center gap-2 py-3">
            <FaRegCreditCard size={20} />
            <p>{text("SIDEBAR_CREDIT_CARD")}</p>
          </div>
          <div className="flex items-center gap-2 py-3">
            <FaRegHeart size={20} />
            <p>{text("SIDEBAR_WISH_LIST")}</p>
          </div>
          <div className="flex items-center gap-2 py-3">
            <FaRegQuestionCircle size={20} />
            <p>{text("SIDEBAR_NEED_HELP_QUESTION")}</p>
          </div>
          <div className="flex items-center gap-2 py-3">
            <GrLanguage size={20} />
            <p>{text("SIDEBAR_LANGUAGE")}</p>
          </div>
          <div className="flex items-center gap-2 py-3">
            <SlLogout size={20} />
            <p>{text("SIDEBAR_SIGN_OUT")}</p>
          </div>
        </div>
      ) : (
        <div onClick={handleToggleBurger}>
          <div className="cursor-pointer">
            <AiOutlineClose size={30} />
          </div>
          <div className="flex items-center gap-2 py-3">
            <PiSignIn size={20} />
            <p>{text("SIDEBAR_SIGN_IN")}</p>
          </div>
          <div className="flex items-center gap-2 py-3">
            <FaRegQuestionCircle size={20} />
            <p>{text("SIDEBAR_NEED_HELP_QUESTION")}</p>
          </div>
          <div className="flex items-center gap-2 py-3">
            <GrLanguage size={20} />
            <p>{text("SIDEBAR_LANGUAGE")}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
