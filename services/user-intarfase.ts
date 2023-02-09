import { Grocery } from "./grocery-intarface";

export interface User {
    password: string | undefined;
    login: string | any;
 }
 
 export interface Basket {
  login: string;
  items: Grocery[];
  date: Date
 }
 
