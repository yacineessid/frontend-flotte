import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any= FormGroup;
  isSubmitted  =  false;

  constructor(private fb:FormBuilder, private route:Router ) { }

  ngOnInit(): void {
    this.loginForm  =  this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get formControls() { return this.loginForm.controls; }

login(){

}

}
