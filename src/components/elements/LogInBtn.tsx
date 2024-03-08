import { useDispatch } from "react-redux";
import { toggleAuthModal } from "../../store/actions/actionCreator";
import { text } from "../../helpers/functions";

const LogInBtn = () => {
  const dispatch = useDispatch();

  const handleAuthToggle = () => {
    dispatch(toggleAuthModal());
  };

  return (
    <button
      onClick={handleAuthToggle}
      className="flex items-center px-8 border-2 border-gray-400 rounded-full"
    >
      <p>{text("HEADER_LOGIN")}</p>
    </button>
  );
};

export default LogInBtn;
