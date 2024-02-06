import ProductList from "../components/blocks/ProductList/ProductList";
import menu from "../constants/menu";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import ProductModal from "../components/blocks/ProductModal/ProductModal";
import { RootState } from "../store/state/rootReducers";
import { useSelector } from "react-redux";
const RestaurantByID = () => {
  const navigate = useNavigate();

  const toggleProductModal = useSelector(
    (state: RootState) => state.products.toggleProductModal
  );
  return (
    <div className="grid grid-flow-col mt-9 relative">
      <div className="pr-12 col-span-1">
        <div
          onClick={() => {
            navigate(-1);
          }}
          className="hidden lg:flex lg:border-2 lg:border-gray-400 lg:rounded-full lg:p-3 lg:w-fit"
        >
          <FaArrowLeft size={20} />
          <button>All Restaurants</button>
        </div>
        <div className="hidden lg:block">
          <h1 className="font-medium text-3xl">Menu</h1>

          {menu.map((category) => (
            <ul key={category}>
              <li className="py-2">{category}</li>
            </ul>
          ))}
        </div>
      </div>
      <div className="col-span-4 place-items-center">
        <h1 className="font-medium text-3xl mb-6">Dynamic Category</h1>
        <ProductList />
      </div>
      {toggleProductModal && (
        <div className="fixed top-0 left-0">
          <ProductModal children />
        </div>
      )}
    </div>
  );
};

export default RestaurantByID;
