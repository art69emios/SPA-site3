import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Grocery } from 'services/grocery-intarface';
import { GroceryServiceService } from 'services/grocery-service.service';
import { UseersService } from 'services/useers.service';
import { Basket, User } from 'services/user-intarfase';
import { AuthGuardService } from '../sing-in/auth-guard.service';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})


export class CatalogItemComponent implements OnInit {

 

  @Input('products')
  products:Grocery | any
  busketAr:any = this.productServices.busketArray
  addBusket:string = 'Add to Busket'
  addedBusket:string = 'Added'
  amount:number = 1
  search:string = ''
  currentUser: any
  isAuth:boolean  = false

  constructor(private productServices: GroceryServiceService, private router: Router, private activatedRouter:ActivatedRoute,private usersService: UseersService){}

  ngOnInit(): void {
    this.currentUser = this.usersService.getName()
    this.isAuth = this.usersService.getAuth() 
  }


  pushItem(product:Grocery , event:any){
    this.productServices.addData(product)
    event.target.innerHTML = this.addedBusket

   
   
    let existingUser = this.usersService.baskets.find((user: Basket) => user.login === this.currentUser);
    if (existingUser) {
        existingUser.items.push(product)
      } else {
        this.usersService.baskets.push({ login: this.currentUser, items: [product], date: new Date() } );
      } 
  }

  plusAmount(num:any){
    this.amount = num
    num.innerHTML++
  }

  minusAmount(num:any){
    this.amount = num
    if(num.innerHTML >= 1){
      num.innerHTML--
    }
  }

  routerToSingIn(){
    this.router.navigate(['sing-in'])
    window.scrollTo(0, 0)
  }

 


}
