import Google from "../../assets/Google.svg";
import Vk from "../../assets/Vk.svg";

const SignInForm = () => {
  return (
    <div>
      <h1 className="text-3xl font-medium w-full text-center">
        Enter your phone number or email address
      </h1>
      <div className="flex flex-col my-6">
        <input
          className="p-3 rounded-xl border-2 border-gray-400"
          type="text"
          placeholder="Enter your phone number or email address"
        />
        <button className="bg-orange-500 p-3 rounded-full">Sign in</button>
      </div>
      <div className="flex items-center gap-11 justify-center px-3">
        <hr className="border-[1px] w-full border-gray-400" />

        <span>or</span>

        <hr className="border-[1px] w-full border-gray-400" />
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <div className="flex items-center justify-center gap-3 w-full p-3 border-2 border-orange-950 rounded-full cursor-pointer">
          <img src={Google} alt="Google" />
          <button>Sign in with Google</button>
        </div>
        <div className="flex items-center justify-center gap-3 w-full p-3 border-2 border-orange-950 rounded-full cursor-pointer">
          <img src={Vk} alt="Vkontakte" />
          <button>Sign in with VKontakte</button>
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
