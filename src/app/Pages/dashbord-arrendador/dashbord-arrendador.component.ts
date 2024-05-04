import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-dashbord-arrendador',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './dashbord-arrendador.component.html',
  styleUrl: './dashbord-arrendador.component.css'
})
export class DashbordArrendadorComponent {

}
