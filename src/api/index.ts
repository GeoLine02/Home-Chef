import { http } from "../helpers/http";

// ***************************
// User by ID
// ***************************
// export const getUsersById = (userId: number) => {
//   const apiCallOptions = {
//     headers: {
//       "content-type": "application/json",
//     },
//     method: "GET",
//   };
//   return http(`/user/${userId}`, apiCallOptions)
//     .then((jsonUser) => jsonUser.json())
//     .then((user) => {
//       if (user) {
//         return user;
//       }
//       return null;
//     })
//     .catch((error) => {
//       console.log("failed to fetch user data", error);
//     });
// };

// ***************************
// Add favorite restaurants
// ***************************

export const addFavoriteRestaurants = (
  userId: number,
  restaurantId: number
) => {
  const apiCallOptions = {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
  };
  return http(`/profile/favorites/${userId}/${restaurantId}`, apiCallOptions)
    .then((jsonFavoriteRestaurants) => {
      if (jsonFavoriteRestaurants.statusText === "Created") {
        return jsonFavoriteRestaurants.json();
      }
    })
    .then((favoriteRestaurants) => {
      if (favoriteRestaurants) {
        return favoriteRestaurants;
      }
    })
    .catch((error) => {
      console.log("Favorite restaurants data fetching error", error);
    });
};

// *****************************
// Get favorite restaurants
// *****************************

export const getFavoriteRestaurants = (userId: number) => {
  const apiCallOptions = {
    headers: {
      "content-type": "application/json",
    },
    method: "GET",
  };
  return http(`/profile/favorites/${userId}`, apiCallOptions)
    .then((jsonFavoriteRestaurants) => jsonFavoriteRestaurants.json())
    .then((favoriteRestaurantsList) => {
      if (favoriteRestaurantsList) {
        return favoriteRestaurantsList;
      }
    })
    .catch((error) => {
      console.log("favorite restaurants fetching error", error);
    });
};

// *******************************
// Remove favorite restaurant
// *******************************

export const removeFavoriteRestaurant = (
  userId: number,
  restaurantId: number
) => {
  const apiCallOptions = {
    headers: {
      "content-type": "application/json",
    },
    method: "DELETE",
  };
  return http(
    `/profile/favorites/remove/${userId}/${restaurantId}`,
    apiCallOptions
  )
    .then((jsonRemovedRestaurant) => jsonRemovedRestaurant.json())
    .then((removedRestaurant) => {
      return removedRestaurant;
    })
    .catch((error) => {
      console.log("remove favorite restaurants error!", error);
    });
};

export const getTotalAmount = (cartData: any) => {
  console.log("cart", cartData);
  const apiCallOptions = {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(cartData),
  };
  return http("/calculation", apiCallOptions);
};
