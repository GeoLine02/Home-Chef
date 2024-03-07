import { useEffect, useState } from "react";
import { GrLanguage } from "react-icons/gr";
import LngChangerModal from "../blocks/LngChangerModal/LngChangerModal";
import { text } from "../../helpers/functions";

const LanguageBtn = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const ModalToggler = () => {
    setModalIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const modalCloseHandler = (e: any) => {
      if (modalIsOpen && e.target.id !== "lng_modal") {
        setModalIsOpen(false);
      }
    };
    window.addEventListener("click", modalCloseHandler);
    return () => window.removeEventListener("click", modalCloseHandler);
  }, [modalIsOpen]);

  return (
    <div
      id="lng_modal"
      className="flex flex-col items-center justify-center relative px-3 cursor-pointer"
      onClick={ModalToggler}
    >
      <GrLanguage size={20} id="lng_modal" />

      <p id="lng_modal">{text("HEADER_LANG_ID")}</p>
      {modalIsOpen && <LngChangerModal onClick={ModalToggler} />}
    </div>
  );
};

export default LanguageBtn;
