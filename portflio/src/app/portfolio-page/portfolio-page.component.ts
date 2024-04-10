import { Component } from '@angular/core';
import { MainTemplateComponent } from '../main-template/main-template.component';
import { PcMacBookAirGraphicComponent } from '../pc-mac-book-air-graphic/pc-mac-book-air-graphic.component';
@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [MainTemplateComponent, PcMacBookAirGraphicComponent],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.css'
})
export class PortfolioPageComponent {

}
