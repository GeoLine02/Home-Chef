import { http } from "../helpers/http";

// ***************************
// User by ID
// ***************************
export const getUsersById = (userId: number) => {
  const apiCallOptions = {
    headers: {
      "content-type": "application/json",
    },
    method: "GET",
  };
  return http(`/user?${userId}`, apiCallOptions)
    .then((jsonUser) => jsonUser.json())
    .then((user) => {
      if (user) {
        return user;
      }
      return null;
    })
    .catch((error) => {
      console.log("failed to fetch user data", error);
    });
};
