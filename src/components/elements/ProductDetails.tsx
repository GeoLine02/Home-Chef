import { useDispatch, useSelector } from "react-redux";
import { ProductType } from "../blocks/ProductList/ProductList";
import { AiOutlineClose } from "react-icons/ai";
import {
  addCartItem,
  toggleProductModal,
} from "../../store/actions/actionCreator";
import CartProductQuantity from "./CartProductQuantity";
import { RootState } from "../../store/state/rootReducers";

const ProductDetails = ({
  id,
  productName,
  productPhoto,
  productDescription,
  productPrice,
}: ProductType) => {
  const dispatch = useDispatch();

  const productState = useSelector(
    (state: RootState) => state.products.products
  );

  const handleAddToCart = () => {
    const product = productState.find((item: ProductType) => item.id === id);
    const quantity = 1;
    dispatch(addCartItem(product, quantity));
  };

  return (
    <div className="bg-white block gap-9 h-screen rounded-md md:px-6 lg:pt-6 lg:pb-24 relative lg:flex md:w-fit md:h-auto">
      <div
        onClick={() => {
          dispatch(toggleProductModal());
        }}
        className="absolute top-5 right-5 cursor-pointer bg-white rounded-full box-content p-3"
      >
        <AiOutlineClose size={25} />
      </div>
      <img
        className="md:w-1/2 lg:rounded-lg"
        src={productPhoto}
        alt={productName}
      />
      <div className="flex gap-6 flex-col py-5 px-5 lg:py-0 lg:px-0">
        <div className="flex justify-between  lg:flex-col gap-4">
          <h1 className="font-medium text-3xl">{productName}</h1>
          <h1 className="font-medium text-3xl">{productPrice}</h1>
        </div>
        {/* buttons */}
        <div className="flex flex-col-reverse lg:flex-col gap-6">
          <div className="flex items-center gap-8">
            <CartProductQuantity id={id} />
            <div>
              <button
                onClick={handleAddToCart}
                className="bg-orange-500 w-fit p-3 rounded-full"
              >
                Add to cart
              </button>
            </div>
          </div>
          {/* description */}
          <div className="max-w-96">
            <br />
            <span className="font-medium">Compound</span>
            <p>Dynamic compond</p>
            <span className="font-medium">Description</span>
            <p>{productDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
