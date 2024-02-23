import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionComponent } from './component/autenticacion/autenticacion.component';
import { RegistroComponent } from './component/registro/registro.component';
import { PublicacionComponent } from './component/publicacion/publicacion.component';
import { autenticacionGuard } from './guards/autenticacion.guard';

const routes: Routes = [
  {path: '', component:AutenticacionComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'publicacion', canActivate:[autenticacionGuard],component: PublicacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
