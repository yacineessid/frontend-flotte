import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { VehiculeServiceService } from '../services/VehiculeService';

@Component({
  selector: 'app-gestion-vehicules',
  templateUrl: './gestion-vehicules.component.html',
  styleUrls: ['./gestion-vehicules.component.css']
})
export class GestionVehiculesComponent implements OnInit {
  
  
  vehiculeForm:FormGroup=this.createForm()
   data:any=[]

  constructor(private fb:FormBuilder , private vs:VehiculeServiceService) { 

}

createForm(form?:any):FormGroup{
  return this.fb.group({
  matricule:form?form.nom:"",
  marque:form?form.marque:"",
  modele:form?form.modele:"",
  aquisition:form?form.aquisition:"",
  visite:form?form.visite:"",
  assurance:form?form.assurance:"",
  carburant:form?form.carburant:"",
  })
 }

  ngOnInit(): void {

this.getVehicule()

  }
  ajouter(){
   
    this.vs.postVehicule(this.vehiculeForm.value).subscribe((res)=>{
      console.log(res);  
      this.getVehicule()
    })
  }

  getVehicule(){
    this.vs.getAllVehicules().subscribe((res)=>{
      console.log(res);
      this.data=res

      
    })
  }

}
