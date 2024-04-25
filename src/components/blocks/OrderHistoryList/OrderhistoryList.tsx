import { IOrder } from '../../../types/orders'

import SingleOrderCard from '../../elements/SingleOrderCard';


interface OrderHistoryListProps {
    orders: IOrder[];
}
export default function OrderhistoryList({orders}:OrderHistoryListProps) {
  return (
    <div className="flex gap-4 overflow-x-auto max-w-80s" >
         {orders?.map((order: IOrder) => {
            return<SingleOrderCard
              key={order.id}
              productName={order?.products[0]?.productName}
              productPhoto={order?.products[0]?.productPhoto}
              productComposition={order?.products[0]?.productComposition}
              productDescription={order?.products[0]?.productDescription}
              productPrice={+order?.totalAmount}
              id={order.id}
              restaurantID={order?.products[0]?.restaurantID}
              createdAt = {orders[0]?.createdAt}
              orderSequence={orders.length}
              status={orders[0].status}
              order={order}
           /> 
          
          })}
          
        
    </div>
    
  )
}
