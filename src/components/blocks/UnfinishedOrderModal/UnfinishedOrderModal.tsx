import { ReactNode } from "react";
import { createPortal } from "react-dom";
import UnfinishedOrder from "../../elements/UnfinishedOrder";

type UnfinishedOrderModalProps = {
  children: ReactNode;
};

const UnfinishedOrderModal = ({ children }: UnfinishedOrderModalProps) => {
  return createPortal(
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <div>
        <UnfinishedOrder />
        <div>{children}</div>
      </div>
    </div>,
    document.getElementById("unfinishedOrderModal") as HTMLElement
  );
};

export default UnfinishedOrderModal;
