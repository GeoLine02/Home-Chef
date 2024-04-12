import React, { useState } from 'react'
import { ProductType } from '../blocks/ProductList/ProductList'
import { FaAngleRight } from "react-icons/fa6"
import routes from '../../constants/routes';
import { useNavigate, useParams } from 'react-router-dom';


export default function SingleOrderCard({productName,productPrice,id,restaurantID,createdAt,orderSequence,status}: ProductType) {
    const date = new Date(createdAt)
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const time = date.toTimeString().slice(0, 8);
    const navigate = useNavigate();
    
 
  return (
    <div className='flex gap-4 items-center min-w-96 min-h-44'>
        <div>
            <h2>{orderSequence}</h2>
        </div>
        <div>
            <h1>{productName}</h1>
            <p>{year} x{month} {time}</p>
        </div>
        <div className="flex gap-4 items-center" onClick={()=> navigate(`${routes.orderList}/${id}` )}>  
            <p className='text-orange-400'>{status} </p>//aq unda daaklikos da gadavides axal gverdze, summeryze
            <FaAngleRight />
        </div>
        
    </div>
  )
}
