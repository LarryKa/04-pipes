import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'stefan';
  nombreUpper: string = 'STEFAN';
  nombreCompleto: string = 'StefAn rEyES';

  fecha: Date = new Date(); // di día de hoy
  
}
