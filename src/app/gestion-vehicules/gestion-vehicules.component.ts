import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-gestion-vehicules',
  templateUrl: './gestion-vehicules.component.html',
  styleUrls: ['./gestion-vehicules.component.css']
})
export class GestionVehiculesComponent implements OnInit {
  
  
  vehiculeForm:FormGroup=this.createForm()
   data:any=[]

  constructor(private fb:FormBuilder) { 

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

  }
  ajouter(){

    
  }

}
