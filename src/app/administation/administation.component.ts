import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-administation',
  templateUrl: './administation.component.html',
  styleUrls: ['./administation.component.css']
})
export class AdministationComponent implements OnInit {

  conducteurForm:FormGroup=this.createForm()
  data:any=[]

  constructor(private fb: FormBuilder ,  ) { }

  ngOnInit(): void {

  }
  createForm(form?:any): FormGroup{
    return this.fb.group({
      nom: form?form.nom:"",
      email:form?form.email:"",
      telephone:form?form.telephone:""
    })

  }

  ajouter(){
    console.log(this.conducteurForm.value);
    

  this.data.push(this.conducteurForm.value)
  window.location.reload()

  }


}
