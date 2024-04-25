import { ProductType } from '../blocks/ProductList/ProductList'
import routes from '../../constants/routes';
import { useNavigate } from 'react-router-dom';



export default function SingleOrderCard({productName,productPrice,id,restaurantID,createdAt,orderSequence,status,order}: ProductType) {
    const date = new Date(createdAt)
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const time = date.toTimeString().slice(0, 8);
    const navigate = useNavigate();
    const orderId = id;
  
    const handleSummaryClick = () => {
        navigate(`${routes.summeryorder}/${orderId}`, {
            state: {
                productName,
                productPrice,
                restaurantID,
                createdAt,
                orderSequence,
                status,
                order,
            }
        });
    };
  return (
    <div className='flex gap-4 items-center min-w-96 min-h-44 border-4 border-indigo-600  border-inherit m-2'>
        <div>
            <h2 className='font-medium'>{orderSequence}</h2>
        </div>
        <div>
            <h1 className='font-medium'>{productName}</h1>
            <p className='font-medium'>{year} x{month} {time}</p>
        </div>
        <div className="flex gap-4 items-center" onClick={handleSummaryClick}>
            <p className='text-orange-400'>{status} </p>
        </div>
        
    </div>
    
  )
}
