import { Component } from '@angular/core';
import { UseersService } from 'services/useers.service';
import { Basket } from 'services/user-intarfase';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  name:string =''
  showFlag:boolean = false
  showPrice:string = 'Show Latest Date'

  constructor( private userServ:UseersService){
    
  }

  data:Basket | any

  ngOnInit(): void {
   this.name = this.userServ.getName()
   this.data = this.userServ.baskets
    
  }

  showHighPrice(){
    if(!this.showFlag){
        this.showPrice = 'Show Latest Date'
        this.showFlag = true
        this.data.sort((a:any, b:any) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
          });
    }else{
        this.showPrice = 'Show from First Date'
        this.showFlag = false
        this.data.sort((a:any, b:any) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          });
    }
}
}