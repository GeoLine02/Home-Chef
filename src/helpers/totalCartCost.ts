import { ProductQuantity } from "../types";
import { getTotalAmount } from "../api/index";
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
    .then((res) => res.json())
    .then((res) => res);
};
