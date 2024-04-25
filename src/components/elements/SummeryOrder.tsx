import  { useEffect } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router-dom';
import routes from '../../constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem, clearCart, saveOrdersListAction } from '../../store/actions/actionCreator';
import { RootState } from '../../store/state/rootReducers';
import { IOrder } from '../../types/orders';
import SummeryCard, { SummeryCardProps } from './SummeryCard';
import { http } from '../../helpers/http';


const SummaryOrder = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const orderList = useSelector((state: RootState) => state.auth.userOrderList);
    const params = useParams();
    const order = orderList.find((order:IOrder)=> String(order.id) === params?.id )
    const userID = useSelector((state: RootState) => state.auth.authUserVkInfo);
    useEffect(()=>{
        if(orderList.length === 0 ){
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
                  )
                  if (resp.ok) {
                    const data = await resp.json();
                    dispatch(saveOrdersListAction(data));
                  }
                } catch (error) {
                  console.log(error);
               }
                
        }
        fetchGetAllOrders()
    }   
    },[userID?.id,dispatch,orderList.length])


    const dispatchElements= ()=> {
        dispatch(clearCart());
        dispatch(addCartItem(order.products));
        navigate(routes.checkOut);
        console.log("Dispatched actions and navigated to checkout.");
    }
  
    return (
        <div>
            <div className="flex gap-4 items-center border border-slate-300 hover:border-indigo-300">
                <FaArrowLeftLong size={20} onClick={() => navigate(-1)} />
                <span className ="text-lg font-bold">Order List</span>
            </div>
            <h1 className="font-bold mt-3 mb-3">Order Summary</h1>
            {order?.products.map((item: SummeryCardProps) => (
                <SummeryCard 
                    key={item.id}
                    productName={item.productName}
                    productPrice={item.productPrice}
                    createdAt={item.createdAt}
                    restaurantID={item.restaurantID}
                    id={item.id}
                />
            ))}
            <button onClick={()=>dispatchElements()} className="font-bold mt-3 mb-3 flex items-center gap-2 max-w-160 border border-solid border-[#964900] rounded-full py-3 px-4 my-3">Repeat order</button>
        </div>
    );
}

export default SummaryOrder;
