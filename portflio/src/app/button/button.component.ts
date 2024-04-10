import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() buttonTitle: string = '';
  @Output() clicked = new EventEmitter<void>();

  onClick(){
    this.clicked.emit()
  }

}
