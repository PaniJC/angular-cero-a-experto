import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [

    {
        path: '',
        component: PorPaisComponent, //Componente que quiero mostrar
        pathMatch: 'full' //Esto es para que caiga puntualmente acá
    },
    {
        path: 'region',
        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id', //Después de los dos puntos va el argumento
        component: VerPaisComponent
    },
    {
        path: '**',
        redirectTo: '' //La ruta a la que va a direccionar
    }

]

@NgModule({
    imports: [
        RouterModule.forRoot( routes ) //Este es el que va a hacer la configuración de mis rutas
    ],
    exports: [
        RouterModule
    ]
})
export class appRoutingModule {}