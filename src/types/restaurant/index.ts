import { ProductType } from "../../components/blocks/ProductList/ProductList";

export type RestaurantType = {
  address: string;
  city: string;
  id: number;
  name: string;
  ownerId: number;
  phoneNumber: string;
  products: ProductType[];
};
