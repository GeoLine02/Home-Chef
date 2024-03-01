import { ProductType } from "../components/blocks/ProductList/ProductList";

export type restaurantCategoryType = {
  id: number;
  typeName?: string;
  typeNameRU?: string;
};

export type CartType = {
  product: ProductType;
  quantity: number;
};

export type ProductQuantity = {
  product: ProductType;
  quantity: number;
};
