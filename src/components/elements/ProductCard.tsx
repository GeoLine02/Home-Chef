import { useDispatch } from "react-redux";
import { ProductType } from "../blocks/ProductList/ProductList";
import { FaPlus } from "react-icons/fa6";
import {
  selectProduct,
  toggleProductModal,
} from "../../store/actions/actionCreator";

const ProductCard = ({
  id,
  productPhoto,
  productName,
  productPrice,
}: ProductType) => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(selectProduct(id));
    dispatch(toggleProductModal());
  };

  return (
    <div className="w-40 lg:w-auto whitespace-nowrap overflow-x-clip">
      <img
        onClick={handleOpenModal}
        className="w-40 rounded-xl md:w-80 cursor-pointer"
        src={productPhoto}
        alt={productName}
      />
      <h1 className="font-medium text-ellipsis">{productName}</h1>
      <div className="block md:flex justify-between items-center">
        <h1 className="font-medium">{productPrice}</h1>
        <div className="border-2 border-gray-400 p-3 mt-1 rounded-full flex justify-center items-center gap-2 w-full cursor-pointer lg:w-fit">
          <FaPlus size={20} />
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
