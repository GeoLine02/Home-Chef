import { ProductType } from "../../components/blocks/ProductList/ProductList";
import { AddressListType } from "../user";

export interface IOrder {
  amount: string;
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
  length: number;
  order: object;
  productName: string;
  productPrice: number;
  restaurantID: number;
  orderSequence: number;
}
