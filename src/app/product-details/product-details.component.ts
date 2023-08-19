import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { product } from '../dataType';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
constructor(
private activateRoute: ActivatedRoute,
private productSrv : ProductsService
){

}
product : undefined |product;
quantityOfProduct :number = 1;
showQuantityError: boolean= false;
ngOnInit(){
  const productId = this.activateRoute.snapshot.paramMap.get('id');
  if(productId){
    this.productSrv.getProduct(productId).subscribe((res)=>{
      if(res){
        this.product = res;
        console.log('product detail : ',this.product);
        
      }
    })
  }
}

increaseQuantity(){
  this.quantityOfProduct = this.quantityOfProduct + 1;
}
decreaseQuantity(){
  if(this.quantityOfProduct > 1){
    this.quantityOfProduct = this.quantityOfProduct - 1;
  }
  else this.showQuantityError = true;

}







}
