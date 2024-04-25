import { IOrder } from "../../../types/orders";
import { FaArrowLeftLong } from "react-icons/fa6"
import { useNavigate } from "react-router-dom";
import RecentOrder from "../../elements/RecentOrder";

interface RecentOrderListProps {
  orders: IOrder[]
}
const RecentOrderList = ({orders}: RecentOrderListProps) => {
  const navigate = useNavigate();
  return (
    <>
    <div className="flex gap-4 items-center lg:hidden">
    <FaArrowLeftLong  size={20} onClick={()=> navigate(-1)}/>
    <span>My orders</span>
    </div>
     <h1 className="text-2xl my-3">Recent orders</h1>
      <div className="flex gap-4 overflow-x-auto max-w-80s">
       
        {orders?.map((order: IOrder,index) => (
          <RecentOrder
            key={order.id}
            productName={order?.products[0]?.productName}
            productPhoto={order?.products[0]?.productPhoto}
            productComposition={order?.products[0]?.productComposition}
            productDescription={order?.products[0]?.productDescription}
            productPrice={+order?.totalAmount}
            id={order?.products[0]?.id}
            restaurantID={order?.products[0]?.restaurantID}
            createdAt = {orders[0]?.createdAt}
            orderSequence={index}
            status={orders[0].status}
            order={order}
          />
        ))}
        
      </div>
      
    </>
  );
};
export default RecentOrderList;
