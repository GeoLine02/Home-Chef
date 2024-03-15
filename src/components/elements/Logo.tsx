import { useNavigate } from "react-router-dom";
import LogoImg from "../../assets/Logo.svg";
import routes from "../../constants/routes";
const Logo = () => {
  const navigate = useNavigate();

  return (
    <img
      className="cursor-pointer"
      onClick={() => {
        navigate(routes.home);
      }}
      src={LogoImg}
      alt="Logo"
    />
  );
};

export default Logo;
