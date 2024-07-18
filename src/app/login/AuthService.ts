import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  getToken():string{
    return localStorage.getItem('token')  || '';
  }

  
  getDecodedAccessToken() {
    let jwtData = this.getToken().split('.')[1]
    let decodedJwtJsonData = window.atob(jwtData)
    return JSON.parse(decodedJwtJsonData)
  }

  getRole():string{
    let token = this.getDecodedAccessToken()
    return String(token["audience"] )   
  }
}
