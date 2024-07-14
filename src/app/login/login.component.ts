import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { Login } from '../models/login';
import { LoginService } from './login.service';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule,
    
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: String = ""
  password: String = ""
  token : any = "token"

  url = "http://localhost:8080/api/v1/login"
 
  loginForm: FormGroup;

  constructor(
    // private router: Router,
    private loginService : LoginService,
    private formBuilder: FormBuilder,

  ){


    this.loginForm = this.formBuilder.group({
      tenant: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  
  onSubmit() {

    this.token = "token"


    console.log(this.loginForm.value)
 if (this.loginForm.valid) {
  const username = this.loginForm.value.username;
  const password = this.loginForm.value.password;
  const tenant = this.loginForm.value.tenant;


console.log("username :" , username)
console.log("password :" , password)

var tokenRequest: Login = {
  password: password,
  username: username,
  tenant: tenant
};
this.loginService.getToken(tokenRequest).subscribe(TokenResponse => {
  console.log(TokenResponse);
  this.token = TokenResponse.data.accessToken;
  localStorage.setItem("token" , this.token);
})
  
    }else {
      alert("form is not valid")
    }
     
    
  }

 
}

