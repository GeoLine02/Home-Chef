import { useState } from "react";

const ToggleBtn = () => {
  const [toggleBtn, setToggleBtn] = useState<boolean>(false);

  const handleToggle = () => {
    setToggleBtn(!toggleBtn);
  };
  return (
    <div
      className={
        toggleBtn
          ? "min-w-11 h-6 bg-orange-950 rounded-full relative"
          : "min-w-11 h-6 bg-gray-300 rounded-full relative"
      }
    >
      <div
        onClick={handleToggle}
        className={
          !toggleBtn
            ? "bg-gray-600 min-w-4 min-h-4 rounded-full absolute z-20 top-1 left-1 cursor-pointer ease-in-out duration-200"
            : "bg-white min-w-4 min-h-4 rounded-full absolute z-20 top-1 left-6 cursor-pointer ease-in-out duration-200"
        }
      ></div>
    </div>
  );
};

export default ToggleBtn;
