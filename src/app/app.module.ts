
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';



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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransportComponent } from './transport/transport.component';







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
    TransportComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
