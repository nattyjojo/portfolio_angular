import { Component } from '@angular/core';
import { MainTemplateComponent } from '../main-template/main-template.component';
import { ProfileComponent } from '../profile/profile.component';
import { ProfileDetailsComponent } from '../profile-details/profile-details.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainTemplateComponent, ProfileComponent, ProfileDetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'John Chimezie | Home';

}

