import { FaBars, FaRegCreditCard, FaRegHeart } from "react-icons/fa6";
import { TiLocationOutline } from "react-icons/ti";
import { text } from "../../helpers/functions";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { SlLogout } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { toggleAuthModal } from "../../store/actions/actionCreator";

const LoggedInUserSideBar = () => {
  const dispatch = useDispatch();
  return (
    <div>
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
      <div
        onClick={() => {
          dispatch(toggleAuthModal());
        }}
        className="flex items-center gap-2 py-3"
      >
        <SlLogout size={20} />
        <p>{text("SIDEBAR_SIGN_OUT")}</p>
      </div>
    </div>
  );
};

export default LoggedInUserSideBar;
