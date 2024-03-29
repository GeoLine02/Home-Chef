import { text } from "../../../helpers/functions";
import Google from "../../../assets/Google.svg";

const GoogleSignInBtn = () => {
  const handleGoogleSignIn = async () => {
    window.open("http://localhost:4000/auth/google/callback", "_self");
  };

  return (
    <div
      onClick={handleGoogleSignIn}
      className="flex items-center justify-center gap-3 w-full p-3 border-2 border-[#847469] rounded-full cursor-pointer"
    >
      <img src={Google} alt="Google" />
      <button>{text("HEADER_LOGIN_MODAL_GOOGLE")}</button>
    </div>
  );
};

export default GoogleSignInBtn;
