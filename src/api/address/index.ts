import { http } from "../../helpers/http";

// *********************
// new address
// *********************

export const fetchNewAddress = (userID: number, newAddress: string) => {
  const apiCallOptions = {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ newAddrss: newAddress }),
  };
  http(`/profile/new-address/${userID}`, apiCallOptions)
    .then((newAddressJson) => {
      return newAddressJson.json();
    })
    .then((newAddress) => {
      return newAddress;
    })
    .catch((err) => console.log("new address fetching error!", err));
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
  http(`/profile/list/${userID}`, apiCallOptions)
    .then((userAddressListJson) => {
      return userAddressListJson;
    })
    .then((userAddress) => {
      return userAddress;
    })
    .catch((err) => console.log("userAddressList fetching error!", err));
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

export const fetchUpdateMyAddress = (
  userID: number,
  userAddressID: number,
  updatedAddress: string
) => {
  const apiCallOptions = {
    headers: {
      "content-type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify({ updateAddress: updatedAddress }),
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
