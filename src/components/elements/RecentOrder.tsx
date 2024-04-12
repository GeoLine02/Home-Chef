import { useNavigate } from "react-router-dom";
import { ProductType } from "../blocks/ProductList/ProductList";
import routes from "../../constants/routes";

const RecentOrder = ({productPhoto, productName, productPrice,id,restaurantID,createdAt,orderSequence,status}: ProductType) => {
    const navigate = useNavigate()
    // console.log(createdAt,"creat",orderSequence,status)
    return(
      <div onClick={()=> navigate(`${routes.home}${restaurantID}`)}>
        <img src={productPhoto} className="max-w-72 rounded-lg cursor-pointer"/>
        <h1>{productName}</h1>
        <p>{productPrice}</p>
        
      </div>
    )
}
export default RecentOrder;