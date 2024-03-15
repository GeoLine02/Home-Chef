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

export interface RestaurantResultType {
  address: string;
  city: string;
  id: number;
  name: string;
  ownerId: number;
  phoneNumber: string;
}

export interface IFavoriteRestaurants extends RestaurantResultType {
  restaurantID: number;
  createdAt: string;
  updatedAt: string;
  userID: number;
}

export interface addedFavoriteRestaurantStatusType {
  message: string;
  status: string;
}
