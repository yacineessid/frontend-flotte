import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { Subject } from 'rxjs';
import { VehiculeServiceService } from '../services/VehiculeService';

@Component({
  selector: 'app-gestion-vehicules',
  templateUrl: './gestion-vehicules.component.html',
  styleUrls: ['./gestion-vehicules.component.css']
})
export class GestionVehiculesComponent implements OnInit ,OnDestroy {
  
  
   vehiculeForm:FormGroup=this.createForm()
   data:any=[]
   modeles:any=[]
   marques:any=[]
   id:number=0
   show=false
 
  
   private _unsubscribeAll:Subject<any>=new Subject()
  constructor(private fb:FormBuilder , private vs:VehiculeServiceService) { 

}

createForm(form?:any):FormGroup{
  return this.fb.group({
  matricule:form?form.matricule:"",
  idMarque:form?form.idMarque:"1",
  idModele:form?form.idModele:"1",
  aquisition:form?form.aquisition:"",
  visite:form?form.visite:"",
  assurance:form?form.assurance:"",
  carburant:form?form.carburant:"carburant",
  })
 }

  ngOnInit(): void {

this.getVehicule()
this.getModele()
this.getMarque()

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

  getMarque(){
    this.vs.getMaqueVehicule().subscribe((res)=>{
      console.log(res);
      this.marques=res
    })
  }

  getModele(){
    this.vs.getModeleVehicule().subscribe((res)=>{
      console.log(res);
      this.modeles=res
      
    })
  }

  modifier(data:any){

    this.vehiculeForm=this.createForm(data)
    this.id= data.id
  }

  sauvegarder(){
    this.vs.updateVehicule(this.id , this.vehiculeForm.value).subscribe(()=>{
     
      this.getVehicule()
    })
  }

  delete(id:number){
    this.vs.deleteVehicule(id).subscribe((res)=>{
      console.log('vehicule deleted');
      this.getVehicule()
      
    })
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(true)
    this._unsubscribeAll.complete()
    
}

}
