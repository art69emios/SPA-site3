import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UseersService } from 'services/useers.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: UseersService) { }
  
  canActivate() {
      return this.authService.isLoggedIn()
                              .then((isAuth)=>{
                                return isAuth ? true : false
                              });
  }
  
}
