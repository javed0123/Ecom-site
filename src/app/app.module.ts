import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component';
import { SellerRegisterComponent } from './seller/seller-register/seller-register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './seller/seller-home/seller-home.component';
import { HeaderComponent } from './header/header.component';
import { SellerAddProductsComponent } from './seller/seller-add-products/seller-add-products.component';
import { SellerUpdateProductComponent } from './seller/seller-update-product/seller-update-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchPageComponent } from './search-page/search-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SellerComponent,
    SellerRegisterComponent,
    SellerHomeComponent,
    HeaderComponent,
    SellerAddProductsComponent,
    SellerUpdateProductComponent,
    SearchPageComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
