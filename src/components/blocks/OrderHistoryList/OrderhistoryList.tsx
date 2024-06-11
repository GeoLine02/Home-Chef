import { IOrder } from '../../../types/orders'
import { v4 as uuidv4 } from 'uuid';
import SingleOrderCard from '../../elements/SingleOrderCard';
import { ProductType } from '../ProductList/ProductList';


interface OrderHistoryListProps {
    orders: IOrder[];
}
export default function OrderhistoryList({orders}:OrderHistoryListProps) {
  
  return (
   <>
        {orders.map((order:IOrder)=> {
          const {products} = order
          
        return products.map((product:ProductType)=>{
             return<SingleOrderCard
                key={uuidv4()}
                amount= {order.amount}
                createdAt= {order.createdAt}
                deletedAt= {order.deletedAt}
                deliveryAmount= {order.deliveryAmount}
                id= {order.id}
                products= {order.products}
                status={order.status}
                totalAmount= {order.totalAmount}
                updatedAt= {order.updatedAt}
                userAddress= {order.userAddress}
                userAddressID={order.userAddressID}
                userID= {order.userID}
                userPaymentMethodID={order.userPaymentMethodID}
                order={order}
                productName= {product.productName}
                productPrice = {product.productPrice}
                restaurantID={product.restaurantID}
                orderSequence={product.orderSequence}
              />    
            })
        })}
    </>
    
  )
}
