import { ProductQuantity } from "../types";

export const calculateItemTotalCost = (cartState: ProductQuantity[]) => {
  return cartState
    .map((item) => item.product.productPrice * item.quantity)
    .reduce((current: number, accumulator: number) => current + accumulator, 0);
};
