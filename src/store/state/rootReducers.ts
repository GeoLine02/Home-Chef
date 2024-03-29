import { combineReducers } from "redux";
import { cartReducer } from "../reducers/cartReducer";
import { sideBarReducer } from "../reducers/sideBarReducer";
import { searchReducer } from "../reducers/searchReducer";
import { restaurantReducer } from "../reducers/restaurantReducer";
import { authReducer } from "../reducers/authReducer";
import { productsRedcuer } from "../reducers/productsReducer";

const rootReducers = combineReducers({
  cart: cartReducer,
  sideBar: sideBarReducer,
  search: searchReducer,
  restaurants: restaurantReducer,
  auth: authReducer,
  products: productsRedcuer,
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
