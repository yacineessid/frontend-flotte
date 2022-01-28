import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { CarburantService } from '../services/carburant.service';
import { CondService } from '../services/CondService';
import { FournisseursService } from '../services/fournisseurs.service';
import { ReparationService } from '../services/reparation.service';
import { VehiculeServiceService } from '../services/VehiculeService';

@Component({
  selector: 'app-carburant',
  templateUrl: './carburant.component.html',
  styleUrls: ['./carburant.component.css']
})
export class CarburantComponent implements OnInit, OnDestroy {
show=false
carburantForm:FormGroup=this.createForm()
carburants:any=[]
id:any=0
conducteurs:any=[]
matricules:any=[]
fournisseurs:any=[]

private _unsubscribeAll:Subject<any>=new Subject()
  constructor(private fb:FormBuilder , private carb:CarburantService , private fs:FournisseursService,private vs:VehiculeServiceService, private cs:CondService) { }

  ngOnInit(): void {
this.getFournisseurs()
this.getConducteurs()
this.getMAtricules()
this.getCarburant()

  }

  createForm(form?:any):FormGroup{
 return this.fb.group({
idConducteur:form?form.idConducteur:"1",
idMatricule:form?form.idMatricule:"1",
idFournisseur:form?form.idFournisseur:"1",
date:form?form.date:"",
coutLitre:form?form.coutLitre:"",
coutTotal:form?form.coutTotal:"",
quantiteLitre:form?form.quantiteLitre:"",


 })

  }

ajouterCarburant(){
this.carb.addCarburant(this.carburantForm.value).subscribe((res)=>{
  console.log(res);
  this.getCarburant()  
})

}

getCarburant(){
  this.carb.getCarburant().subscribe((res)=>{
    this.carburants=res
    
  })
}


sauvegarder(){
}

supprimer(id:any){
  this.carb.deleteCraburant(id).subscribe((res)=>{
    this.getCarburant()
    
  })

}

getFournisseurs(){
  this.fs.getAllFournisseurs().subscribe((res)=>{
    this.fournisseurs=res
  })
}


getMAtricules(){
  this.vs.getAllVehicules().subscribe((res)=>{
    this.matricules=res
  })  
}

getConducteurs(){
  this.cs.getallConducteurs().subscribe((res)=>{
    this.conducteurs=res
  })
}


calcul(){

let coutTotal=this.carburantForm.get("coutTotal")?.value
let quantiteLitre =this.carburantForm.get("quantiteLitre")?.value

if(coutTotal&&quantiteLitre){
  this.carburantForm.get("coutLitre")?.setValue(
  (coutTotal/quantiteLitre).toFixed(2))
    
}}



ngOnDestroy(): void {
  this._unsubscribeAll.next(true)
  this._unsubscribeAll.complete()
  
}
}
