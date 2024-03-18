import { useSelector } from "react-redux";
import CartBtn from "../../elements/CartBtn";
import LanguageBtn from "../../elements/LanguageBtn";
import LogInBtn from "../../elements/LogInBtn";
import CartModal from "../CartModal/CartModal";
import ProfileBtn from "../../elements/ProfileBtn";
import { RootState } from "../../../store/state/rootReducers";

const HeaderButtons = () => {
  const setCart = useSelector((state: RootState) => state.cart.isCartOpen);
  const isUserLoggedIn = useSelector(
    (state: RootState) => state.auth?.authUserVkInfo
  );

  return (
    <div className="hidden lg:flex lg:gap-6">
      <LanguageBtn />
      <div className="relative z-20">
        <CartBtn />
        <div
          className={
            setCart
              ? "absolute top-20 right-0 ease-in-out duration-500"
              : "absolute top-[-400%] right-0 ease-in-out duration-500"
          }
        >
          <CartModal children />
        </div>
      </div>
      {isUserLoggedIn ? <ProfileBtn /> : <LogInBtn />}
    </div>
  );
};

export default HeaderButtons;
