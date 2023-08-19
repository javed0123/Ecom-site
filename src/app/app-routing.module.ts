import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component';
import { SellerRegisterComponent } from './seller/seller-register/seller-register.component';
import { SellerHomeComponent } from './seller/seller-home/seller-home.component';
import { AuthGuard } from './guard/auth.guard';
import { SellerAddProductsComponent } from './seller/seller-add-products/seller-add-products.component';
import { SellerUpdateProductComponent } from './seller/seller-update-product/seller-update-product.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:'Home'
  },
  // {
  //   component:HomeComponent,
  //   path:''
  // },
  {
    component:SellerRegisterComponent,
    path:'Seller-Register',
    
  },
  {
    component:HomeComponent,
    path:'Login',
    
  },
  {
    component:HomeComponent,
    path:'Cart',
    
  },
  {
    component:SellerHomeComponent,
    path:'Seller-Home',
    canActivate:[AuthGuard]
  },
  {
    component:SellerAddProductsComponent,
    path:'Add-Products',
    canActivate:[AuthGuard]
  },
  {
    component:SellerUpdateProductComponent,
    path:'Update-Product/:id',
    canActivate:[AuthGuard]
  },
  {
    component:SearchPageComponent,
    path:'Search-page/:query'
  },
  {
    component:ProductDetailsComponent,
    path:'Product-details/:id'
  }


  // {
  //   component:HomeComponent,
  //   path:'**'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
