import { ProductQuantity } from "..";
import { RestaurantType } from "../restaurant";

export interface IVKUserProfileData {
  email: string;
  favoriteRestaurants: RestaurantType[];
  firstName: string;
  lastName: string;
  role: string;
  isAccountActive: boolean;
}

export interface IGoogleProfileData {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: null | string;
  role: string;
  isAccountActive: boolean;
  iat: number;
}

export interface IUserById {
  address: string[];
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: null | string;
  id: number;
  isAccountActive: boolean;
  role: string;
}

export interface IOrderList {
  status: "completed" | "canceled" | "preparing";
  productInfo: ProductQuantity;
  nameRestaurant: string;
  date: number;
}
export type AdressState = {
  address: { city: string; neighbourhood: string; suburb: string };
  display_name: string;
  lat: number;
  lon: number;
} | null;

export type AddressListType = {
  city: string;
  street: string;
  neighborhood: string;
  id: number;
  lat: string;
  lng: string;
  userID: number;
};
