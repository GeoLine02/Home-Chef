import { ReactNode } from "react";
import { createPortal } from "react-dom";
import ProfileDropDown from "../../elements/ProfileDropDown";

type ProfileModalProps = {
  children: ReactNode;
};

const ProfileModal = ({ children }: ProfileModalProps) => {
  return createPortal(
    <div className="w-screen h-screen">
      <ProfileDropDown />
      <div>{children}</div>
    </div>,
    document.getElementById("profileModal") as HTMLElement
  );
};

export default ProfileModal;
