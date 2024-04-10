import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-main-template',
  standalone: true,
  imports: [ContactComponent, LogoComponent],
  templateUrl: './main-template.component.html',
  styleUrl: './main-template.component.css'
})
export class MainTemplateComponent {

}
