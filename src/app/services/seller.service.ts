import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { logIn, signUp } from '../dataType';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  
  isSellerLogedIn = new BehaviorSubject<boolean>(false)
  
  constructor(
    private http: HttpClient,
     private router: Router
     ) { }


  //register seller in app...
  addSeller(data: signUp) {
    this.http.post('http://localhost:3000/register',
      data,
      { observe: 'response' })
      .subscribe((res) => {
        // console.log('res of register API', res);

        this.isSellerLogedIn.next(true);
        localStorage.setItem('sellerRegistered', JSON.stringify(res.body))
        this.router.navigate(['Seller-Home'])
      })

    if(this.isSellerLogedIn){
      console.log('res come form register api.');

    }
    else{
      this.router.navigate(['Home']);
      console.log('res not come from register api.');
    }
  }
  //login seller in app...
  logInSeller(data:logIn):Observable<any>{
   return this.http.get<any>(`http://localhost:3000/register?name=${data.name}&&password=${data.password}`
  ,
  {observe:'response'} );

    
  }

  // check if seller is logedIn
  reloadSeller() {
    this.isSellerLogedIn.next(true);
    this.router.navigate(['Seller-Home'])
  }



  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //get registered seller from  api ....
  // getUser() {
  //   return this.http.get('http://localhost:3000/register')
  // }

}
