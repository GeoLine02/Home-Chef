import { http } from "../../helpers/http";
import { IUserAddress } from "../../types/location";

// *********************
// new address
// *********************

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchNewAddress = (userID: number, newAddress: any) => {
  const apiCallOptions = {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(newAddress),
  };
  const resp = http(`/profile/new-address/${userID}`, apiCallOptions)
    .then((newAddressJson) => {
      return newAddressJson.json();
    })
    .then((newAddress) => {
      return newAddress;
    })
    .catch((err) => console.log("new address fetching error!", err));
  return resp;
};

// *********************
// user address list
// *********************

export const fetchUserAddressList = (userID: number) => {
  const apiCallOptions = {
    headers: {
      "content-type": "application/json",
    },
    method: "GET",
  };
  const resp = http(`/profile/address/list/${userID}`, apiCallOptions)
    .then((userAddressListJson) => {
      return userAddressListJson.json();
    })
    .then((userAddress) => {
      return userAddress;
    })
    .catch((err) => console.log("userAddressList fetching error!", err));
  return resp;
};

// *************************
// single user address
// *************************

export const fetchSingleUserAddress = (
  userID: number,
  userAddressID: number
) => {
  const apiCallOptions = {
    headers: {
      "content-type": "application/json",
    },
    method: "GET",
  };
  http(`/profile/address/${userID}/${userAddressID}`, apiCallOptions)
    .then((singleUserAddressJson) => {
      return singleUserAddressJson.json();
    })
    .then((singleUserAddress) => {
      return singleUserAddress;
    })
    .catch((err) => console.log("single user address fetching error!", err));
};

// ***********************
// update address
// ***********************

export const fetchUpdateUserAddress = (
  userID: number,
  userAddressID: number,
  updatedAddress: IUserAddress
) => {
  console.log("updatedAddress", updatedAddress.address.road);
  const apiCallOptions = {
    headers: {
      "content-type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify({
      city: updatedAddress?.address.city,
      street: updatedAddress?.address.road,
      neighborhood: updatedAddress?.address.suburb,
      lat: Number(updatedAddress?.lat),
      lng: Number(updatedAddress?.lon),
    }),
  };
  http(`/profile/update-address/${userID}/${userAddressID}`, apiCallOptions)
    .then((updatedAddressJson) => {
      return updatedAddressJson.json();
    })
    .then((updatedAddress) => {
      return updatedAddress;
    })
    .catch((err) => console.log("updating address error!", err));
};

// ********************
// remove address
// ********************

export const fetchRemoveMyAddress = (userID: number, userAddressID: number) => {
  const apiCallOptions = {
    headers: {
      "content-type": "application/json",
    },
    method: "DELETE",
  };
  http(`/profile/remove-address/${userID}/${userAddressID}`, apiCallOptions)
    .then((removedAddressJson) => {
      return removedAddressJson.json();
    })
    .then((removedAddress) => {
      return removedAddress;
    })
    .catch((err) => console.log("remove address fetching error!", err));
};
