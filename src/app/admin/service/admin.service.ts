import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
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

  updateProduct(productId: any ,productDto: any): Observable<any>{
    const url = `http://localhost:6061/api/admin/updateProduct/${productId}`;
    return this._http.put(url,productDto,{
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllProducts(): Observable<any>{
    return this._http.get(BASIC_URL+'getProducts',{
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllProductById(prductId : any): Observable<any>{
    return this._http.get(BASIC_URL+ `product/${prductId}`,{
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

  getPlacedOrders(): Observable<any>{
    return this._http.get(BASIC_URL+'placedOrder',{
      headers: this.createAuthorizationHeader(),
    })
  }

  changeOrderStatus(orderId: number, status: string): Observable<any> {
    const url = `${BASIC_URL}order/${orderId}/${status}`;
    return this._http.get(url, {
      headers: this.createAuthorizationHeader(),
    });
  }
  // log(arg0: string): void {
  //   throw new Error('Method not implemented.');
  // }
  // handleError<T>(arg0: string, arg1: undefined[]): any {
  //   throw new Error('Method not implemented.');
  // }
 

  postFAQ(productId: number, faqDto: any): Observable<any> {
    
    return this._http.post(BASIC_URL + `faq/${productId}`, faqDto , {
      headers: this.createAuthorizationHeader(),
    });
  } 


}