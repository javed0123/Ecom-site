import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../dataType';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl : string= 'http://localhost:3000'
  constructor(
    private router:Router,
    private http:HttpClient      
  
  ) { }

    
addProduct(data:product){
  // this.http.post("http://localhost:3000/addProducts",data``)
// console.log('service called',data);
return this.http.post(`${this.apiUrl}/addProducts`,data)
}


getProductList(){
  return this.http.get<product[]>('http://localhost:3000/addProducts');
}

deleteProduct(itemId:any){
  return this.http.delete(`http://localhost:3000/addProducts/${itemId}`)
}

getProduct(itemId:string){
return this.http.get<product>(`http://localhost:3000/addProducts/${itemId}`)
}

updateProduct(data:product){
return this.http.put(`http://localhost:3000/addProducts/${data.id}`,data);
}

getPopularProducts(params:any){
  return this.http.get<any>('http://localhost:3000/addProducts',{params});
}

getTrendingProducts(params:any){
  return this.http.get<any>('http://localhost:3000/addProducts',{params});
}
searchProducts(params:any){
  return this.http.get<any>(`http://localhost:3000/addProducts?q=${params}`);
}

}






