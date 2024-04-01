import { useEffect } from "react";
import { getUserByToken } from "../helpers/http";
import { useQuery } from "../hooks/useQuery";
import { useDispatch } from "react-redux";
import { handleFetchUserVkInfo } from "../store/actions/actionCreator";
import routes from "../constants/routes";
import { useNavigate } from "react-router-dom";
import { text } from "../helpers/functions";
import { ToastContainer } from "react-toastify";

const Social = () => {
  const searchParams = useQuery();
  const token = searchParams.get("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      getUserByToken(token).then((user) => {
        if (user) {
          localStorage.setItem("token", token as string);
          dispatch(handleFetchUserVkInfo(user));
        }
      });
    }
  }, [token, dispatch]);

  if (!token) {
    console.error("Token not found in URL");
    return null;
  }

  return (
    <>
      <div className="text-center py-[80px] flex flex-col items-center animate-pulse">
        <div>
          <svg
            className="h-24 w-24 text-green-500 text-center"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
          <ToastContainer
            position="top-left"
            autoClose={3000}
            closeOnClick
            draggable
            theme="light"
          />
            {" "}
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />{" "}
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <div className="alert-popup-title text-[30px] font-bold text-[#4CAF50] mx-[15px] ">
          {text("COMMON_SUCCESS")}!
        </div>
      </div>
      <button
        className="flex mx-auto mb-12 px-6 py-3 font-semibold text-[20px] cursor-pointer bg-orange-400 border border-transparent rounded-full"
        onClick={() => navigate(routes.home)}
      >
        {text("COMMON_HOME_PAGE")}
      </button>
    </>
  );
};

export default Social;
