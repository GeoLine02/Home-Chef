import { useState } from "react";
import { GrLanguage } from "react-icons/gr";
import LngChangerModal from "../blocks/LngChangerModal/LngChangerModal";
import { text } from "../../helpers/functions";

const LanguageBtn = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const ModalToggler = () => {
    setModalIsOpen((prev) => !prev);
  };

  return (
    <div
      className="flex flex-col items-center justify-center relative px-3 cursor-pointer select-none"
      onClick={ModalToggler}
    >
      <GrLanguage size={20} id="lng_modal" />

      <p>{text("HEADER_LANG_ID")}</p>
      {modalIsOpen && <LngChangerModal lngToggler={ModalToggler} />}
    </div>
  );
};

export default LanguageBtn;
