import item from "../../assets/item.jpg";
import { IoMdStar } from "react-icons/io";

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
        <p>0.3km</p>
        <span>*</span>
        <p className="text-red-800 ">Free Delivery</p>
      </div>
    </div>
  );
};

export default SaleCard;
