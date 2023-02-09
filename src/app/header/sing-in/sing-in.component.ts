import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UseersService } from 'services/useers.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit{

  constructor(private logService: UseersService, private router: Router){}

    user:string   | undefined
    pass:string   | undefined
    error:string  | undefined
  ngOnInit(): void {
    
  }

  getUserVal(userVal:any){
   return this.user = userVal.value
  }

  getPassVal(passVal:any){
   return this.pass = passVal.value
  }

  logIn(){
    if(this.user && this.pass){
      this.logService.loginService(this.user, this.pass)
      this.logService.isLoggedIn().then((isAuth) => {
        if (isAuth) {
          this.router.navigate(['catalog']);
        } else{
          this.error = 'error'
        }
      })
    } 

  }

  @HostListener('document:keyup',['$event'])
  logInEnter(e: any){
    if(e.key === 'Enter'){
      this.logIn()
    }
  }
  

  OnSubmit(registerForm:any){
    if(registerForm){
      this.logIn()
    }
    }
    

}
