import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { LogoComponent } from '../logo/logo.component';
import { ProfileComponent } from '../profile/profile.component';
import { ProfileDetailsComponent } from '../profile-details/profile-details.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactComponent, LogoComponent, ProfileComponent, ProfileDetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
