
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'



import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HeaderComponent } from './header/header.component';
import { AdministationComponent } from './administation/administation.component';
import { GestionVehiculesComponent } from './gestion-vehicules/gestion-vehicules.component';
import { EntretiensComponent } from './entretiens/entretiens.component';
import { ReparationComponent } from './reparation/reparation.component';
import { CarburantComponent } from './carburant/carburant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';






@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent ,
    UsersComponent,
    AcceuilComponent,
    HeaderComponent,
    AdministationComponent,
    GestionVehiculesComponent,
    EntretiensComponent,
    ReparationComponent,
    CarburantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
