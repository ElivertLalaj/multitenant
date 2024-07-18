import { Component } from '@angular/core';
import { MainModule } from '../../module';
import { FormBuilder } from '@angular/forms';
import { Router } from 'express';
import { DashboardService } from '../dashboard/dashboard.service';
import { AuthService } from '../login/AuthService';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    
    MainModule
    
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  roles = {
    ADMIN: false,
    SUPER_ADMIN: false,
    EMPLOYEE: false,
    USER: false,
  };

  constructor(
    private authService: AuthService
  ) {

    let role = this.authService.getRole();
    if (role == 'ADMIN') {
      this.roles.ADMIN = true;
    } else if (role == 'SUPER_ADMIN') {
      this.roles.SUPER_ADMIN = true;
    } else if (role == 'EMPLOYEE') {
      this.roles.EMPLOYEE = true;
    } else if (role == 'USER') {
      this.roles.USER = true;
    }
  }

}
