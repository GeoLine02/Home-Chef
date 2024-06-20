import { useDispatch, useSelector } from "react-redux";
import { ProductType } from "../blocks/ProductList/ProductList";
import { FaPlus } from "react-icons/fa6";
import {
  addCartItem,
  closeProductModal,
  getCartItems,
  selectProduct,
  toggleProductModal,
} from "../../store/actions/actionCreator";
import { RootState } from "../../store/state/rootReducers";
import CartProductQuantity from "./CartProductQuantity";
import { ProductQuantity } from "../../types";
import { useEffect } from "react";
import { text } from "../../helpers/functions";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useLocation } from "react-router-dom";
const ProductCard = ({
  id,
  productPhoto,
  productName,
  productPrice,
}: ProductType) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const restaurantById = useSelector(
    (state: RootState) => state.restaurants?.restaurantById
  );
  const isProductModalOpen = useSelector(
    (state: RootState) => state.products.toggleProductModal
  );
  // gets clicked product
  const product = restaurantById.products?.find(
    (item: ProductType) => item.id === id
  );
  const handleAddToCart = () => {
    const quantity = 1;
    dispatch(addCartItem(product, quantity));
    localStorage.setItem("restaurantById", JSON.stringify(restaurantByID));
  };

  const localCart = localStorage.getItem("cart");

  useEffect(() => {
    if (localCart !== null) {
      dispatch(getCartItems(JSON.parse(localCart)));
    }
  }, [localCart, dispatch]);

  const cart = useSelector((state: RootState) => state.cart.cart);

  // checks if item is added or not in cart
  const isProductAdded = cart?.find(
    (item: ProductQuantity) => item.product.id === product.id
  );
  const restaurantByID = useSelector(
    (state: RootState) => state.restaurants?.restaurantById
  );
  const selectedProduct = restaurantByID.products?.find(
    (product: ProductType) => product.id === id
  );
  const handleOpenModal = () => {
    dispatch(selectProduct(selectedProduct));
    dispatch(toggleProductModal());
  };

  const handleCloseModal = () => {
    if (isProductModalOpen) dispatch(closeProductModal());
  };

  const ref = useOutsideClick(
    handleCloseModal
  ) as React.RefObject<HTMLDivElement>;

  return (
    <div
      className="lg:w-auto whitespace-nowrap overflow-x-clip w-full"
      ref={ref}
    >
      <img
        onClick={handleOpenModal}
        className="rounded-xl  cursor-pointer w-screen"
        src={productPhoto}
        alt={productName}
      />
      <h1 className="font-medium text-ellipsis">{productName}</h1>
      <div className="block md:flex justify-between items-center">
        <h1 className="font-medium">${productPrice}</h1>

        {isProductAdded && location.pathname !== "/OrderList" ? (
          <CartProductQuantity id={id} />
        ) : (
          <div
            onClick={handleAddToCart}
            className="border-2 border-gray-400 p-3 mt-1 rounded-full flex justify-center items-center gap-2  cursor-pointer w-fit"
          >
            <FaPlus size={20} />
            <button>{text("COMMON_ADD_TO_CART")}</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
