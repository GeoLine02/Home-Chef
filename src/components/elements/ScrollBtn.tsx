import Arrow from "../../assets/arrow.svg";
type ScrollBtnProps = {
  role: "left" | "right";
};
const ScrollBtn = ({ role }: ScrollBtnProps) => {
  return (
    <button className="flex w-6 h-6 rounded-full bg-white p-3 box-content items-center justify-center border-2 border-black shadow-gray-400 shadow-md ">
      <img
        className={
          role === "left" ? "rotate-90" : role === "right" ? "-rotate-90" : ""
        }
        src={Arrow}
        alt="arrow"
      />
    </button>
  );
};

export default ScrollBtn;
