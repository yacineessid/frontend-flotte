import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculeServiceService {

  constructor(private _http:HttpClient) { }
  apiUrl='http://localhost:3000/voiture'

  getAllVehicules():Observable<any>{

   return this._http.get(`${this.apiUrl}`)
  }
  
  getOneVehicule(id:number):Observable<any>{
    return this._http.get(`${this.apiUrl}/${id}`)
  }
postVehicule(body:object):Observable<any>{
  return this._http.post(`${this.apiUrl}`,body)

}

updateVehicule(id:number,body:object):Observable<any>{
  return this._http.put(`${this.apiUrl}/${id}`,body)
}

deleteVehicule(id:number):Observable<any>{

  return this._http.delete(`${this.apiUrl}/${id}`)
}
}

  
