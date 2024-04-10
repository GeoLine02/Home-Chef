import { Navigate, Outlet } from "react-router-dom";
import routes from "../constants/routes";

const AuthGuard = () => {
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to={routes.home} />;
};

export default AuthGuard;
