import OrderSummeryList from "../components/blocks/OrderSummery/OrderSummeryList"
import OrderSummery from "../components/elements/OrderSummery"
import { IOrder } from "../types/orders"
import Orders from "./Orders"
interface SummerPageProps {
    orders: IOrder[]
}
const SummeryPage = ({orders}:any) =>{
    return(
        <OrderSummery orders={orders} />
    )
}
export default SummeryPage;