import { Component } from '@angular/core';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Router, RouterLink, RouterLinkActive } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@Component({
  selector: 'app-cuestionario-perforadoras',
  standalone: true,
  imports: [MatSelectModule, MatInputModule, MatFormFieldModule, RouterLink, RouterLinkActive,MatProgressSpinnerModule, CommonModule],
  templateUrl: './cuestionario-perforadoras.component.html',
  styleUrl: './cuestionario-perforadoras.component.css'
})
export class CuestionarioPerforadorasComponent {
    showSpinner = false;

    constructor(private router: Router) {}

  onClick() {
    this.showSpinner = true;
    setTimeout(() => {
      this.router.navigate(['/opciones-perforadoras']);
    }, 2000);
  }
}
