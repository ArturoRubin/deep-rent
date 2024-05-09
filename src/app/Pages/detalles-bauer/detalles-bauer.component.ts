import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-detalles-bauer',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    RouterLink,
    RouterLinkActive,
    MatCardModule,
    MatDatepickerModule,

  ],
  templateUrl: './detalles-bauer.component.html',
  styleUrl: './detalles-bauer.component.css'
})
export class DetallesBauerComponent {
  selected: Date | null | undefined;

}


