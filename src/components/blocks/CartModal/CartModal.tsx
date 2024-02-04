import { ReactNode } from "react";
import { createPortal } from "react-dom";
import Cart from "../Cart/Cart";

type CartModalProps = {
  children: ReactNode;
};

const CartModal = ({ children }: CartModalProps) => {
  return createPortal(
    <>
      <Cart />
      {children}
    </>,
    document.getElementById("cartModal") as HTMLElement
  );
};

export default CartModal;
