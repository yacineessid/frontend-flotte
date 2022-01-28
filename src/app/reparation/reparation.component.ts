import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { FournisseursService } from '../services/fournisseurs.service';
import { ReparationService } from '../services/reparation.service';
import { VehiculeServiceService } from '../services/VehiculeService';

@Component({
  selector: 'app-reparation',
  templateUrl: './reparation.component.html',
  styleUrls: ['./reparation.component.css']
})
export class ReparationComponent implements OnInit ,OnDestroy {

  show=false
  reparations:any=[]
  matricules:any=[]
  fournisseurs:any=[]
  id:any=0
  private _unsubscribeAll:Subject<any>=new Subject()
  constructor( private fb:FormBuilder , private vs:VehiculeServiceService , private fs:FournisseursService , private rs:ReparationService) { }

  ReparationForm:FormGroup=this.createForm()

  ngOnInit(): void {
this.getMatricules()
this.getFournisseurs()
this.getReparation()


  }

  createForm(form?:any):FormGroup{
    return this.fb.group({
      idMatricule:form?form.idMatricule:"1",
      description:form?form.description:"",
      idFournisseur:form?form.idFournisseur:"1",
      dateReparation:form?form.dateReparation:"",
      montant:form?form.montant:"",

    })

  }


  ajouterReparation(){
 
    this.rs.PostReparation(this.ReparationForm.value).subscribe(()=>{
      
     this.getReparation()
      
    }
    )
  }

  getReparation(){
    this.rs.getReparation().subscribe((res)=>{
      this.reparations=res
    })
  }

  getMatricules(){
    this.vs.getAllVehicules().subscribe((res)=>{
      this.matricules=res
    }
     )
  }

  getFournisseurs(){
 this.fs.getAllFournisseurs().subscribe((res)=>{
  this.fournisseurs=res
})
  }

  modifier(data:any){
    this.ReparationForm=this.createForm(data)
    this.id=data.id
  }

  sauvegarder(){
    console.log('hey');
    
  this.rs.updateReparation(this.id,this.ReparationForm.value).subscribe(()=>{
    this.getReparation()
  })

  }
  ngOnDestroy(): void {
    this._unsubscribeAll.next(true)
    this._unsubscribeAll.complete()
    
  }
}
