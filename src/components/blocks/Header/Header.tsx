import { FaBars } from "react-icons/fa";
import Search from "../Search/Search";
import HeaderButtons from "../HeaderButtons/HeaderButtons";
import Logo from "../../elements/Logo";
import { useDispatch, useSelector } from "react-redux";
import { toggleBurger } from "../../../store/actions/actionCreator";
import SideBarModal from "../SideBarModal/SideBarModal";
import AuthModal from "../AuthModal/AuthModal";
import ProfileModal from "../ProfileModal/ProfileModal.tsx";

const Header = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isAuthOpen = useSelector((state: any) => state.auth.isAuthOpen);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isProfileOpen = useSelector((state: any) => state.auth.isProfileOpen);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sideBarState = useSelector((state: any) => state.sideBar.isSideBarOpen);
  const handleToggleBurger = () => {
    dispatch(toggleBurger());
  };
  return (
    <header className="p-3 lg:py-6 relative shadow-gray-600 border-b-[1px] border-gray-300 shadow-sm">
      <nav className="flex w-full max-w-screen-2xl mx-auto items-center justify-between lg:w-full">
        <div onClick={handleToggleBurger} className="lg:hidden cursor-pointer">
          <FaBars size={20} />
        </div>
        <Search />
        <HeaderButtons />
        <div className="lg:hidden">
          <Logo />
        </div>
      </nav>
      <div
        className={
          sideBarState
            ? "absolute left-0 top-0 bg-white w-[70vw] lg:hidden ease-in-out duration-500 "
            : "absolute left-[-100%] top-0 ease-in-out duration-500"
        }
      >
        <SideBarModal children />
      </div>
      {isAuthOpen && <AuthModal children />}
      {isProfileOpen && <ProfileModal children />}
    </header>
  );
};

export default Header;
