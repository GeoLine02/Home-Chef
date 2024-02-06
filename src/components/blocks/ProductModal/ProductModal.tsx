import { ReactNode } from "react";
import { createPortal } from "react-dom";
import ProductDetails from "../../elements/ProductDetails";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/state/rootReducers";

type ProductModalType = {
  children: ReactNode;
};

const ProductModal = ({ children }: ProductModalType) => {
  const productDetails = useSelector(
    (state: RootState) => state.products.selectedProduct
  );
  return createPortal(
    <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center ">
      <div>
        <ProductDetails
          id={productDetails.id}
          productDescription={productDetails.productDescription}
          productName={productDetails.productName}
          productPhoto={productDetails.productPhoto}
          productPrice={productDetails.productPrice}
        />
      </div>
      <div>{children}</div>
    </div>,

    document.getElementById("productModal") as HTMLElement
  );
};

export default ProductModal;
