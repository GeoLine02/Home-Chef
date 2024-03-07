import { text } from "../helpers/functions";

const favouriteRestorantsData = [
  {
    address: "6074 Tomasa Meadows",
    city: "Washington",
    id: 1,
    name: "Dach, Farrell and Lemke",
    ownerId: 1,
    phoneNumber: "(624) 238-3818 x950",
  },
  {
    address: "93979 Bluebell Close",
    city: "Herminaborough",
    id: 2,
    name: "Wolf - Fisher",
    ownerId: 2,
    phoneNumber: "1-286-404-8443 x79097",
  },
];

const FavouriteRestaurants = () => {
  return (
    <div>
      <div className="hidden bg-[#EEEEEE] px-32 py-6 lg:flex justify-start">
        <h1 className="font-bold text-[32px]">
          {text("COMMON_FAVOURITE_RESTS")}
        </h1>
      </div>
      {favouriteRestorantsData.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};

export default FavouriteRestaurants;
