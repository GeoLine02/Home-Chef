import { toast } from "react-toastify";
import { http } from "../../helpers/http";
import { text } from "../../helpers/functions";

// *********************
// new address
// *********************

export const fetchNewAddress = (userID: number, newAddress: string) => {
  const showToastError= () => {
    toast.error(text("ERROR_NEW_ADDRESS"));

  }
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
    .catch((err) =>showToastError());
};

// *********************
// user address list
// *********************

export const fetchUserAddressList = (userID: number) => {
  const showToastError= () => {
    toast.error(text("USERADDRESS_ERROR"));
  }
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
    .catch((err) =>  showToastError() );
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
  const showToastError= () => {
    toast.error(text("SINGLEUSER_ERROR"));
  }
  http(`/profile/address/${userID}/${userAddressID}`, apiCallOptions)
    .then((singleUserAddressJson) => {
      return singleUserAddressJson.json();
    })
    .then((singleUserAddress) => {
      return singleUserAddress;
    })
    .catch((err) => showToastError());
};

// ***********************
// update address
// ***********************

export const fetchUpdateMyAddress = (
  
  userID: number,
  userAddressID: number,
  updatedAddress: string
) => {
  const showToastError= () => {
    toast.error(text("UPDATE_ADDRESS_ERROR"));
  }
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
    .catch((err) => showToastError());
};

// ********************
// remove address
// ********************

export const fetchRemoveMyAddress = (userID: number, userAddressID: number) => {
  const showToastError= () => {
    toast.error(text("REMOVE_ADDRESS_FETCHING_ERROR"));
  }
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
    .catch((err) => showToastError());
};
