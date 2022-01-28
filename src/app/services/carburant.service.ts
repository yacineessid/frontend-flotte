import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarburantService {

  constructor(private _http:HttpClient) { }

  apiUrl='http://localhost:3000/carburant'

 addCarburant(body:object):Observable<any>{

 return  this._http.post(`${this.apiUrl}`,body)
}

getCarburant():Observable<any>{

  return this._http.get(`${this.apiUrl}`)
}

deleteCraburant(id:number):Observable<any>{
  return this._http.delete(`${this.apiUrl}/${id}`)
}

}




