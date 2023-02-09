import { Injectable, OnInit,  } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class GroceryServiceService implements OnInit {

  busketArray:Array<any> = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}


  getProducts(){
    return this.http.get('https://fakestoreapi.com/products')
  }

  addData(value: any):void {
    const existingCard = this.busketArray.find(c => c.title === value.title);
    if (!existingCard) {
      this.busketArray.push(value);
    }
  }

  deleteData(value: any):void {
    this.busketArray.splice(value, 1)
  }

  getData() {
    return this.busketArray;
  }

  getTotalPrice() {
    return this.busketArray.reduce((acc:any, item:any) => acc + item.price, 0);
  }


}
