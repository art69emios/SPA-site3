import { Injectable } from '@angular/core';
import { Basket, User } from './user-intarfase';

@Injectable({
  providedIn: 'root'
})
export class UseersService {
   isAuth = false;

  constructor() { }

  private name = '';

  users: User[] = [
    {
      login: "artem", 
      password: "007",
   }
  ];
  
  baskets: Basket[] = [
  ];


  
  loginService(login: string, password: string){
    this.isAuth = !!this.users.find((user)=> user.login === login && user.password === password);
    if(this.isAuth){
       this.name = login;
    }
 }

 logoutService(){
    this.isAuth = false;
 }

 getName() {
    return this.name;
 }

 isLoggedIn(){
    return new Promise(resolve => {
       setTimeout(() => {
       resolve(this.isAuth)
       }, 200);
    })
 }

 getAuth(){
   return this.isAuth
 }





}
