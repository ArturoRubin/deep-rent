import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-cuestionario-gruas',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './cuestionario-gruas.component.html',
  styleUrl: './cuestionario-gruas.component.css'
})
export class CuestionarioGruasComponent {

}
