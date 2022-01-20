import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdministationComponent } from './administation/administation.component';
import { CarburantComponent } from './carburant/carburant.component';
import { EntretiensComponent } from './entretiens/entretiens.component';
import { GestionVehiculesComponent } from './gestion-vehicules/gestion-vehicules.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReparationComponent } from './reparation/reparation.component';


const routes: Routes = [
  
  {path:'register' , component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'administration', component:AdministationComponent},
  {path:'entretiens', component:EntretiensComponent},
  {path:'carburant', component:CarburantComponent},
  {path:'gestionVehicule', component:GestionVehiculesComponent},
  {path:'reparation', component:ReparationComponent},
  {path:'',component:AcceuilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
