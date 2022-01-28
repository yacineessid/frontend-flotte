import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/AuthService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  user:any=false
  constructor( private route:Router , private auth:AuthService) { 
  
 
  }

  ngOnInit(): void {
   
 this.user =localStorage.getItem('userConnect')
  
  }

logOut(){
  console.log('out');
  
  localStorage.removeItem("userConnect")

  this.route.navigate(['/login'])
}
}
