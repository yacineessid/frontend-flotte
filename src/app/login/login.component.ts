import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/AuthService';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any= FormGroup;
  isSubmitted  =  false;


  constructor(private fb:FormBuilder, private route:Router , private auth :AuthService) { }

  ngOnInit(): void {
    this.loginForm  =  this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get formControls() { return this.loginForm.controls; }


 login(){

   this.auth.logUser(this.loginForm.value).subscribe(()=>{
     this.route.navigate(['/'])
     localStorage.setItem('userConnect' , JSON.stringify(true))
   })
 }
}
