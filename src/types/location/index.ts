export interface IAddress {
  country: string;
  country_code: string;
  name: string;
  postCode: string;
  state: string;
}

export interface IUserAddressOptions {
  id: number;
  city: string;
  suburb: string;
  road: string;
  lat: string;
  lon: string;
}

export interface IUserAddress {
  address: IUserAddressOptions;
  lat: string;
  lon: string;
}
