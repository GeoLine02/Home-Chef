import { ReactNode } from "react";
import { createPortal } from "react-dom";
import SignInForm from "../../elements/SignInForm";
import { useSelector } from "react-redux";

type AuthModalProps = {
  children: ReactNode;
};

const AuthModal = ({ children }: AuthModalProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isAuthOpen = useSelector((state: any) => state.auth.isAuthOpen);
  return createPortal(
    <div
      className={
        isAuthOpen &&
        "max-w-md fixed  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5"
      }
    >
      <SignInForm />
      <div>{children}</div>
    </div>,

    document.getElementById("authModal") as HTMLElement
  );
};

export default AuthModal;
