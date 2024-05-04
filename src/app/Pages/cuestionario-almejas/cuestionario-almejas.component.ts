import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-cuestionario-almejas',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './cuestionario-almejas.component.html',
  styleUrl: './cuestionario-almejas.component.css'
})
export class CuestionarioAlmejasComponent {

}
