import { useCallback, useState } from "react";
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
import { getUserByToken, http } from "./helpers/http";
import {
  getCartItems,
  handleFetchRestaurants,
  saveUserData,
} from "./store/actions/actionCreator";
import FavoriteRestaurants from "./pages/FavoriteRestaurants";
import { withTranslation } from "react-i18next";
import AuthGuard from "./guard/AuthGuard";
import AdressConfirmationModal from "./components/blocks/AdressConfirmationModal/AdressConfirmationModal";
import Orders from "./pages/Orders";

const App = withTranslation()(function App() {
  const [offSet, setOffSet] = useState<number>(0);
  const dispatch = useDispatch();
  const localCart = localStorage.getItem("cart");

  useEffect(() => {
    if (localCart) {
      dispatch(getCartItems(JSON.parse(localCart)));
    }
  }, [dispatch, localCart]);

  const restaurantsState = useSelector(
    (state: RootState) => state.restaurants?.restaurants
  );

  const isCartOpen = useSelector((state: RootState) => state.cart.isCartOpen);

  const isSideBarOpen = useSelector(
    (state: RootState) => state.sideBar.isSideBarOpen
  );

  const isSearchFocused = useSelector(
    (state: RootState) => state.search.isSearchFocused
  );

  const isAuthOpen = useSelector((state: RootState) => state.auth?.isAuthOpen);

  const isChangeAddressOpen = useSelector(
    (state: RootState) => state.auth.toggleChangeAddressModal
  );

  const isNewAddressModalOpen = useSelector(
    (state: RootState) => state.auth.toggleAddNewAddressModal
  );

  const isProductOpen = useSelector(
    (state: RootState) => state.products.toggleProductModal
  );

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      getUserByToken(token).then((user) => {
        dispatch(saveUserData(user));
      });
    }
  }, [dispatch]);

  const fetchRestaurants = useCallback(() => {
    const apiCallOptions = {
      headers: {
        "content-type": "application/json",
      },
      method: "GET",
    };

    http(`/restaurant?offset=${offSet}`, apiCallOptions)
      .then((jsonRestaurantList) => jsonRestaurantList.json())
      .then((restaurantList) => {
        setOffSet((prev) => prev + 15);
        dispatch(handleFetchRestaurants(restaurantList));
      });
  }, [dispatch, offSet]);

  const handleScroll = useCallback(() => {
    const scrollThreshold = 200;
    const scrollPosition =
      window.innerHeight + document.documentElement.scrollTop;
    const documentHeight = document.documentElement.offsetHeight;

    if (window.location.pathname === "/") {
      if (scrollPosition >= documentHeight - scrollThreshold) {
        fetchRestaurants();
      }
    }
  }, [fetchRestaurants]);

  useEffect(() => {
    if (offSet === 0) {
      fetchRestaurants();
    }
  }, [fetchRestaurants, offSet]);

  useEffect(() => {
    if (restaurantsState?.length) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, restaurantsState?.length]);

  // useEffect(() => {
  //   if (window.location.pathname === "/") {
  //     const apiCallOptions = {
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       method: "GET",
  //     };
  //     http(`/restaurant?offset=${offSet}`, apiCallOptions)
  //       .then((jsonRestaurantList) => jsonRestaurantList.json())
  //       .then((restaurantList) => {
  //         setOffSet((prev) => prev + 15);
  //         dispatch(handleFetchRestaurants(restaurantList));
  //       });
  //   }
  // }, [dispatch]);

  return (
    <div
      className={
        isCartOpen ||
        isSideBarOpen ||
        isAuthOpen ||
        isProductOpen ||
        isChangeAddressOpen ||
        isNewAddressModalOpen
          ? "blur-sm bg-[#000000]/[0.5] h-screen overflow-y-hidden"
          : ""
      }
    >
      <Router>
        {isSearchFocused ? null : <Header />}
        <AdressConfirmationModal />
        <main>
          <Routes>
            <Route element={<AuthGuard />}>
              <Route path={routes.checkOut} element={<CheckOut />} />
              <Route
                path={routes.favoriteRestaurants}
                element={<FavoriteRestaurants />}
              />
              {/* <Route path={`${routes.summeryorder}/:id`} element={<SummeryOrder/>}/> */}
              <Route path={routes.orderList} element={<Orders />} />
            </Route>
            <Route path={routes.home} element={<Home />} />
            <Route path={`${routes.home}/:id`} element={<RestaurantByID />} />
            <Route path={routes.social} element={<Social />} />
          </Routes>
        </main>
        {isSearchFocused ? null : <Footer />}
      </Router>
    </div>
  );
});

export default App;
