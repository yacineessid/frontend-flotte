import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntretienService {

 

  constructor(private _http:HttpClient ,) { }
  apiUrl='http://localhost:3000/entretien'

  postEntretien(body:object):Observable<any>{
    return this._http.post(`${this.apiUrl}` ,body)
  }

  getEntretien():Observable<any>{
    return this._http.get( `${this.apiUrl}`)
  }

  updateEntretien(id:number , body:object):Observable<any>{
    return this._http.put(`${this.apiUrl}/${id}`,body)
  }


  deleteEntretien(id:number):Observable<any>{

    return this._http.delete(`${this.apiUrl}/${id}`)

  }

}
