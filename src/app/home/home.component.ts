import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { HttpParams } from '@angular/common/http';
@Component({
  selector: '',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private productsSrv: ProductsService){

  }
  noOfPopImg:number= 3;
  noOfTrendImg:number= 5;
  popularProducts!: any;
  trendingProducts!:any;
  inputvalue: string='';
  clicked(){
    console.log('button is clicked');
  }

  ngOnInit(){
   
    // creating instace of httpparrams for setting query params....
    const param1 = new HttpParams()
  .set('_limit',this.noOfPopImg);
  // it will impliment like this : url?_limit=no   ,
  //  it add ?_limit=no  after url to get limited no of product from api.

    const param2 = new HttpParams()
  .set('_limit',this.noOfTrendImg);
  
    this.popularProducts = this.productsSrv.getPopularProducts(param1)
    .subscribe(res =>{
      this.popularProducts = res;
       console.log('res of pop products api call:',res);
    });

    this.trendingProducts = this.productsSrv.getTrendingProducts(param2)
    .subscribe(res=>{
      this.trendingProducts =res;
      console.log('res of trending pro ',res);
      
    })

  }





}
