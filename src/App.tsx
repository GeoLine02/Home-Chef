import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./constants/routes";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RestaurantByID from "./pages/RestaurantByID";
import Header from "./components/blocks/Header/Header";
import "./App.css";
import Footer from "./components/blocks/Footer/Footer";
import CheckOut from "./pages/CheckOut";
import { useSelector } from "react-redux";
import { RootState } from "./store/state/rootReducers";

function App() {
  const isCartOpen = useSelector((state: RootState) => state.cart.isCartOpen);
  const isSideBarOpen = useSelector(
    (state: RootState) => state.sideBar.isSideBarOpen
  );
  const isSearchFocused = useSelector(
    (state: RootState) => state.search.isSearchFocused
  );
  const isAuthOpen = useSelector((state: RootState) => state.auth.isAuthOpen);
  return (
    <div
      className={
        isCartOpen || isSideBarOpen || isAuthOpen
          ? " blur-xl bg-gray-400 bg-opacity-70"
          : ""
      }
    >
      <Router>
        {isSearchFocused ? null : <Header />}

        <div>
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.products} element={<Products />} />
            <Route path={routes.checkOut} element={<CheckOut />} />
            <Route path={`${routes.home}/:id`} element={<RestaurantByID />} />
          </Routes>
        </div>
        {isSearchFocused ? null : <Footer />}
      </Router>
    </div>
  );
}

export default App;
