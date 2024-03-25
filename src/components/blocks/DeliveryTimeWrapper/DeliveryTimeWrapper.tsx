import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosArrowForward, IoMdTime } from "react-icons/io";

const DeliveryTimeWrapper = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center rounded-xl border border-gray-400 px-5 py-3">
        <div className="flex justify-start items-center gap-3">
          <IoMdTime size={25} />
          <div>
            <p className="font-medium text-lg">Today</p>
            <p className="font-normal text-lg opacity-70">from 99 - to 99</p>
          </div>
        </div>
        <IoIosArrowForward size={25} />
      </div>
      <div className="flex justify-between items-center rounded-xl border border-gray-400 px-5 py-3">
        <div className="flex justify-start items-center gap-3">
          <FaRegCalendarAlt size={25} />
          <p className="font-medium text-lg">Thu, Dec 27, 10.00AM-10.25 AM</p>
        </div>
        <IoIosArrowForward size={25} />
      </div>
    </div>
  );
};

export default DeliveryTimeWrapper;
