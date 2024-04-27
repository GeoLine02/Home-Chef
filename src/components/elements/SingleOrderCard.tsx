// import { ProductType } from '../blocks/ProductList/ProductList'
import routes from '../../constants/routes';
import { useNavigate, useParams, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/state/rootReducers';
import { useEffect } from 'react';
import { http } from '../../helpers/http';
import {  addCartItem, clearCart, saveOrdersListAction } from '../../store/actions/actionCreator';
import { IOrder } from '../../types/orders';


export interface SummeryCardProps {
    productName:string;
    productPrice:number;
    createdAt: string;
    restaurantID:number;
    id:number;
    orderSequence:number;
    status:string;
    order:object
}



export default function SingleOrderCard({productName,productPrice,restaurantID,createdAt,orderSequence,status,id,order}: SummeryCardProps) {
    const date = new Date(createdAt)
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const time = date.toTimeString().slice(0, 8);
    const navigate = useNavigate();
    const orderId = id;
    const dispatch = useDispatch();
    const orderList = useSelector((state: RootState) => state.auth.userOrderList);
    // const params = useParams();
    // const order = orderList.find((order:IOrder)=> String(order.id) === params?.id )
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

    console.log(order,"order")
    const dispatchElements= ()=> {
        dispatch(clearCart());
        dispatch(addCartItem(order.products));
        navigate(routes.checkOut);
        console.log("Dispatched actions and navigated to checkout.");
        console.log(order.products,"ordprodu t")
    }
  



    // const handleSummaryClick = () => {
    //     navigate(`${routes.summeryorder}/${orderId}`, {
    //         state: {
    //             productName,
    //             productPrice,
    //             restaurantID,
    //             createdAt,
    //             orderSequence,
    //             status,
    //             order,
    //         }
    //     });
        
    // };
  return (
    <div className='items-center min-w-96 min-h-44 border-4 border-indigo-600  border-inherit m-2'>
            <h2 className='font-medium'>Order:{orderSequence}</h2>
            <p className='text-orange-400'>{status} </p>

        <div className='min-w-80 min-h-44 border border-slate-300 hover:border-indigo-300'>
            <p className="text-lg font-bold">Product Name:<span className="text-amber-600 text-base">{productName}</span></p>
            <p className="text-lg font-bold">Product Price: <span className="text-amber-600  text-base">{productPrice}</span></p>
            <p className="text-lg font-bold">Restaurant ID: <span className="text-amber-600  text-base">{restaurantID}</span></p>
            <p className="text-lg font-bold">Order Date:<span className="text-amber-600  text-base">{year}-{month} {time}</span> </p>
        </div>
        <button onClick={()=>dispatchElements()} className="font-bold mt-3 mb-3 flex items-center gap-2 max-w-160 border border-solid border-[#964900] rounded-full py-3 px-4 my-3">Repeat order</button>
    </div>
    
  )
}
