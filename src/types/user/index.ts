export interface IVKUserProfileData {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  isAccountActive: boolean;
}

export interface IGoogleProfileData {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: null | string;
  role: string;
  isAccountActive: boolean;
  iat: number;
}

export interface IUserById {
  address: string[];
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: null | string;
  id: number;
  isAccountActive: boolean;
  role: string;
}
