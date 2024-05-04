import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-precontrato',
  standalone: true,
  imports: [MatSelectModule, MatInputModule, MatFormFieldModule, RouterLink, RouterLinkActive],
  templateUrl: './precontrato.component.html',
  styleUrl: './precontrato.component.css'
})
export class PrecontratoComponent {

}
