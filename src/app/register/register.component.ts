import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router } from '@angular/router';
import { AuthService } from '../services/AuthService';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

userForm =new  FormGroup({
  username:new FormControl('' ,Validators.required),
  email:new FormControl('' ,Validators.required),
  password:new FormControl('',Validators.required)
});


  constructor( private as:AuthService , private route:Router) { }

  ngOnInit(): void {
      
  }

register(){
this.as.postUser(this.userForm.value).subscribe((res)=>{
  console.log(res);
  this.route.navigate(['/'])
  
})
  
}
  

}
