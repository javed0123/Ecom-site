import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../services/seller.service';
import { ProductsService } from '../services/products.service';
import { product } from '../dataType';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuType: String = 'default';
  sellerName: any;
  searchedResult: any;
  searchpage: any = 'Search-page';

  constructor(
    private router: Router,
    private seller: SellerService,
    private productsSrv: ProductsService
  ) {
  }

  ngOnInit(): void {
    //to detect any changes in header-------
    this.router.events.subscribe((res: any) => {
      if (res.url) {
        if (localStorage.getItem('sellerLoggedIn'))
        // && (res.url.includes('Seller-Home')|| (res.url.includes('Add-products'))
        {
          this.menuType = 'seller'
          if (localStorage.getItem('sellerLoggedIn')) {
            let sellerstore = localStorage.getItem('sellerLoggedIn');
            let sellerData = sellerstore && JSON.parse(sellerstore)
            this.sellerName = sellerData.name;
          }
        }
        else {
          this.menuType = 'default'
          // console.log('outside of seller',);
        }
      }

    })
  }

  // for seller logout
  logout() {
    localStorage.removeItem('sellerLoggedIn');
    this.seller.isSellerLogedIn.next(false);

    this.router.navigate(['Home'])
  }

  searchProduct(query: KeyboardEvent) {
    const element = query.target as HTMLInputElement;
    // const params = new HttpParams()
    // .set('q','element.value')
    // console.log(params);
    if ((element.value.length>1) && !(element.value.includes("  ")) && !(element.value.includes("   ")))
    {
      console.log('length ',element.value.length);
      
      this.productsSrv.searchProducts(element.value)
        .subscribe(res => {
          if (res) {
            console.log('res of searched-product : ', res);
            if (res.length > 4) {
              res.length = 4;
            }
            this.searchedResult = res;
          }
          else this.searchedResult = undefined;
        }
        )
    }
    else this.searchedResult = undefined;
  }
  hideSearchedProduct() {
    setTimeout(() => {
      this.searchedResult = undefined;
      
    }, 1000);

  }
  submitSearch(value : any){
    // const param =new HttpParams()
    // .set('value',value);
    this.router.navigate([`Search-page/${value}`]); 
  }
  




  // navigate function for searchproducts li, searchbar on header.
  // navigate(){
  //   console.log('navigate to search');
  //   this.router.navigate(['Search-page']); 
  // }
}
