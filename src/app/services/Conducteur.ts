import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConServiceService {

  constructor(private _http:HttpClient) { }
apiUrl='http://localhost:3000/conducteur'

getallConducteurs():Observable<any>{
  return this._http.get(`${this.apiUrl}`)
}

getOneConducteur(id:number,body:Object):Observable<any>{
  return this._http.get(`${this.apiUrl}/${id}`,body)
}

postConducteur(body:object):Observable<any>{
  return this._http.get(`${this.apiUrl}`,body)

}

updateConducteur(id:number, body:object){
  return this._http.put(`${this.apiUrl}/${id}`,body)
}

deleteConducteur(id:number){
  return this._http.delete(`${this.apiUrl}/${id}`)
}

}
