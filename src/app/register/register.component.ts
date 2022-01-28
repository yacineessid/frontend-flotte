import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router } from '@angular/router';
import { AuthService } from '../services/AuthService';
import { Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit  ,OnDestroy {

userForm =new  FormGroup({
  username:new FormControl('' ,Validators.required),
  email:new FormControl('' ,[Validators.required , Validators.email]  ),
  password:new FormControl('',[Validators.required ,Validators.minLength(8)]) 
});

 private _unsubscribeAll:Subject<any>=new Subject()
  constructor( private as:AuthService , private route:Router) { }

  ngOnInit(): void {
      console.log(this.userForm.get("password"));
      
  }

register(){
this.as.postUser(this.userForm.value).pipe(takeUntil(this._unsubscribeAll)).subscribe((res)=>{
  console.log(res);
  this.route.navigate(['/login'])
  
})
  
}
  
ngOnDestroy(): void {
    this._unsubscribeAll.next(true)
    this._unsubscribeAll.complete()
    
}
}
