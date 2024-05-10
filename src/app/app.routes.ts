import { Routes } from '@angular/router';
import { CrearCuentaComponent } from './Pages/crear-cuenta/crear-cuenta.component';
import { MainComponent } from './Components/main/main.component';
import { CrearProductoComponent } from './Pages/crear-producto/crear-producto.component';
import { SeleccionarTipoEquipoComponent } from './Pages/seleccionar-tipo-equipo/seleccionar-tipo-equipo.component';
import { CuestionarioPerforadorasComponent } from './Pages/cuestionario-perforadoras/cuestionario-perforadoras.component';
import { CuestionarioGruasComponent } from './Pages/cuestionario-gruas/cuestionario-gruas.component';
import { CuestionarioHincadorasComponent } from './Pages/cuestionario-hincadoras/cuestionario-hincadoras.component';
import { CuestionarioAlmejasComponent } from './Pages/cuestionario-almejas/cuestionario-almejas.component';
import { CardsPerforacionComponent } from './Pages/cards-perforacion/cards-perforacion.component';
import { DetallesBauerComponent } from './Pages/detalles-bauer/detalles-bauer.component';
import { PrecontratoComponent } from './Pages/precontrato/precontrato.component';
import { ContratoComponent } from './Pages/contrato/contrato.component';
import { DashbordArrendadorComponent } from './Pages/dashbord-arrendador/dashbord-arrendador.component';
import { EjemploComponent } from './Pages/ejemplo/ejemplo.component';
import { PruebaComponent } from './Pages/prueba/prueba.component';
import { CasaComponent } from './Pages/casa/casa.component';
import { TerminosCondicionesComponent } from './Pages/terminos-condiciones/terminos-condiciones.component';

export const routes: Routes = [
    { path: '', component: MainComponent, pathMatch: 'full' },
    { path: 'crear-cuenta', component: CrearCuentaComponent },
    { path: 'crear-producto', component: CrearProductoComponent },
    { path: 'seleccionar-tipo-maquinas', component: SeleccionarTipoEquipoComponent },
    { path: 'cuestionario-maquinas-perforadoras', component: CuestionarioPerforadorasComponent },
    { path: 'cuestionario-gruas', component: CuestionarioGruasComponent },
    { path: 'cuestionario-hincadoras-de-pilotes', component: CuestionarioHincadorasComponent },
    { path: 'cuestionario-almejas-muro-milan', component: CuestionarioAlmejasComponent },
    { path: 'opciones-perforadoras', component: CardsPerforacionComponent },
    { path: 'detalles-bauer-BG40', component: DetallesBauerComponent },
    { path: 'precontrato-bauerbg40', component: PrecontratoComponent },
    { path: 'contrato-bauerg40', component: ContratoComponent },
    {
        path: 'dashboard-arrendador', component: DashbordArrendadorComponent,
        children: [
            { path: '', component: PruebaComponent, pathMatch: 'full' },
            { path: 'ejemplo', component: EjemploComponent },
            { path: 'casa', component: CasaComponent }
        ]
    },
    { path: 'terminosYcondiciones', component: TerminosCondicionesComponent}
];
