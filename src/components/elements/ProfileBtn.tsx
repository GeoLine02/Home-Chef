import { useDispatch } from "react-redux";
import { toggleProfileModal } from "../../store/actions/actionCreator";

const ProfileBtn = () => {
  const dispatch = useDispatch();

  const handlePorfileToggle = () => {
    dispatch(toggleProfileModal());
  };

  return (
    <button
      onClick={handlePorfileToggle}
      className="flex items-center px-8 border-2 border-gray-400 rounded-full"
    >
      <p>Profile</p>
    </button>
  );
};

export default ProfileBtn;
