import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/dataType';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.scss']
})
export class SellerUpdateProductComponent {
  constructor( private route: ActivatedRoute,
    private product:ProductsService,
    private router:Router
    ){}
    productData!: product;
    updateMessage: string = ''

ngOnInit(){
  this.route.paramMap.subscribe((data)=>{
   let idOfProduct = data.get('id');
   console.log('id value : ',idOfProduct);

    idOfProduct && this.product.getProduct(idOfProduct).subscribe((res)=>{
        console.log('res of api getproduct',res);
        this.productData= res;
        
      })
   


      // ----my way to get id of product.
  //  this.product.getProductList().subscribe((data)=>{
  //    console.log('products',data);
  //   for(let i = 0; i<data.length;i++){
  //    if(this.idOfProduct == data[i].id){
  //     console.log('id is find',++i);
  //     console.log('this is data',data[i]);
  //     this.submit(data[i]);
  //     // this.updateProForm.value= data[i];
  //   }
  //   }
  //  });
    
   
    
 })
}

submit(data:product){
  console.log('updt form data : ',data);
  if(this.product){
    data.id = this.productData?.id
  }
 
  this.product.updateProduct(data).subscribe((res)=>{
    console.log('updt api res : ', res);
    this.updateMessage = 'product updated.'
  })
}

}
