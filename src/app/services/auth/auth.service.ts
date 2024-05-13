import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { UserStorageService } from '../storage/user-storage.service';

const BASIC_URL = "http://localhost:6061/api/"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient, private userStorageService: UserStorageService) { }

  register(signupRequest: any): Observable<any>{
    return this._http.post(BASIC_URL +"sign-up",signupRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle errors here, e.g., log error message or throw a custom error
        console.error('An error occurred:', error.message);
        return throwError('Registration failed. Please try again later.');
  })
    );
}

login(username: string, password: string): any{
  const headers = new HttpHeaders().set('Content-Type','application/json');
  const body = {username, password};

  return this._http.post(BASIC_URL+ 'authenticate',body, {headers , observe: 'response'}).pipe(
    map((res)=>{
      const token = res.headers.get('authorization').substring(7);
      const user: any = res.body;
      if(token && user){
        this.userStorageService.saveToken(token);
        this.userStorageService.saveUser(user);
        return true;
      }
      return false;
    })
  )
}

}
