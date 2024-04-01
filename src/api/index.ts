import { toast } from "react-toastify";
import { http } from "../helpers/http";
import { text } from "../helpers/functions";

// ***************************
// User by ID
// ***************************
export const getUsersById = (userId: number) => {
  const userIDError= () => {
    toast.error(text("ERROR_USERID"));
  }
  

  const apiCallOptions = {
    headers: {
      "content-type": "application/json",
    },
    method: "GET",
  };
  return http(`/user/${userId}`, apiCallOptions)
  
    .then((jsonUser) => jsonUser.json())
    .then((user) => {
      
      if (user) {
        return user;
      }
      return null;
      
    })
    .catch((error) => {
      userIDError()
    });
};

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
  const favRestaurantDataError = () =>{
    toast.error(text("ERROR_FAVRESTAURANT_DATA_FETCHING"))
  }
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
      favRestaurantDataError()
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
  const favRestaurantError= () => {
    toast.error(text("ERROR_FAVRESTAURANT_ID"));
  }
  return http(`/profile/favorites/${userId}`, apiCallOptions)
    .then((jsonFavoriteRestaurants) => jsonFavoriteRestaurants.json())
    .then((favoriteRestaurantsList) => {
      if (favoriteRestaurantsList) {
        return favoriteRestaurantsList;
      }
    })
    .catch((error) => {
      favRestaurantError()
    });
};

// *******************************
// Remove favorite restaurant
// *******************************

export const removeFavoriteRestaurant = (
  userId: number,
  restaurantId: number
) => {
  const removeFavRestaurant= () => {
    toast.error(text("ERROR_DELETE_FAVOURITE_RESTAURANT"));
  }
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
      removeFavRestaurant()
    });
};
