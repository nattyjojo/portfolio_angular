import { Component } from '@angular/core';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
// footer current year
export class ContactComponent {
  currentYear: number;
  constructor() {
    this.currentYear = this.getCurrentYear();
  }
  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}
