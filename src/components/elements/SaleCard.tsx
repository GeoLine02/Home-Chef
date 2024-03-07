import item from "../../assets/item.jpg";
import { IoMdStar } from "react-icons/io";
import { text } from "../../helpers/functions";

const SaleCard = () => {
  return (
    <div>
      <div>
        <img className="rounded-md" src={item} alt="item" />
      </div>
      <h1 className="text-xl">Chocolate Pancake</h1>
      <div className="flex gap-2">
        <IoMdStar size={30} color="orange" />
        <IoMdStar size={30} color="orange" />
        <IoMdStar size={30} color="orange" />
        <IoMdStar size={30} color="orange" />
        <IoMdStar size={30} color="orange" />
      </div>
      <div className="text-gray-400 text-lg flex gap-4 font-medium">
        <p>0.3{text("SALE_LIST_KM")}</p>
        <span>*</span>
        <p className="text-red-800 ">{text("SALE_LIST_ITEM_FREE_DELIVERY")}</p>
      </div>
    </div>
  );
};

export default SaleCard;
