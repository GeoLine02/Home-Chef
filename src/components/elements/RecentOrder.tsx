import { useNavigate } from "react-router-dom";
import { ProductType } from "../blocks/ProductList/ProductList";
import routes from "../../constants/routes";

const RecentOrder = ({productPhoto, productName, productPrice,restaurantID}: ProductType) => {
    const navigate = useNavigate()
    
    return(
      <div onClick={()=> navigate(`${routes.home}${restaurantID}`)}>
        <img src={productPhoto} className="max-w-72 rounded-lg cursor-pointer"/>
        <h1 className="font-extralight">{productName}</h1>
        <p className ="text-lg font-bold">{productPrice}</p>
        
      </div>
    )
}
export default RecentOrder;