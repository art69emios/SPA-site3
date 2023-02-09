import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Grocery } from 'services/grocery-intarface';
import { GroceryServiceService } from 'services/grocery-service.service';
import { UseersService } from 'services/useers.service';
import { AuthGuardService } from './sing-in/auth-guard.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  search:string = ''

  constructor(private productServices: GroceryServiceService, private router:Router, private authGurd:AuthGuardService,private userServ: UseersService){
  }

  products:Grocery | any
  countProduct:any
    ngOnInit(): void {
        this.countProduct = this.productServices.busketArray
        
    }




}
