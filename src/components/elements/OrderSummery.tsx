import React from 'react'
import { ProductType } from '../blocks/ProductList/ProductList'
import { IOrder } from '../../types/orders'
import Orders from '../../pages/Orders'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const  OrderSummery = ({productName,productPrice,productDescription}:any) => {
    const navigate = useNavigate();
    
  return (
    <div>
        <h1>{productName}</h1>
        <h2>{productPrice}</h2>
        <p>{productDescription}</p>
        <h3>total Price</h3>
        <button>Payment</button> 
    </div>
    
  )
}
export default OrderSummery
