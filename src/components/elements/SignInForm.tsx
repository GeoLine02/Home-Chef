import { IoCloseOutline } from "react-icons/io5";
import Google from "../../assets/Google.svg";
import Vk from "../../assets/Vk.svg";
import { useDispatch } from "react-redux";
import { toggleAuthModal } from "../../store/actions/actionCreator";

const SignInForm = () => {
  const dispatch = useDispatch()
  const handleVKontakteSignIn = async () => {
    window.open("http://localhost:4000/auth/vkontakte/callback", "_self");
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
          Enter your phone number or email address
        </h1>
        <div className="flex gap-[16px] flex-col my-6">
          <input
            className="p-3 rounded-xl border-2 border-[#847469]"
            type="text"
            placeholder="Enter your phone number or email address"
          />
          <button className="bg-[#FF9939] p-3 rounded-full">Sign in</button>
        </div>
        <div className="flex items-center gap-11 justify-center px-3">
          <hr className="border-[1px] w-full border-[#847469]" />

          <span>or</span>

          <hr className="border-[1px] w-full border-[#847469]" />
        </div>
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex items-center justify-center gap-3 w-full p-3 border-2 border-[#847469] rounded-full cursor-pointer">
            <img src={Google} alt="Google" />
            <button>Sign in with Google</button>
          </div>
          <div
            className="flex items-center justify-center gap-3 w-full p-3 border-2 border-[#847469] rounded-full cursor-pointer"
            onClick={handleVKontakteSignIn}
          >
            <img src={Vk} alt="Vkontakte" />
            <button>Sign in with VKontakte</button>
          </div>
        </div>
      </div>
      <div>
        <p>
          By continuing, you agree to receive calls, SMS and messages from
          WhatsApp (including those sent using an automatic dialing system) and
          affiliated companies at the number you provide.
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
