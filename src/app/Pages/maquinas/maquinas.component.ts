import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-maquinas',
  standalone: true,
  imports: [ MatButtonModule, MatCardModule],
  templateUrl: './maquinas.component.html',
  styleUrl: './maquinas.component.css'
})
export class MaquinasComponent {

}
