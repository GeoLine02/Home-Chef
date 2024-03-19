import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggleBurger } from "../../store/actions/actionCreator";
import { RootState } from "../../store/state/rootReducers";
import LoggedInUserSideBar from "./LoggedInUserSideBar";
import LoggedOutUsesrSideBar from "./LoggedOutUsesrSideBar";

const SideBar = () => {
  const dispatch = useDispatch();
  const sideBarState = useSelector(
    (state: RootState) => state.sideBar.isSideBarOpen
  );
  const isUserLoggedIn = useSelector(
    (state: RootState) => state.auth.authUserVkInfo
  );
  const handleToggleBurger = () => {
    dispatch(toggleBurger());
  };
  return (
    <div
      className={
        sideBarState
          ? "fixed left-0 top-0 bg-white w-[70vw] lg:hidden ease-in-out duration-500 p-3 z-50 h-screen"
          : "absolute left-[-100%] top-0 ease-in-out duration-500 p-3 z-20 h-screen"
      }
    >
      {isUserLoggedIn ? (
        <div onClick={handleToggleBurger}>
          <div className="cursor-pointer">
            <AiOutlineClose size={30} />
          </div>
          <LoggedInUserSideBar />
        </div>
      ) : (
        <div onClick={handleToggleBurger}>
          <div className="cursor-pointer">
            <AiOutlineClose size={30} />
          </div>
          <LoggedOutUsesrSideBar />
        </div>
      )}
    </div>
  );
};

export default SideBar;
