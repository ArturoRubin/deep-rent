import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DateRange, MatDatepickerModule, MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';





@Component({
  selector: 'app-detalles-bauer',
  standalone: true,
  providers: [provideNativeDateAdapter(), MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER],
  imports: [
    RouterLink,
    RouterLinkActive,
    MatCardModule,
    MatDatepickerModule,
    FormsModule
  ],

  templateUrl: './detalles-bauer.component.html',
  styleUrl: './detalles-bauer.component.css'
})
export class DetallesBauerComponent implements OnInit {

  currentDate = new Date();
  futureDate = new Date(this.currentDate.getTime());
  selected : any;


  /*  */
 /*  selected : DateRange< Date > = { 
    start:  new Date
  }; */
  ngOnInit(): void {
    this.futureDate.setDate(this.currentDate.getDate() + 7);
    /* this.selected = { 
      start: this.currentDate,
      end: this.futureDate,
    } */
    this.selected = new DateRange(this.currentDate, this.futureDate);
  }
}


