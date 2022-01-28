import { Injectable } from '@angular/core';
import { HttpClient,} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }
  //connect frontend to backend

apiUrl='http://localhost:3000/user'



//get all data

  getAllUsers():Observable<any>{
  return this._http.get(`${this.apiUrl}`)    
  }

  //get user byt id

  getOneUser(id:number ,body:object):Observable<any>{
  
    return this._http.get(`${this.apiUrl}/${id}`,body)
  }

  //get log UsersComponent

  logUser(body:object):Observable<any>{
    return  this._http.post(`${this.apiUrl}/login`,body)
  }
  
  //post data
   postUser(body:Object):Observable<any>{
    
    return this._http.post(`${this.apiUrl}`,body)    
      
   }

   updateUser(id:number ,body:Object){
     return this._http.put(`${this.apiUrl}/${id}`,body)
   }

   deleteUser(id:number){
    
     return this._http.delete(`${this.apiUrl}/${id}`)
   }

   //update data 
}

