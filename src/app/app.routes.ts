import { Routes } from '@angular/router';
import { CrearCuentaComponent } from './Pages/crear-cuenta/crear-cuenta.component';
import { MainComponent } from './Components/main/main.component';
import { CrearProductoComponent } from './Pages/crear-producto/crear-producto.component';

export const routes: Routes = [
    { path: '', component: MainComponent},
    { path: 'crear-cuenta', component: CrearCuentaComponent },
    { path: 'crear-producto', component: CrearProductoComponent}
];
