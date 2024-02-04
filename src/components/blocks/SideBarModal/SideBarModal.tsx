import { ReactNode } from "react";
import { createPortal } from "react-dom";
import SideBar from "../../elements/SideBar";

type SideBarModalProps = {
  children: ReactNode;
};

const SideBarModal = ({ children }: SideBarModalProps) => {
  return createPortal(
    <>
      <SideBar />
      <div>{children}</div>
    </>,
    document.getElementById("sideBarModal") as HTMLElement
  );
};

export default SideBarModal;
