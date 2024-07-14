import { Injectable } from '@angular/core';
import { Login, TokenResponse } from '../models/login';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, provideHttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  url: String = "http://localhost:8080/api/v1/"



  constructor(
    private http : HttpClient,
  ) { }


  getToken(UserLogInInfo : Login) : Observable<TokenResponse> {
    const headers = new HttpHeaders ({
      'content-type' : 'application/json',
      'token': UserLogInInfo.tenant
    })
    
    return this.http.post<TokenResponse>(this.url + 'login' , UserLogInInfo, {headers : headers} )
  }


  isAuthenticated(): boolean {
    return !!localStorage.getItem('token')
  }

  
  }