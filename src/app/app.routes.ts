import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './login/AuthGuard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UnitDashboardComponent } from './unit-dashboard/unit-dashboard.component';

export const routes: Routes = [
    {path: "" , component : LoginComponent},
    {path: "login" , component : LoginComponent},
    {path: "home" , component : HomeComponent , canActivate : [AuthGuard]},
    {path: "dashboard" , component : DashboardComponent , canActivate : [AuthGuard] },
    {path: "unitDashboard" , component : UnitDashboardComponent , canActivate : [AuthGuard] },

 





];
