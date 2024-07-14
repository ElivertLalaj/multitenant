import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
       private authService: LoginService,
       private router: Router
  ){}



   canActivate() : boolean {
       if (this.authService.isAuthenticated()){
           return true;
       }else {
           this.router.navigate(["/login"]);
           return false;
       }
   }
}
