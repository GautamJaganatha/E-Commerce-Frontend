import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/services/storage/user-storage.service';

 const BASIC_URL = "http://localhost:6061/api/customer/";
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http: HttpClient) { }

  getAllProducts(): Observable<any>{
    return this._http.get(BASIC_URL+'getProducts',{
      headers: this.createAuthorizationHeader(),
    })
  }


  getAllProductsByName(name:any): Observable<any>{
    return this._http.get(BASIC_URL+`searchProducts/${name}`,{
      headers: this.createAuthorizationHeader(),
    })
  }

  addToCart(productId:any): Observable<any>{
    const cartDto = {
      userId : UserStorageService.getUserId(),
      productId : productId
    }
    console.log(cartDto);
    return this._http.post(BASIC_URL + `cart`, cartDto,{
      headers : this.createAuthorizationHeader(),
    })
    
  }


  getCartByUserId(): Observable<any>{
    const userID = UserStorageService.getUserId();
    return this._http.get(BASIC_URL + `cart/${userID}`,{
      headers : this.createAuthorizationHeader(),
    })
  }


  private createAuthorizationHeader(): HttpHeaders{
    return new HttpHeaders().set(
      'Authorization', 'Bearer' + UserStorageService.getToken()
    )
  }

  applyCoupon(code: any): Observable<any>{
    const userId = UserStorageService.getUserId();
    return this._http.get(BASIC_URL + `coupon/${userId}/${code}`,{
      headers : this.createAuthorizationHeader(),
    })
  }

  IncreaseProductQuantity(productId:any): Observable<any>{
    const cartDto = {
      userId : UserStorageService.getUserId(),
      productId : productId
    }
    return this._http.post(BASIC_URL + `addition`, cartDto,{
      headers : this.createAuthorizationHeader(),
    })
    
  }

  DecreaseProductQuantity(productId:any): Observable<any>{
    const cartDto = {
      userId : UserStorageService.getUserId(),
      productId : productId
    }
    return this._http.post(BASIC_URL + `deduction`, cartDto,{
      headers : this.createAuthorizationHeader(),
    })
    
  }

  placeOrder(orderDto: any): Observable<any>{
     orderDto.userId = UserStorageService.getUserId();
    return this._http.post(BASIC_URL + `placeOrder`,orderDto,{
      headers : this.createAuthorizationHeader(),
    })
  }

  getOrdersByUserId(): Observable<any>{
    const userId = UserStorageService.getUserId();
   return this._http.get(BASIC_URL + `myOrders/${userId}`,{
     headers : this.createAuthorizationHeader(),
   })
 }

}
