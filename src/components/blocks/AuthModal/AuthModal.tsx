import { ReactNode } from "react";
import { createPortal } from "react-dom";
import SignInForm from "../../elements/SignInForm";

type AuthModalProps = {
  children: ReactNode;
};

const AuthModal = ({ children }: AuthModalProps) => {
  return createPortal(
    <div className="w-screen h-screen fixed top-0 left-0">
      <div className="w-screen h-screen md:max-w-md md:h-auto fixed rounded-[12px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5">
        <SignInForm />
        <div>{children}</div>
      </div>
    </div>,
    document.getElementById("authModal") as HTMLElement
  );
};

export default AuthModal;
