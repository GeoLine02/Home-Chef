import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./constants/routes";
import Home from "./pages/Home";
import RestaurantByID from "./pages/RestaurantByID";
import Header from "./components/blocks/Header/Header";
import "./App.css";
import Footer from "./components/blocks/Footer/Footer";
import CheckOut from "./pages/CheckOut";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/state/rootReducers";
import Social from "./pages/Social";
import { useEffect } from "react";
import { getUserByToken } from "./helpers/http";
import {
  handleFetchUserGoogleInfo,
  handleFetchUserVkInfo,
} from "./store/actions/actionCreator";
import FavouriteRestaurants from "./pages/FavouriteRestaurants";

function App() {
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state: RootState) => state.cart.isCartOpen);
  const isSideBarOpen = useSelector(
    (state: RootState) => state.sideBar.isSideBarOpen
  );
  const isSearchFocused = useSelector(
    (state: RootState) => state.search.isSearchFocused
  );
  const isAuthOpen = useSelector((state: RootState) => state.auth.isAuthOpen);

  // const isProfileOpen = useSelector(
  //   (state: RootState) => state.auth.isProfileOpen
  // );

  const isProductOpen = useSelector(
    (state: RootState) => state.products.toggleProductModal
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (token) {
      getUserByToken(token).then((user) => {
        if (user) {
          dispatch(handleFetchUserVkInfo(user));
          dispatch(handleFetchUserGoogleInfo(user));
        }
      });
    }
  }, [dispatch]);

  return (
    <div
      className={
        isCartOpen || isSideBarOpen || isAuthOpen || isProductOpen
          ? "blur-sm bg-[#000000]/[0.5]"
          : ""
      }
    >
      <Router>
        {isSearchFocused ? null : <Header />}

        <div>
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.checkOut} element={<CheckOut />} />
            <Route path={`${routes.home}/:id`} element={<RestaurantByID />} />
            <Route path={routes.social} element={<Social />} />
            <Route
              path={routes.favouriteRestaurants}
              element={<FavouriteRestaurants />}
            />
          </Routes>
        </div>
        {isSearchFocused ? null : <Footer />}
      </Router>
    </div>
  );
}

export default App;
