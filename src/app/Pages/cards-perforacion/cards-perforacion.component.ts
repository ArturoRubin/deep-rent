import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-cards-perforacion',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink, RouterLinkActive],
  templateUrl: './cards-perforacion.component.html',
  styleUrl: './cards-perforacion.component.css'
})
export class CardsPerforacionComponent {

}
