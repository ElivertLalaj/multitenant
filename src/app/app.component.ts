import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { routes } from './app.routes';
import { MainModule } from '../module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [

    MainModule

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multitenant';
}
