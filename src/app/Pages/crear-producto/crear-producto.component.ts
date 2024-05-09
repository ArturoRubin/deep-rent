import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';

import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';


import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule
    
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent implements OnInit {
  formInformacionGeneral = this._formBuilder.group({
    nombreMaquina: ['', Validators.required],
    marca: ['', Validators.required],
    modelo: ['', Validators.required],
    categoria: ['', Validators.required],
    descripcion: ['', Validators.required],
    tarifaMensual: ['', Validators.required],
    deposito: ['', Validators.required],
    potencia: ['', Validators.required],
    capacidad: ['', Validators.required],
    dimensiones: ['', Validators.required],
  });
  formUbicacionDisponibilidad = this._formBuilder.group({
    estado: ['', Validators.required],
    direccion: ['', Validators.required],
    codigoPostal: ['', Validators.required],
    servicioEntrega: ['', Validators.required],
    estados: ['', Validators.required],

  });
  formMantenimientoCuidado = this._formBuilder.group({
    mantenimiento: ['', Validators.required],
    devoluciones: ['', Validators.required],
    tiempoAlquiler: ['', Validators.required],
    deposito: ['', Validators.required],

  });
  isLinear = false;

  
  
  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
    
  }
}

