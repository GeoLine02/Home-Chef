import ProductList from "../components/blocks/ProductList/ProductList";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import ProductModal from "../components/blocks/ProductModal/ProductModal";
import { RootState } from "../store/state/rootReducers";
import { useSelector } from "react-redux";
import Menu from "../components/elements/Menu";
import SideCart from "../components/blocks/sideCart/SideCart";
import { text } from "../helpers/functions";
const RestaurantByID = () => {
  const navigate = useNavigate();

  const toggleProductModal = useSelector(
    (state: RootState) => state.products.toggleProductModal
  );
  return (
    <div className="grid lg:grid-cols-repeat-5-18 mt-9 relative gap-6 justify-center">
      <div className="flex flex-col items-center">
        <div
          onClick={() => {
            navigate(-1);
          }}
          className="hidden lg:flex lg:border-2 lg:border-gray-400 lg:rounded-full lg:p-3 lg:w-fit"
        >
          <FaArrowLeft size={20} />
          <button>{text("RESTAURANT_BY_ID_BTN")}</button>
        </div>
        <div className="flex flex-col items-cneter">
          <h1 className="font-medium text-3xl hidden lg:block">
            {text("COMMON_MENU")}
          </h1>
          <Menu />
        </div>
      </div>
      <div className="col-span-3 place-items-center">
        <h1 className="font-medium text-3xl mb-6">*Dynamic Category*</h1>
        <ProductList />
      </div>
      {toggleProductModal && (
        <div className="fixed top-0 left-0">
          <ProductModal children />
        </div>
      )}
      <div className="hidden lg:block">
        <SideCart />
      </div>
    </div>
  );
};

export default RestaurantByID;
