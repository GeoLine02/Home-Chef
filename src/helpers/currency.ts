import { ProductQuantity } from "../types";
import { getTotalAmount } from "../api/payments";

export const calculateItemTotalCost = (cartState: ProductQuantity[]) => {
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
        id: 74,
        quantity: 1,
      },
    ],
  };

  return getTotalAmount(orderCalculateData)
    .then((res: unknown) => {
      if (
        res &&
        typeof res === "object" &&
        "json" in res &&
        typeof (res as Response).json === "function"
      ) {
        return (res as Response).json();
      } else {
        throw new Error("Response does not have a json method");
      }
    })
    .then((res: unknown) => res);
};
