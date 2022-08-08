export interface Beverage {
  id: number;
  title: string;
  size: string;
  espresso: string;
  shots: number;
  syrup: string;
  pumps: number;
  iced: boolean;
}

export const emptyBeverage = {
  id: 0,
  title: '',
  size: '',
  espresso: '',
  shots: 0,
  syrup: '',
  pumps: 0,
  iced: false,
};

export interface User {
  email: string;
  password: string;
}
