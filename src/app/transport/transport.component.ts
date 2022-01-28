import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

import { CondService } from '../services/CondService';
import { TransportService } from '../services/transport.service';
import { VehiculeServiceService } from '../services/VehiculeService';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit , OnDestroy {
  show=false
  transport:any=[]
  matricules:any=[]
  conducteurs:any=[]
  id:any=0
openMo=false;
 

  private _unsubscribeAll:Subject<any>=new Subject()
  constructor(private  fb:FormBuilder , private ts:TransportService , private cs:CondService , private vs:VehiculeServiceService ) { }
  transportForm:FormGroup=this.createForm()
  @Output() newItemEvent = new EventEmitter<string>();

  ngOnInit(): void {

    this.getallConducteurs()
    this.getMatricules()
    this.getTransport()
  }

createForm(form?:any):FormGroup{
  return this.fb.group({
    idConducteur:form?form.idConducteur:"1",
    idMatricule:form?form.idMatricule:"1",
    adresse:form?form.adresse:"",
    date:form?form.date:""
  })

}

ajouterTransport(){
  this.ts.postTransport(this.transportForm.value).subscribe((res)=>{
   console.log(res);
   this.getTransport()
   
  })

}

getTransport(){
  this.ts.getTransport().subscribe((res)=>{
    this.transport=res
  })
}

modifier(data:any){

}

sauvegarder(){

}



getallConducteurs(){
  this.cs.getallConducteurs().subscribe((res)=>{
    this.conducteurs=res
  })
}

getMatricules(){
  this.vs.getAllVehicules().subscribe((res)=>{
    this.matricules=res
  })
}



ngOnDestroy(): void {
  this._unsubscribeAll.next(true)
  this._unsubscribeAll.complete()
  
}

supprimer(id:any){
  this.ts.deletetTransport(id).subscribe(()=>{
    this.getTransport()
  })
}



}
