import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/services/storage/user-storage.service';



const BASIC_URL = "http://localhost:6061/api/admin/";

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private _http: HttpClient) { }


  addCategory(categoryDto: any): Observable<any>{
    return this._http.post(BASIC_URL+'category',categoryDto,{
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllCategory(): Observable<any>{
    return this._http.get(BASIC_URL+'getCategory',{
      headers: this.createAuthorizationHeader(),
    })
  }


  addProduct(productDto: any): Observable<any>{
    return this._http.post(BASIC_URL+'addProducts',productDto,{
      headers: this.createAuthorizationHeader(),
    })
  }

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


  deleteProduct(productId: any): Observable<any>{
    return this._http.delete(BASIC_URL+ `deleteProducts/${productId}`,{
      headers: this.createAuthorizationHeader(),
    })
  }
  private createAuthorizationHeader(): HttpHeaders{
    return new HttpHeaders().set(
      'Authorization', 'Bearer' + UserStorageService.getToken()
    )
  }

  addCoupon(couponDto: any): Observable<any>{
    return this._http.post(BASIC_URL+'addCoupons',couponDto,{
      headers: this.createAuthorizationHeader(),
    })
  }

  getCoupons(): Observable<any>{
    return this._http.get(BASIC_URL+'getCoupons',{
      headers: this.createAuthorizationHeader(),
    })
  }




}