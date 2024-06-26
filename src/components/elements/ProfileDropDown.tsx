import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleProfileModal,
  userLogOutAction,
} from "../../store/actions/actionCreator";
import { FaListUl } from "react-icons/fa6";
import { SlCreditCard, SlLocationPin, SlLogout } from "react-icons/sl";
import { GoHeart } from "react-icons/go";
import { PiQuestion } from "react-icons/pi";
import { GrLanguage } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import { text } from "../../helpers/functions";

const ProfileDropDown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const authUserVkInfo = useSelector((state: any) => state.auth.authUserVkInfo);

  const onLogoutClickHandler = () => {
    localStorage.removeItem("token");
    dispatch(userLogOutAction());
    dispatch(toggleProfileModal());
    navigate(routes.home);
  };

  return (
    <div className="w-[270px] rounded-[12px] absolute z-10 top-[100px] left-3/4 bg-white p-5">
      <IoCloseOutline
        className="text-[24px] text-[#847469] hover:cursor-pointer"
        onClick={() => dispatch(toggleProfileModal())}
      />
      <div className="flex flex-col items-center text-center gap-[8px] text-[14px] py-[18px] leading-[20px] font-medium text-[#3D3D3D]">
        <img className="w-[48px] h-[48px] rounded-full bg-orange-500" />
        <span>
          {authUserVkInfo.firstName} {authUserVkInfo.lastName}
        </span>
      </div>
      <ul>
        
        <Link to={routes.orderList}>
          <li className="flex gap-[8px] items-center py-[8px] px-[16px]">
          <FaListUl className="text-[18px]"/>
          <span className="text-[14px] leading-[20px] font-medium text-[#3D3D3D] hover:cursor-pointer">
            {text("COMMON_ORDERS")}
          </span>
        </li>
        </Link>

        <li className="flex gap-[8px] items-center py-[8px] px-[16px]">
          <SlLocationPin className="text-[18px]" />
          <span className="text-[14px] leading-[20px] font-medium text-[#3D3D3D] hover:cursor-pointer">
            {text("SIDEBAR_ADDRESS")}
          </span>
        </li>
        <li className="flex gap-[8px] items-center py-[8px] px-[16px]">
          <SlCreditCard className="text-[18px]" />
          <span className="text-[14px] leading-[20px] font-medium text-[#3D3D3D] hover:cursor-pointer">
            {text("COMMON_CARDS")}
          </span>
        </li>
        <Link
          to={routes.favoriteRestaurants}
          onClick={() => dispatch(toggleProfileModal())}
          className="flex gap-[8px] items-center py-[8px] px-[16px]"
        >
          <GoHeart className="text-[18px]" />
          <span className="text-[14px] leading-[20px] font-medium text-[#3D3D3D] hover:cursor-pointer">
            {text("COMMON_FAVOURITE_RESTS")}
          </span>
        </Link>
        <li className="flex gap-[8px] items-center py-[8px] px-[16px]">
          <PiQuestion className="text-[18px]" />
          <span className="text-[14px] leading-[20px] font-medium text-[#3D3D3D] hover:cursor-pointer">
            {text("SIDEBAR_NEED_HELP_QUESTION")}
          </span>
        </li>
        <li className="flex gap-[8px] items-center py-[8px] px-[16px]">
          <GrLanguage className="text-[18px]" />
          <span className="text-[14px] leading-[20px] font-medium text-[#3D3D3D] hover:cursor-pointer">
            {text("SIDEBAR_LANGUAGE")}
          </span>
        </li>
        <li
          className="flex gap-[8px] items-center py-[8px] px-[16px]"
          onClick={onLogoutClickHandler}
        >
          <SlLogout className="text-[18px]" />
          <span className="text-[14px] leading-[20px] font-medium text-[#3D3D3D] hover:cursor-pointer">
            {text("COMMON_LOG_OUT")}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropDown;
