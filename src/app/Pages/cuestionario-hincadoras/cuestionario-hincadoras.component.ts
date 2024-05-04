import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-cuestionario-hincadoras',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './cuestionario-hincadoras.component.html',
  styleUrl: './cuestionario-hincadoras.component.css'
})
export class CuestionarioHincadorasComponent {

}
