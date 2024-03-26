import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import routes from "../constants/routes";
import { RootState } from "../store/state/rootReducers";

const AuthGuard = () => {
  const isUserLoggedIn = useSelector(
    (state: RootState) => state.auth.authUserVkInfo
  );
  return isUserLoggedIn ? <Outlet /> : <Navigate to={routes.home} />;
};

export default AuthGuard;
