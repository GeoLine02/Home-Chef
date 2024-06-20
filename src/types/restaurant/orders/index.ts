import { ProductType } from "../../../components/blocks/ProductList/ProductList"

export interface IOrderList {
    amount: string
    createdAt: string
    deletedAt: null
    deliveryAmount: string
    id: number
    products: ProductType[]
    status: string
    totalAmount: string
    updatedAt: string
    // userAddress
    // : 
    userAddressID: number
    userID: number
    userPaymentMethodID: null
}