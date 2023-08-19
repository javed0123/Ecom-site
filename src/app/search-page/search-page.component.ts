import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { product } from '../dataType';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit{
constructor(
  private activateRoute :ActivatedRoute,
  private productSrv : ProductsService
){}
searchedResults :undefined | product[];
noItemMessage : boolean = false;
query : any;
ngOnInit(){
  this.query = this.activateRoute.snapshot.paramMap.get('query');
  console.log('query length: ',this.query?.length);
  this.getProducts();

}

getProducts(){
  if(this.query?.length!>1)
  {
     if( !(this.query?.includes("  ")) && !(this.query?.includes("   ")))
     {
       this.productSrv.searchProducts(this.query).subscribe((res)=>{
       if(res.length){
         this.searchedResults = res;
       }
       else  this.noItemMessage = true;
       })
     }
   }
}


}
