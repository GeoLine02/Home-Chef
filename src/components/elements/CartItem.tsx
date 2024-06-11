import { ProductType } from "../blocks/ProductList/ProductList";
import CartProductQuantity from "./CartProductQuantity";


const CartItem = ({ id, productName, productPrice }: ProductType) => {

  
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1>{productName}</h1>
        <h1 className="font-medium">$ {productPrice}</h1>
      </div>
      <div>
        <CartProductQuantity id={id} />
      </div>
    </div>
  );
};

export default CartItem;
