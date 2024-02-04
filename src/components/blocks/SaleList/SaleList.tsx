import Item from "../../elements/Item";

const SaleList = () => {
  return (
    <div>
      <h1 className="text-3xl my-3">Sales</h1>
      <div className="flex lg:max-w-[79vw] gap-9 items-center whitespace-nowrap overflow-x-auto lg:overflow-x-hidden">
        {<Item />}
        {<Item />}
        {<Item />}
        {<Item />}
        {<Item />}
      </div>
    </div>
  );
};

export default SaleList;
