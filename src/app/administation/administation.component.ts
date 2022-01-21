import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {CondService} from '../services/CondService'



@Component({
  selector: 'app-administation',
  templateUrl: './administation.component.html',
  styleUrls: ['./administation.component.css']
})
export class AdministationComponent implements OnInit {

  conducteurForm:FormGroup=this.createForm()
  data:any=[]
  id:number=0
  insubscribe:any
  constructor(private cd:CondService,  private fb: FormBuilder , public mt:MatDialog) { 

  }

  ngOnInit(): void {
    this.getCond()

  }

 
  createForm(form?:any): FormGroup{
    return this.fb.group({
      nom: form?form.nom:"",
      prenom:form?form.prenom:"",
      email:form?form.email:"",
      telephone:form?form.telephone:"",
      dateEntree:form?form.dateEntree:"",
      dateSortie:form?form.dateSortie:""     
    })

  }

  ajouter(){
   
    this.cd.postConducteur(this.conducteurForm.value).subscribe((res)=>{
      console.log(res);
      window.location.reload()
      this.getCond()
      
    })

  }
  getCond(){
    this.cd.getallConducteurs().subscribe((res)=>{
      this.data=res
      console.log(res);
      
    })
  }

  modifier(data:any){

  this.conducteurForm=this.createForm(data)
  this.id=data.id
  }

  sauvegarder(){

    this.cd.updateConducteur(this.id ,this.conducteurForm.value).subscribe((res)=>{
      this.data=res 
    })
    this.getCond()
    this.mt.closeAll()
  }

  deleteCond(id:number){
  this.cd.deleteConducteur(id).subscribe((res)=>{
    console.log( res);
    window.location.reload()
    
  })
  }
  }


