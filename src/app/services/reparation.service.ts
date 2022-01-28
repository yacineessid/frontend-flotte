import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReparationService {

  constructor(private _http:HttpClient) { }

  apiUrl='http://localhost:3000/reparation'

  PostReparation(body:object):Observable<any>{
  return this._http.post(`${this.apiUrl}`,body)
  }

  getReparation(){
    return this._http.get(`${this.apiUrl}`)
  }


   
updateReparation(id:number,body:object):Observable<any>{
  return this._http.put(`${this.apiUrl}/${id}`,body)
}

}
