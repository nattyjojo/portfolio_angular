import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PortfolioPageComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  
  
}


