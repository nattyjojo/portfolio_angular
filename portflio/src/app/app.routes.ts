import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'portfolio', component: PortfolioPageComponent }
];


