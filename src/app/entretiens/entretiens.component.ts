import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { EntretienService } from '../services/entretien.service';
import { FournisseursService } from '../services/fournisseurs.service';
import { TypeEntretiensService } from '../services/type-entretiens.service';
import { VehiculeServiceService } from '../services/VehiculeService';

@Component({
  selector: 'app-entretiens',
  templateUrl: './entretiens.component.html',
  styleUrls: ['./entretiens.component.css']
})
export class EntretiensComponent implements OnInit,OnDestroy {
  

  entretienForm:FormGroup=this.createForm()
  entretiens:any=[]
  types:any=[]
  fournisseurs:any=[]
  id:number=0
  show=false
  matricules:any=[]

  private _unsubscribeAll:Subject<any>=new Subject()

  constructor( private fb:FormBuilder ,private  es:EntretienService , private fs:FournisseursService , private ent:TypeEntretiensService , private vs:VehiculeServiceService ) { }
  

  ngOnInit(): void {
    
    this.getEntretiens()
    this.getFournisseurs()
    this.getTypeEntretiens()
    this.getMatricule()

  }

createForm(form?:any):FormGroup{

return this.fb.group({
idMatricule:form?form.idMatricule:"1",
idType:form?form.idType:"1",
description:form?form.description:"",
idFournisseur:form?form.idFournisseur:"1",
date:form?form.date:"",
montant:form?form.montant:""

})
}

getEntretiens(){
  this.es.getEntretien().subscribe((res)=>{
    this.entretiens=res
  })
}

ajouterEntretien(){

  this.es.postEntretien(this.entretienForm.value).subscribe((res)=>{
console.log(res);
this.getEntretiens()
  })
}

getFournisseurs(){
  this.fs.getAllFournisseurs().subscribe((res)=>
  this.fournisseurs=res)
}



getTypeEntretiens(){
  this.ent.getAllTypes().subscribe((res)=>
  this.types=res)
}

modifier(data:any){
 
  this.entretienForm=this.createForm(data)
  this.id=data.id
  
  
}

sauvegarder(){
this.es.updateEntretien(this.id , this.entretienForm.value ).subscribe(()=>
this.getEntretiens()
)
}


supprimer(id:number){

  this.es.deleteEntretien(id).subscribe((res)=>{
  this.getEntretiens()
  })
}

getMatricule(){
  this.vs.getAllVehicules().subscribe((res)=>{
   this.matricules= res
  })
}

ngOnDestroy(): void {
  this._unsubscribeAll.next(true)
  this._unsubscribeAll.complete()
  
}

}
