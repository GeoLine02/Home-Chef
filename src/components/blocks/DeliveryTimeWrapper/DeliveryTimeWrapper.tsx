import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosArrowForward, IoMdTime } from "react-icons/io";


const DeliveryTimeWrapper = () => {
const date = new Date()
const month = String(date.getMonth() + 1).padStart(2, "0");
const time = date.toTimeString().slice(0, 8);
const optionsDay: Intl.DateTimeFormatOptions = { weekday: 'long' };
const dayName = date.toLocaleDateString('en-US', optionsDay);






  return (
    <div className="flex flex-col gap-6">
      
      <div className="flex justify-between items-center rounded-xl border border-gray-400 px-5 py-3">
        <div className="flex justify-start items-center gap-3">
          <IoMdTime size={25} />
          <div>
            <p className="font-medium text-lg">{dayName}</p>
            <p className="font-normal text-lg opacity-70">from:{time}- to:{time}</p>
          </div>
        </div>
        <IoIosArrowForward size={25} />
      </div>
      <div className="flex justify-between items-center rounded-xl border border-gray-400 px-5 py-3">
        <div className="flex justify-start items-center gap-3">
          <FaRegCalendarAlt size={25} />
          <p className="font-medium text-lg">{dayName}, {month} , {time} to {time}</p>
        </div>
        <IoIosArrowForward size={25} />
      </div> 
      <div>
    </div>
    </div>
);
};

export default DeliveryTimeWrapper;
