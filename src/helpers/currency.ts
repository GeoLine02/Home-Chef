import { ProductQuantity } from "../types";
import { getTotalAmount } from "../api/payments";

export const calculateItemTotalCost = (cartState: ProductQuantity[]) => {
  const orderCalculateData = {
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
    deliveryOptions: {
      matter: "meals",
      points: [
        {
          address: "Москва, ул. Покровка, 11",
          contact_person: { phone: "79030000001" },
        },
        {
          address: "Москва, ул. Солянка, 4",
          contact_person: { phone: "79030000001" },
        },
      ],
    },
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
