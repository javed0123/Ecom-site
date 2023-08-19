import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/dataType';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent {
  constructor(
    private product: ProductsService,
    private router: Router,
    private http: HttpClient,
  ) { }
  productlist: product[] | undefined;
  

  ngOnInit() {
    this.getProduct();
  }
  
  //to get all product list from api.
  getProduct() {
    this.product.getProductList().subscribe((res) => {
      this.productlist = res;
      // console.log('productlist:', this.productlist)
    })

  }

  deleteItem(itemId: number) {
    this.product.deleteProduct(itemId).subscribe((res) => {
      console.log(
        'res of delete api', res
      );
      this.getProduct();
    })

  }
  
  
  
} 
