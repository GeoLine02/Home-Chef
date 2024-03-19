import { text } from "../../../helpers/functions";
import Vk from "../../../assets/Vk.svg";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../store/actions/actionCreator";

const VKSignInBtn = () => {
  const dispatch = useDispatch();

  const handleVKontakteSignIn = async () => {
    window.open("http://localhost:4000/auth/vkontakte/callback", "_self");
    dispatch(clearCart());
  };

  return (
    <div
      className="flex items-center justify-center gap-3 w-full p-3 border-2 border-[#847469] rounded-full cursor-pointer"
      onClick={handleVKontakteSignIn}
    >
      <img src={Vk} alt="Vkontakte" />
      <button>{text("HEADER_LOGIN_MODAL_VK")}</button>
    </div>
  );
};

export default VKSignInBtn;
