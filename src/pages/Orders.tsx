import  { useEffect } from 'react'
import RecentOrderList from '../components/blocks/RecentOrderList/RecentOrderlist'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/state/rootReducers';
import { http } from '../helpers/http';
import OrderhistoryList from '../components/blocks/OrderHistoryList/OrderhistoryList';
import { saveOrdersListAction } from '../store/actions/actionCreator';


export default function Orders() {
    const userID = useSelector((state: RootState) => state.auth.authUserVkInfo);
    const orderList = useSelector((state: RootState) => state.auth.userOrderList);
    const dispatch = useDispatch();
    
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
          if (resp.ok) {
            const data = await resp.json();
            dispatch(saveOrdersListAction(data));
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
        <RecentOrderList orders={orderList}/>
        <OrderhistoryList orders={orderList}/>
        
    </div>
    
  )
}
