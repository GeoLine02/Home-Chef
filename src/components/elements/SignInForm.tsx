import { IoCloseOutline } from "react-icons/io5";
import Google from "../../assets/Google.svg";
import Vk from "../../assets/Vk.svg";
import { useDispatch } from "react-redux";
import { toggleAuthModal } from "../../store/actions/actionCreator";
import { text } from "../../helpers/functions";

const SignInForm = () => {
  const dispatch = useDispatch();
  const handleVKontakteSignIn = async () => {
    window.open("http://localhost:4000/auth/vkontakte/callback", "_self");
  };

  const handleGoogleSignIn = async () => {
    window.open("http://localhost:4000/auth/google/callback", "_self");
  };

  return (
    <div className="flex flex-col gap-[32px]">
      <div
        className="w-[48px] h-[48px] rounded-full absolute top-[-20px] right-[-20px] bg-white flex items-center justify-center  hover:cursor-pointer"
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
        <div onClick={handleGoogleSignIn} className="flex flex-col gap-4 mt-6">
          <div className="flex items-center justify-center gap-3 w-full p-3 border-2 border-[#847469] rounded-full cursor-pointer">
            <img src={Google} alt="Google" />
            <button>{text("HEADER_LOGIN_MODAL_GOOGLE")}</button>
          </div>
          <div
            className="flex items-center justify-center gap-3 w-full p-3 border-2 border-[#847469] rounded-full cursor-pointer"
            onClick={handleVKontakteSignIn}
          >
            <img src={Vk} alt="Vkontakte" />
            <button>{text("HEADER_LOGIN_MODAL_VK")}</button>
          </div>
        </div>
      </div>
      <div>
        <p>{text("HEADER_LOGIN_MODAL_RULE")}</p>
      </div>
    </div>
  );
};

export default SignInForm;
