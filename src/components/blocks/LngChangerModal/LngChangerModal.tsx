import { languageChanger, text } from "../../../helpers/functions";

const LngChangerModal = ({ onClick }: any) => {
  const staticStyle =
    "transition-transform duration-200 ease-in-out cursor-pointer hover:scale-110 rounded-md hover:rounded-lg w-full text-center p-2";
  const activeStyle = "bg-[#f97316] text-white";

  return (
    <div
      id="lng_modal"
      className="absolute top-[110%] min-w-[175px] z-10 bg-white flex justify-center items-center flex-col  gap-4 rounded-md"
    >
      <p
        onClick={() => {
          onClick;
          languageChanger("ru");
        }}
        className={`${staticStyle} ${
          localStorage.getItem("userLng") === "ru" && activeStyle
        }`}
      >
        {text("HEADER_LANG_RU")}
      </p>
      <p
        onClick={() => {
          onClick;
          languageChanger("en");
        }}
        className={`${staticStyle} ${
          localStorage.getItem("userLng") === "en" && activeStyle
        }`}
      >
        {text("HEADER_LANG_EN")}
      </p>
      <p
        onClick={() => {
          onClick;
          languageChanger("ka");
        }}
        className={`${staticStyle} ${
          localStorage.getItem("userLng") === "ka" && activeStyle
        }`}
      >
        {text("HEADER_LANG_GE")}
      </p>
    </div>
  );
};

export default LngChangerModal;
