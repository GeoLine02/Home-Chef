import React from 'react'
import { IOrder } from '../../../types/orders'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import OrderSummery from '../../elements/OrderSummery';

interface OrderSummeryListProps {
  orders: IOrder[]
}
 const OrderSummeryList = ({orders}: OrderSummeryListProps) => {
  const navigate = useNavigate();
  console.log("orders",orders,"isevorders")
  return (
    
    <div>
      <div className="flex gap-4 items-center">
            <FaArrowLeftLong  size={20} onClick={()=> navigate(-1)}/>
            <h1>Order summery</h1>
        </div>
        
       {orders?.map((order: IOrder,index) => (
         <OrderSummery
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

         />
       ))}
       
    </div>
  
  )
}
export default OrderSummeryList
//aq unda iyos mapi, sadac gadavuvlit ordersummers da kliki unda moxdres singleordercardshi