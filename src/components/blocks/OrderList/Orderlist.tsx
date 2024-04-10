import { useEffect, useState } from "react";
import { http } from "../../../helpers/http";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/state/rootReducers";
import ProductCard from "../../elements/ProductCard";
import { ProductType } from "../ProductList/ProductList";


const OrderList = () => {
    const userID = useSelector((state:RootState)=> state.auth.authUserVkInfo);
    const restaurantByID = useSelector((state:RootState) => state.restaurants?.restaurantById)
    const product = restaurantByID.products;
    const [orders,setOrders] = useState([]);
    useEffect(() => {
        const fetchGetAllOrders = async () => {
            const apiCallOptions = {
                headers: {
                "content-type": "application/json",
                },
                method: "GET",
            };
        try{
            const resp = await http(`/orders?userID=${userID?.id}&offset=1`, apiCallOptions)
            // const url = "http://localhost:4000/orders?userID=5&offset=1";
            if(resp.ok){
                const data = await resp.json();
                setOrders(data)
                console.log(data, "data")
            }
        } catch (error){
            console.log(error)
        }
        
    } 
    
    if (userID) { // Check if userID is truthy before making the API call
        fetchGetAllOrders();
    }
      }, [userID]); 
    //   http://localhost:4000/orders?userID=${userID}&offset=${offset}, usestate, redux, 
    return(
        <>
        <div>
            {orders?.products?.map((product : ProductType)=>
            <ProductCard productName= {product.productName} productPhoto={product.productPhoto} productComposition={product.productComposition} productDescription={product.productDescription} productPrice={product.productPrice} id={product.id} restaurantID={product.restaurantID}/>
            )}
           <h1>Recent order</h1> 
           <img></img>

        </div>
        
        </>
    )
}
export default OrderList;