import Arrow from "../../assets/arrow.svg";
type ScrollBtnProps = {
  role?: "left" | "right";
  onClick: () => void;
};
const ScrollBtn = ({ role, onClick }: ScrollBtnProps) => {
  return (
    <div
      className={`z-10 hidden lg:block absolute top-4 right-0${
        role === "left" ? "right-0" : ""
      }`}
    >
      <button
        className="cursor-pointer flex w-6 h-6 rounded-full bg-white p-3 box-content items-center justify-center border-2 border-black shadow-gray-400 shadow-md "
        onClick={onClick}
      >
        <img
          className={
            role === "left" ? "rotate-90" : role === "right" ? "-rotate-90" : ""
          }
          src={Arrow}
          alt="arrow"
        />
      </button>
    </div>
  );
};

export default ScrollBtn;
