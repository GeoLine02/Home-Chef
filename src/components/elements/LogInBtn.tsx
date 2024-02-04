import { useDispatch } from "react-redux";
import { toggleAuthModal } from "../../store/actions/actionCreator";

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
      <p>LogIn</p>
    </button>
  );
};

export default LogInBtn;
