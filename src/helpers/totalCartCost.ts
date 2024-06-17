import { ProductQuantity } from "../types";
import { getTotalAmount } from "../api/index";
export const calculateItemTotalCost = (cartState: ProductQuantity[]) => {
  console.log("cartState", cartState);
  const orderCalculateData = {
    pickupLocation: {
      latitude: 55.744089,
      longitude: 37.546276,
    },
    deliveryLocation: {
      latitude: 55.740674,
      longitude: 37.625019,
    },
    orderKG: 25,
    orderProducts: [
      {
        id: 1,
        quantity: 2,
      },
      {
        id: 4,
        quantity: 1,
      },
    ],
  };
  return getTotalAmount(orderCalculateData)
    .then((res) => res.json())
    .then((res) => res);
};
