import { http } from "../../helpers/http";

export const getTotalAmount = (cartData: any) => {
  const apiCallOptions = {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(cartData),
  };
  return http("/calculation", apiCallOptions);
};
