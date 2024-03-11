import { http } from "../helpers/http";

const FavoriteRestaurants = () => {
  const fetchFavoriteRestaurants = async () => {
    try {
      const apiCallOptions = {
        headers: {
          "content-type": "application/json",
        },
        method: "GET",
      };
      const accessToken = localStorage.getItem("");
      const res = await http(`/profile/favorites/${userId}`, apiCallOptions);
      if (res.ok) {
        const data = res.json();
        console.log(data);
      }
    } catch (error) {
      console.log("Favorite restaurants fetching error!", error);
    }
  };

  return <div>FavoriteRestaurants</div>;
};

export default FavoriteRestaurants;
