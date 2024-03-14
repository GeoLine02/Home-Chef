import { useDispatch, useSelector } from "react-redux";
import { ProductType } from "../blocks/ProductList/ProductList";
import { FaPlus } from "react-icons/fa6";
import {
  addCartItem,
  getCartItems,
  selectProduct,
  toggleProductModal,
} from "../../store/actions/actionCreator";
import { RootState } from "../../store/state/rootReducers";
import CartProductQuantity from "./CartProductQuantity";
import { ProductQuantity } from "../../types";
import { useEffect } from "react";
import { text } from "../../helpers/functions";
const ProductCard = ({
  id,
  productPhoto,
  productName,
  productPrice,
}: ProductType) => {
  const dispatch = useDispatch();
  const productState = useSelector(
    (state: RootState) => state.products.products
  );

  // gets clicked product
  const product = productState.find((item: ProductType) => item.id === id);
  const handleAddToCart = () => {
    const quantity = 1;
    dispatch(addCartItem(product, quantity));
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
  const handleOpenModal = () => {
    dispatch(selectProduct(id));
    dispatch(toggleProductModal());
  };

  return (
    <div className="lg:w-auto whitespace-nowrap overflow-x-clip w-full">
      <img
        onClick={handleOpenModal}
        className="rounded-xl  cursor-pointer w-screen"
        src={productPhoto}
        alt={productName}
      />
      <h1 className="font-medium text-ellipsis">{productName}</h1>
      <div className="block md:flex justify-between items-center">
        <h1 className="font-medium">${productPrice}</h1>

        {isProductAdded ? (
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
