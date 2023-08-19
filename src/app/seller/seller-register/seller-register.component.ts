import { Component } from '@angular/core';
import { SellerService } from 'src/app/services/seller.service';
import { Router } from '@angular/router';
import { logIn, signUp } from 'src/app/dataType';
@Component({
  selector: 'app-seller-register',
  templateUrl: './seller-register.component.html',
  styleUrls: ['./seller-register.component.scss']
})
export class SellerRegisterComponent {
  res1: any;
  values: any;
  showLogin: boolean = false;
  showError:boolean = false;
  
  constructor(
    private router: Router,
     private seller: SellerService
     ) { }
  
  openLogin() {
    this.showLogin = true;
    
  }
  openRegister() {
    this.showLogin = false;

  }


  ngOnInit(): void {
    // check if isSellerLoggedIn
    if (localStorage.getItem('sellerRegistered')) {
      this.seller.reloadSeller();
    }
    if( localStorage.getItem('sellerLoggedIn')){
      this.seller.reloadSeller();

    }
    // get the registerd user data form api into app ts.to login seller.
    // this.seller.getUser().subscribe((res) => {
    //   console.log('this.is res of registered user' ,res)
    //   this.res1 = res;
    // }
    // );
  }

  //for register seller....
  registerSellers(data: signUp) {
    console.log('this is registerform values', data);

    this.seller.addSeller(data)
  }

  //for login seller...
  loginSellers(data: any) {
    // console.log('this is loginform values', data);
    this.seller.logInSeller(data).subscribe((res)=>{
      // console.log('this is login return result',e);
      if(res && res.body &&res.body.length){
        console.log('login res come.');
        
        this.seller.isSellerLogedIn.next(true);
        localStorage.setItem('sellerLoggedIn', JSON.stringify(data))
          this.router.navigate(['Seller-Home'])
        } 
        else {
          this.showError = true;
          
        }
      })
      
   

    // find approach for login seller in app....
    // let user = this.res1.find((e:any)=> e.name === data.name);
    //  if(user.password == data.password){  
    //   this.seller.isSellerLogedIn.next(true);
    //   this.router.navigate(['seller-home'])
    //  } 
    //  else {
    //   console.log('login failed');
      
    //  }
  }




  
  







}
