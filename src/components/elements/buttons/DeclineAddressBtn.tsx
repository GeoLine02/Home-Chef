import React from "react";

type DeclineAddressBtnProps = {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const DeclineAddressBtn = ({ setIsVisible }: DeclineAddressBtnProps) => {
  return (
    <button
      onClick={() => setIsVisible(false)}
      className="w-[85px] h-10 bg-transparent border border-[#85736C] text-[#964900] text-[14px] font-medium py-[10px] px-6 rounded-[100px]"
    >
      NO
    </button>
  );
};

export default DeclineAddressBtn;
