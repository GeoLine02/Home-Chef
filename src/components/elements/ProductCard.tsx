import { ProductType } from "../../store/reducers/productsReducer";

const ProductCard = ({
  productPhoto,
  productName,
  productPrice,
}: ProductType) => {
  return (
    <div>
      <img src={productPhoto} alt={productName} />
      <h1 className="font-medium">{productName}</h1>
      <div>
        <h1>{productPrice}</h1>
        <div className="border-2 border-gray-400 p-3 rounded-full">
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
