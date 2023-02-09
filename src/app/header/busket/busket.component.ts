import { Component, OnInit } from '@angular/core';
import { GroceryServiceService } from 'services/grocery-service.service';
import { UseersService } from 'services/useers.service';

@Component({
  selector: 'app-busket',
  templateUrl: './busket.component.html',
  styleUrls: ['./busket.component.scss']
})
export class BusketComponent implements OnInit {
  products:any
  busketAr:any = this.productServices.getData()
  showEmpty:boolean = true
  totalSum:number = 0
  isAuth:boolean  = false
  constructor(private productServices: GroceryServiceService, private usersService: UseersService){}

  ngOnInit(){

    if(this.busketAr.length !== 0){
      this.showEmpty = false
    }
    this.totalSum = this.productServices.getTotalPrice()
    this.isAuth = this.usersService.getAuth() 
    if(!this.isAuth){
      this.busketAr.length = 0
      this.totalSum = 0
      this.showEmpty = true
    }



  }

  deleteData(value:any){
    this.productServices.deleteData(value)
    this.totalSum = this.productServices.getTotalPrice()
  }

  
  
}
