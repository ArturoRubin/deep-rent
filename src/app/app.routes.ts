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
import { CasaComponent } from './Pages/casa/casa.component';
import { TerminosCondicionesComponent } from './Pages/terminos-condiciones/terminos-condiciones.component';
import { DashboardArrendatarioComponent } from './Pages/dashboard-arrendatario/dashboard-arrendatario.component';
import { PagosYMensualidadesComponent } from './Pages/pagos-y-mensualidades/pagos-y-mensualidades.component';
import { ManteniminetosComponent } from './Pages/manteniminetos/manteniminetos.component';
import { ContratosComponent } from './Pages/contratos/contratos.component';
import { SoporteComponent } from './Pages/soporte/soporte.component';
import { MaquinasComponent } from './Pages/maquinas/maquinas.component';
import { CalendarioComponent } from './Pages/calendario/calendario.component';
import { SolicitudesDeAlquilerComponent } from './Pages/solicitudes-de-alquiler/solicitudes-de-alquiler.component';
import { ContratosPagosComponent } from './Pages/contratos-pagos/contratos-pagos.component';

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
            { path: '', component: MaquinasComponent, pathMatch: 'full' },
            { path: 'calendario', component: CalendarioComponent },
            { path: 'solicitudes-de-alquiler', component: SolicitudesDeAlquilerComponent },
            { path: 'contratos-pagos', component: ContratosPagosComponent }

        ]
    },
    {
        path: 'dashboard-arrendatario', component: DashboardArrendatarioComponent,
        children: [
            { path: '', component: PagosYMensualidadesComponent, pathMatch: 'full' },
            { path: 'mantenimientos', component: ManteniminetosComponent },
            { path: 'contratos', component: ContratosComponent },
            { path: 'soporte', component: SoporteComponent}
        ]
    },
    { path: 'terminosYcondiciones', component: TerminosCondicionesComponent}
];
