import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/dataType';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-seller-add-products',
  templateUrl: './seller-add-products.component.html',
  styleUrls: ['./seller-add-products.component.scss']
})
export class SellerAddProductsComponent {
constructor(
  private product:ProductsService,
  private router:Router,
  private http:HttpClient
  ){}
  submit(data:product  ){
    console.log(data);
    this.product.addProduct(data).subscribe((res)=>{
      console.log('res of api: ',res)
      window.alert('product added succesfully!')
    
    });
  } 

  
  
}
