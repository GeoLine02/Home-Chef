import { PiSignIn } from "react-icons/pi";
import { text } from "../../helpers/functions";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { userLogOutAction } from "../../store/actions/actionCreator";

const LoggedOutUsesrSideBar = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div
        onClick={() => {
          dispatch(userLogOutAction());
        }}
        className="flex items-center gap-2 py-3"
      >
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
  );
};

export default LoggedOutUsesrSideBar;
