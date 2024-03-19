import { text } from "../../../helpers/functions";
import SaleCard from "../../elements/SaleCard";
const SaleList = () => {
  return (
    <div>
      <h1 className="text-3xl my-3">{text("SALE_LIST_HEADING")}</h1>
      <div className="flex  gap-9 items-center whitespace-nowrap overflow-x-auto lg:overflow-x-hidden">
        {<SaleCard />}
        {<SaleCard />}
        {<SaleCard />}
        {<SaleCard />}
        {<SaleCard />}
      </div>
    </div>
  );
};

export default SaleList;
