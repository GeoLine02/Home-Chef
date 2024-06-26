// import { ProductType } from '../blocks/ProductList/ProductList'
import routes from '../../constants/routes';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/state/rootReducers';
import { useEffect } from 'react';
import { http } from '../../helpers/http';
import {  addCartItem, clearCart, saveOrdersListAction } from '../../store/actions/actionCreator';
import { IOrder } from '../../types/orders';
import { AddressListType } from '../../types/user';
import { ProductType } from '../blocks/ProductList/ProductList';


export interface SummeryCardProps {
  amount: number;
  createdAt: string;
  deletedAt: null;
  deliveryAmount: string;
  id: number;
  products: ProductType[];
  status: string;
  totalAmount: string;
  updatedAt: string;
  userAddress: AddressListType;
  userAddressID: number;
  userID: number;
  userPaymentMethodID: null;
  order: IOrder;
  productName: string;
  productPrice: number;
  restaurantID: number;
  orderSequence: number;
}



export default function SingleOrderCard({productName,productPrice,restaurantID,createdAt,orderSequence,status,order}: SummeryCardProps) {
    const date = new Date(createdAt)
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const time = date.toTimeString().slice(0, 8);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const orderList = useSelector((state: RootState) => state.auth.userOrderList);
    const userID = useSelector((state: RootState) => state.auth.authUserVkInfo);
    
    console.log(order,"order")
    useEffect(()=>{
        if(!orderList.length ){
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
        console.log(order.products,"ordproductt")
    }
  



    
  return (
<div className='grid grid-cols-3  gap-x-80'>
   
      <div className='pl-6'>
          <h2 className='font-medium ' >Order:{orderSequence}</h2>
            <p className='text-orange-400 '>{status} </p>
      </div>
          
        <div className=' min-w-60   min-h-44 border border-slate-300 hover:border-indigo-300 '>
            <p className="text-lg font-bold ">Product Name:<span className="text-amber-600 text-base">{productName}</span></p>
            <p className="text-lg font-bold ">Product Price: <span className="text-amber-600  text-base">{productPrice}</span></p>
            <p className="text-lg font-bold  ">Restaurant ID: <span className="text-amber-600  text-base">{restaurantID}</span></p>
            <p className="text-lg font-bold ">Order Date:<span className="text-amber-600  text-base">{year}-{month} {time}</span> </p>
        </div>
        <button onClick={()=>dispatchElements()} className="font-bold mt-3 mb-3 w-36 h-20 flex items-center  justify-center gap-2   border border-solid border-[#964900] rounded-full py-3 px-4 my-3">Repeat order</button>
    </div>

  )
}
