import { Component, OnInit,   } from '@angular/core';
import { GroceryServiceService } from 'services/grocery-service.service';
import { Grocery } from 'services/grocery-intarface'; 
import { ActivatedRoute, Router } from '@angular/router';
import { UseersService } from 'services/useers.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {


  products:Grocery | any
  category:Array<string> | undefined = []
  search:string = ''
  flag:boolean = false
  showFlag:boolean = false
  showPrice:string = 'Show Low Price'
  user:string | undefined
  isAuth:boolean |  undefined
  constructor(private productServices: GroceryServiceService, private router: Router, private activatedRouter:ActivatedRoute, private userServ: UseersService ){
  }

  ngOnInit(): void {
    this.products =  this.productServices.getProducts().subscribe((data: any) =>{
      this.products = data
      for (let i = 0; i < this.products.length; i++) {
        const product = this.products[i];
        if(!this.category?.includes(product.category)){
            this.category?.push(product.category) 
        }
      }
    })
    this.user = this.userServ.getName()
    this.isAuth = this.userServ.isAuth

  }

  showAllCategories(){
   return this.products =  this.productServices.getProducts().subscribe((data: any) => this.products = data)
    // this.router.navigate(['catalog', 'All']);
  }

  filtr(item:string){
      this.products =  this.productServices.getProducts().subscribe((data: any) =>{
        this.products = data
        this.products = this.products.filter((ctgry:any) => ctgry.category === item) 
      })
      // this.router.navigate(['catalog', item]);
  }

  searchItem(){
    this.products =  this.productServices.getProducts().subscribe((data: any) =>{
      this.products = data
      this.products = this.products.filter((ctgry:any) =>ctgry.title.toLowerCase().includes(this.search))  
      if(this.products.length === 0){
        this.flag = true
      }else{
        this.flag = false
      }
    })
}

showHighPrice(){
    if(!this.showFlag){
        this.showPrice = 'Show High Price'
        this.showFlag = true
        this.products = this.products.sort((a:any, b:any) => +a.price - +b.price)  
    }else{
        this.showPrice = 'Show  Low Price'
        this.showFlag = false
        this.products = this.products.sort((a:any, b:any) =>  +b.price - +a.price )  
    }
}

logOut(){
  this.userServ.logoutService()
  this.router.navigate(['sing-in'])
}

  
}
