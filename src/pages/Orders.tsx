import React, { useEffect, useState } from 'react'
import RecentOrderList from '../components/blocks/RecentOrderList/RecentOrderlist'
import { useSelector } from 'react-redux';
import { RootState } from '../store/state/rootReducers';
import { useNavigate } from 'react-router-dom';
import { IOrder } from '../types/orders';
import { http } from '../helpers/http';
import OrderSummeryList from '../components/blocks/OrderSummery/OrderSummeryList';
import OrderhistoryList from '../components/blocks/OrderHistoryList/OrderhistoryList';

export default function Orders() {
    const userID = useSelector((state: RootState) => state.auth.authUserVkInfo);
    const [orders, setOrders] = useState<IOrder[]>([]);
    
    useEffect(() => {
      const fetchGetAllOrders = async () => {
        const apiCallOptions = {
          headers: {
            "content-type": "application/json",
          },
          method: "GET",
        };
        try {
          const resp = await http(
            `/orders?userID=${userID?.id}&offset=10`,
            apiCallOptions
          );
          // const url = "http://localhost:4000/orders?userID=5&offset=1";
          if (resp.ok) {
            const data = await resp.json();
            setOrders(data);
          }
        } catch (error) {
          console.log(error);
        }
      };
  
      if (userID) {
        fetchGetAllOrders();
      }
    }, [userID]);
  return (
    <div>
        <RecentOrderList orders={orders}/>
        <OrderhistoryList orders={orders}/>
        
    </div>
    
  )
}
