import { ReactNode } from "react";
import { createPortal } from "react-dom";
import ProductDetails from "../../elements/ProductDetails";
import { useSelector } from "react-redux";

type ProductModalType = {
  children: ReactNode;
  handleQuantityIncrease: () => void;
  handleQuantityDecrease: () => void;
};

const ProductModal = ({ children }: Partial<ProductModalType>) => {
  const productDetails = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: any) => state.products.selectedProduct
  );
  return createPortal(
    <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
      <div>
        <ProductDetails
          id={productDetails?.id}
          productDescription={productDetails?.productDescription}
          productComposition={productDetails?.productComposition}
          productName={productDetails?.productName}
          productPhoto={productDetails?.productPhoto}
          productPrice={productDetails?.productPrice}
          restaurantID={productDetails?.restaurantID}
          key={productDetails?.id}
        />
      </div>
      <div>{children}</div>
    </div>,

    document.getElementById("productModal") as HTMLElement
  );
};

export default ProductModal;
