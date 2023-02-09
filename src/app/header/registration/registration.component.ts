import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UseersService } from 'services/useers.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
  constructor(private logService: UseersService, private router: Router){}

  user:string   | undefined
  pass:string   | undefined
  success:string  | undefined
  ngOnInit(): void {
    localStorage.getItem('users')
  }

getUserVal(userVal:any){
 return this.user = userVal.value
}

getPassVal(passVal:any){
 return this.pass = passVal.value
}



@HostListener('document:keyup',['$event'])
logInEnter(e: any){
  if(e.key === 'Enter'){
    this.logService.users.push({
      login: this.user,
      password:this.pass
    })
  }
}


OnSubmit(registerForm:any){
  if(registerForm){
    this.logService.users.push({
      login: this.user,
      password:this.pass
    })

    localStorage.setItem('users', JSON.stringify(this.logService.users));

    setTimeout(() => {
      this.success = 'Success! User Added'
    }, 1000);
    setTimeout(() => {
      this.router.navigate(['/sing-in'])
    }, 2000);
    
  }
}





  
}
