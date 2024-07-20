import { Component } from '@angular/core';
import { Tenant } from '../models/tenant';
import { DashboardService } from './dashboard.service';
import { ResponseModel } from '../models/ResponseModel';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MainModule } from '../../module';
import { AuthService } from '../login/AuthService';
// import { HomeComponent } from '../home/home.component';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MainModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  tenant: Tenant[] = [];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', '+'];
  addtenant: FormGroup;

  roles = {
    ADMIN: false,
    SUPER_ADMIN: false,
    EMPLOYEE: false,
    USER: false,
  };


  constructor(
    private dashboardService: DashboardService,
    private router: Router,
    private formBuilder: FormBuilder,
    // private homeComponent: HomeComponent,
    private authService: AuthService
  ) {

    // homeComponent.showHeader

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

    this.addtenant = this.formBuilder.group({
      tenant: ['', Validators.required],
    });

    
  }



  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dashboardService.getTenant<ResponseModel<Tenant[]>>().subscribe({
      next: (data: ResponseModel<Tenant[]>) => {
        console.log(data.data);
        this.tenant = data.data;
      },
    });
  }

  onSubmit() {
    var addTenant = {
      tenant: this.addtenant.value.tenant,
    };
    console.log(this.addtenant.value);
    this.dashboardService.addTenant(addTenant).subscribe(
      (response) => {
        console.log('Response from bacend:', response);
        window.location.reload();
      },
      (error) => {
        console.error('error: ', error);
      }
    );
  }

}
